# openmoji-mithril

[OpenMoji](https://openmoji.org/) SVGs as [Mithril.js](https://mithril.js.org/) components — 8,990 emoji components generated deterministically from the official `openmoji` npm package.

## Install

```bash
bun add openmoji-mithril
# or
npm install openmoji-mithril
```

## Usage

Each component corresponds to an OpenMoji glyph, prefixed with `Emoji` and converted to PascalCase from its CLDR annotation. Color variants use the base name; black variants add a `Black` suffix.

```js
import m from 'mithril'
import { EmojiGrinningFace, EmojiGrinningFaceBlack } from 'openmoji-mithril'

// Basic usage — renders at the default 72×72 size
m(EmojiGrinningFace)

// Custom size (glyphs are square)
m(EmojiGrinningFaceBlack, { size: 64 })

// Any additional SVG attributes are passed through
m(EmojiGrinningFace, { size: 48, class: 'my-emoji' })
```

### Component naming

| OpenMoji source                          | Component name                                  |
|------------------------------------------|-------------------------------------------------|
| `1F600` color                            | `EmojiGrinningFace`                             |
| `1F600` black                            | `EmojiGrinningFaceBlack`                        |
| `1FAF1-1F3FF-200D-1FAF2-1F3FC` color     | `EmojiHandshakeDarkSkinToneMediumLightSkinTone` |
| CLDR name collision                      | hexcode fallback: `Emoji002AFE0F20E3`           |

Skin-tone ZWJ sequences are included as flat PascalCase names (`...LightSkinTone`, `...MediumSkinTone`, `...MediumDarkSkinTone`, `...DarkSkinTone`). When two glyphs share the same CLDR annotation, the component falls back to the raw hexcode with dashes removed to keep every export unique.

All 8,990 glyphs from the official OpenMoji release are available (4,485 color + 4,505 black).

### Deep imports

For maximum tree-shaking — when you use a single emoji — import the component file directly instead of the package root:

```js
import EmojiGrinningFace from 'openmoji-mithril/emoji/EmojiGrinningFace.js'

m(EmojiGrinningFace, { size: 48 })
```

Both `openmoji-mithril/emoji/EmojiGrinningFace` (no extension) and `openmoji-mithril/emoji/EmojiGrinningFace.js` resolve, with TypeScript declarations included. This loads exactly one component module with no bundler magic; the named import from the package root achieves the same result via `sideEffects: false` + tree-shaking, since every component lives in its own file.

## Build

To regenerate the components from the latest version of OpenMoji:

```bash
bun install
bun run build
```

The build script reads SVGs and CLDR data directly from the official `openmoji` npm package in devDependencies (`node_modules/openmoji/`), so no manual cloning is needed. It regenerates `emoji/*.js`, `emoji/*.d.ts`, `index.js`, `index.d.ts`, `default_attrs.js` and `default_attrs.d.ts` deterministically — identical inputs always produce byte-identical outputs.

## Project structure

```
openmoji-mithril/
├── build/
│   └── build.js          # Build script
├── emoji/                # Generated emoji components (~18k files: .js + .d.ts)
│   ├── EmojiGrinningFace.js
│   ├── EmojiGrinningFace.d.ts
│   ├── EmojiGrinningFaceBlack.js
│   └── ...
├── test/                 # Manual browser demo
├── default_attrs.js      # Default SVG attributes (size, viewBox)
├── default_attrs.d.ts    # TypeScript declarations for default_attrs
├── index.js              # Generated entry point (all exports)
├── index.d.ts            # Generated TypeScript declarations
├── LICENSE               # MIT (code)
└── NOTICE                # OpenMoji graphics attribution
```

## License

MIT — see [LICENSE](LICENSE).

The emoji graphics are sourced from [OpenMoji](https://openmoji.org/) and are licensed under **CC BY-SA 4.0** ([Creative Commons Attribution-ShareAlike 4.0 International](https://creativecommons.org/licenses/by-sa/4.0/)). © OpenMoji — the open-source emoji and icon project. This attribution applies to all distributed artwork; see [NOTICE](NOTICE) for details.
