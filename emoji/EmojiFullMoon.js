import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "full moon" (color) [1F315]. */
const EmojiFullMoon = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="color">
    <circle cx="36" cy="36" r="28" fill="#fcea2b" stroke="#fcea2b" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
  <g id="line">
    <circle cx="36" cy="36" r="28" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
`)
  )
}
export default EmojiFullMoon
