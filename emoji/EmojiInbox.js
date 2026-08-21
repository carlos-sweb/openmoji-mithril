import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "inbox" (color) [E266]. */
const EmojiInbox = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="color">
    <rect x="35" y="16" width="25" height="40" fill="#FFFFFF" stroke="none"/>
    <polyline fill="#D0CFCE" stroke="none" points="60.0526,56 60.0526,28 35,56"/>
  </g>
  <g id="hair"/>
  <g id="skin"/>
  <g id="skin-shadow"/>
  <g id="line">
    <rect x="35" y="16" width="25" height="40" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <line x1="30" x2="11" y1="36" y2="36" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <line x1="24" x2="30" y1="30" y2="36" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <line x1="23.9998" x2="29.9998" y1="42" y2="36" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
  </g>
`)
  )
}
export default EmojiInbox
