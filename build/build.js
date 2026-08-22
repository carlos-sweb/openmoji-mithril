#!/usr/bin/env bun
/**
 * Deterministic OpenMoji -> Mithril component generator.
 *
 * Usage: bun run build/build.js [sourceDir] [outDir]
 *   sourceDir  directory of the official "openmoji" npm package
 *              (expects <sourceDir>/data/openmoji.json, <sourceDir>/{color,black}/svg/*.svg)
 *   outDir     where to emit emoji/, index.js, index.d.ts, default_attrs.js
 *
 * Both arguments are optional; they default to node_modules/openmoji and the
 * repository root respectively. Output is fully deterministic: identical
 * inputs always produce byte-identical outputs (byte-wise file ordering via
 * Array.prototype.sort(), color variant processed completely before black).
 */
import { readdir, readFile } from 'fs/promises'
import { existsSync, mkdirSync } from 'fs'
import { join, resolve } from 'path'

const REPO_ROOT = join(import.meta.dir, '..')

const sourceArg = process.argv[2]
const outArg = process.argv[3]
const sourceDir = sourceArg ? resolve(process.cwd(), sourceArg) : join(REPO_ROOT, 'node_modules/openmoji')
const outDir = outArg ? resolve(process.cwd(), outArg) : REPO_ROOT

const DATA_FILE = join(sourceDir, 'data/openmoji.json')
const COLOR_DIR = join(sourceDir, 'color/svg')
const BLACK_DIR = join(sourceDir, 'black/svg')

const missing = []
if (!existsSync(DATA_FILE)) missing.push(DATA_FILE)
if (!existsSync(COLOR_DIR)) missing.push(COLOR_DIR)
if (!existsSync(BLACK_DIR)) missing.push(BLACK_DIR)
if (missing.length > 0) {
  console.error(`error: missing required input(s) under source dir "${sourceDir}":`)
  for (const path of missing) console.error(`  - ${path} not found`)
  console.error('usage: bun run build/build.js [sourceDir] [outDir]')
  process.exit(1)
}

/** CLDR annotation / hexcode -> PascalCase identifier seed ([A-Za-z0-9] only). */
function pascal(s) {
  return s
    .normalize('NFKD')
    .replace(/[^A-Za-z0-9 ]/g, ' ')
    .split(/\s+/)
    .filter(Boolean)
    .map(w => w[0].toUpperCase() + w.slice(1))
    .join('')
}

/** Inner SVG markup (between the closing ">" of <svg ...> and final "</svg>") + viewBox. */
function parseSvg(content) {
  const openTagStart = content.indexOf('<svg')
  const openTagEnd = content.indexOf('>', openTagStart)
  const closeStart = content.lastIndexOf('</svg>')
  const inner =
    openTagStart !== -1 && openTagEnd !== -1 && closeStart !== -1
      ? content.slice(openTagEnd + 1, closeStart)
      : ''
  const openTag = openTagEnd !== -1 ? content.slice(openTagStart, openTagEnd + 1) : ''
  const viewBoxMatch = openTag.match(/viewBox="([^"]+)"/)
  const viewBox = viewBoxMatch ? viewBoxMatch[1] : '0 0 72 72'
  return { inner, viewBox }
}

// (a) hexcode -> annotation map
const annotations = new Map()
for (const entry of JSON.parse(await readFile(DATA_FILE, 'utf8'))) {
  if (entry && typeof entry.hexcode === 'string') {
    annotations.set(entry.hexcode, typeof entry.annotation === 'string' ? entry.annotation : '')
  }
}

// (b) byte-wise sorted listings (Array.prototype.sort(); localeCompare is forbidden: not machine-stable)
async function listSvg(dir) {
  return (await readdir(dir)).filter(f => f.endsWith('.svg')).sort()
}
const colorFiles = await listSvg(COLOR_DIR)
const blackFiles = await listSvg(BLACK_DIR)

mkdirSync(join(outDir, 'emoji'), { recursive: true })

await Bun.write(
  join(outDir, 'default_attrs.js'),
  `export default function (size) {
  return {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 72 72',
    width: size || 72,
    height: size || 72
  }
}
`
)
await Bun.write(
  join(outDir, 'default_attrs.d.ts'),
  `export default function (size?: number): {
  xmlns: string
  viewBox: string
  width: number
  height: number
}
`
)

// Global dedupe state — deterministic because color is processed fully before black,
// each list in byte-wise basename order.
const usedNames = new Set()
const emittedNames = []
let collisions = 0
const counts = { color: 0, black: 0 }

async function emit(dirPath, file, variant) {
  const hexcode = file.replace(/\.svg$/, '')
  const content = await readFile(join(dirPath, file), 'utf8')
  const { inner, viewBox } = parseSvg(content)

  // (d) naming pipeline with global deterministic dedupe
  const ann = annotations.get(hexcode)
  const base = ann ? pascal(ann) : pascal(hexcode.replaceAll('-', ' '))
  const effectiveBase = base === '' ? hexcode.replaceAll('-', '') : base
  const suffix = variant === 'black' ? 'Black' : ''
  const preferred = 'Emoji' + effectiveBase + suffix
  const fallback = 'Emoji' + hexcode.replaceAll('-', '') + suffix

  let name = preferred
  if (usedNames.has(name)) {
    collisions++
    name = fallback
    if (usedNames.has(name)) {
      let n = 2
      while (usedNames.has(`${fallback}_${n}`)) n++
      name = `${fallback}_${n}`
    }
  }
  usedNames.add(name)
  emittedNames.push(name)

  // (e) escape inner markup for a template literal — order matters: backslash, backtick, ${
  const escaped = inner
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`')
    .replace(/\$\{/g, '\\${')

  // viewBox override only when it differs from default_attrs' '0 0 72 72'
  const viewboxOverride = viewBox === '0 0 72 72' ? '' : `, viewBox: '${viewBox}'`
  const label = ann || hexcode

  const componentCode = `import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "${label}" (${variant}) [${hexcode}]. */
const ${name} = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size)${viewboxOverride}, ...(vnode.attrs || {}) },
    m.trust(\`${escaped}\`)
  )
}
export default ${name}
`

  await Bun.write(join(outDir, 'emoji', `${name}.js`), componentCode)
  await Bun.write(
    join(outDir, 'emoji', `${name}.d.ts`),
    `import type { Vnode } from 'mithril'\n\ndeclare const ${name}: { view: (vnode: Vnode<{ size?: number; [key: string]: any }>) => any }\nexport default ${name}\n`
  )
  counts[variant]++
}

for (const file of colorFiles) await emit(COLOR_DIR, file, 'color')
for (const file of blackFiles) await emit(BLACK_DIR, file, 'black')

// (f) index artifacts, byte-wise ordered by Name
const names = emittedNames.sort()

await Bun.write(
  join(outDir, 'index.js'),
  names.map(n => `export { default as ${n} } from './emoji/${n}.js'`).join('\n') + '\n'
)

const declarations = names.map(
  n => `export declare const ${n}: { view: (vnode: Vnode<{ size?: number; [key: string]: any }>) => any }`
)
await Bun.write(
  join(outDir, 'index.d.ts'),
  `import type { Vnode } from 'mithril'\n\n${declarations.join('\n')}\n`
)

// (g) summary log — all counts computed dynamically from fs/data
console.log(`color components: ${counts.color}`)
console.log(`black components: ${counts.black}`)
console.log(`total components: ${names.length}`)
console.log(`name collisions resolved by fallback: ${collisions}`)
console.log(`output written to ${outDir} (emoji/*.js, emoji/*.d.ts, index.js, index.d.ts, default_attrs.js, default_attrs.d.ts)`)
