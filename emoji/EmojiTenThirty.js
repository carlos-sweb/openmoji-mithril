import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "ten-thirty" (color) [1F565]. */
const EmojiTenThirty = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="color">
    <circle cx="35.958" cy="35.99" r="23" fill="#FFFFFF" stroke="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <line x1="36" x2="36" y1="36.0623" y2="53.0623" fill="#FFFFFF" stroke="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <line x1="35.9353" x2="26.4091" y1="36.0306" y2="30.5306" fill="#FFFFFF" stroke="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
  </g>
  <g id="hair"/>
  <g id="skin"/>
  <g id="skin-shadow"/>
  <g id="line">
    <circle cx="35.958" cy="35.99" r="23" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <line x1="36" x2="36" y1="36.0623" y2="53.0623" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <line x1="35.9353" x2="26.4091" y1="36.0306" y2="30.5306" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
  </g>
`)
  )
}
export default EmojiTenThirty
