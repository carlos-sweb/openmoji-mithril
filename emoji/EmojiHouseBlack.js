import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "house" (black) [1F3E0]. */
const EmojiHouseBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="line">
    <rect x="25" y="40" width="9" height="16" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <rect x="40" y="40" width="8" height="7" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <polygon fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" points="53,32 19,32.0003 19,31 35,15 53,31"/>
    <rect x="19" y="32" width="34" height="24" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <polygon fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" points="29,21 24,26 24,17 29,17"/>
  </g>
`)
  )
}
export default EmojiHouseBlack
