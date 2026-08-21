import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "white square" (color) [25A1]. */
const EmojiWhiteSquare = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="color">
    <rect x="16" y="4" width="40" height="64" fill="#FFA7C0" stroke="#FFA7C0" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
  </g>
  <g id="hair"/>
  <g id="skin"/>
  <g id="skin-shadow"/>
  <g id="line">
    <rect x="16" y="10.9583" width="40" height="50" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <line x1="56" x2="16" y1="10.9583" y2="60.9583" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <line x1="16" x2="56" y1="10.9583" y2="60.9583" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
  </g>
`)
  )
}
export default EmojiWhiteSquare
