import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "chrome canary" (black) [E065]. */
const EmojiChromeCanaryBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="line" fill="none" stroke="#000" stroke-width="2">
    <circle cx="36" cy="36" r="10"/>
    <path stroke-linecap="round" d="m44.66 41-11.5 19.92"/>
    <path stroke-linecap="round" d="m11.08 33.16 19.92 11.5"/>
    <path stroke-linecap="round" d="m36 26h23"/>
    <circle cx="36" cy="36" r="28"/>
  </g>
`)
  )
}
export default EmojiChromeCanaryBlack
