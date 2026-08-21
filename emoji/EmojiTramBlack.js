import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "tram" (black) [1F68A]. */
const EmojiTramBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="line">
    <rect x="21.6" y="15" rx="3.0558" ry="3.0558" width="28.8" height="33" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <line x1="24" x2="16" y1="51" y2="60" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
    <line x1="48" x2="56" y1="51" y2="60" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
    <polygon fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="35.166 15 27 8 44 8 35.166 15"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M47,20V33H26"/>
    <polyline fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="26 42 30 42 30 38"/>
    <polyline fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="43 42 47 42 47 38"/>
  </g>
`)
  )
}
export default EmojiTramBlack
