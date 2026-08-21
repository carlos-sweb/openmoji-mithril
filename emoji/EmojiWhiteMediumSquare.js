import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "white medium square" (color) [25FB]. */
const EmojiWhiteMediumSquare = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="color">
    <rect x="16.0834" y="15.9375" width="39.8332" height="39.8332" fill="#ffffff" stroke="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
  <g id="line">
    <rect x="16.0834" y="15.9375" width="39.8332" height="39.8332" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
`)
  )
}
export default EmojiWhiteMediumSquare
