import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "Chrome" (black) [E054]. */
const EmojiChromeBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="line">
    <circle cx="36" cy="36" r="28" fill="none" stroke="#000" stroke-width="2"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-width="2" d="M36 26H59"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-width="2" d="M44.6602 41L33.1602 60.9186"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-width="2" d="M11.0814 33.1603L31 44.6603"/>
    <circle cx="36" cy="36" r="10" fill="none" stroke="#000" stroke-width="2"/>
  </g>
`)
  )
}
export default EmojiChromeBlack
