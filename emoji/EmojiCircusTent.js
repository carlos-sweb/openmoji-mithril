import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "circus tent" (color) [1F3AA]. */
const EmojiCircusTent = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="color">
    <rect x="11.5" y="39" width="49" height="16" fill="#FFFFFF" stroke="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <polygon fill="#FFFFFF" stroke="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" points="36,25 11.5,39 60.5,39"/>
    <polygon fill="#EA5A47" stroke="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" points="36,25 20.5,39 51.5,39"/>
    <polygon fill="#FFFFFF" stroke="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" points="36,25 30.5,39 41.5,39"/>
    <rect x="21" y="39" width="30" height="16" fill="#EA5A47" stroke="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <rect x="30.5" y="39" width="11" height="16" fill="#FFFFFF" stroke="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <rect x="36" y="44" width="0" height="11" fill="#FFFFFF" stroke="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <polygon fill="#3F3F3F" stroke="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" points="36,44 33,55 39,55"/>
  </g>
  <g id="hair"/>
  <g id="skin"/>
  <g id="skin-shadow"/>
  <g id="line">
    <rect x="11.5" y="39" width="49" height="16" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <polygon fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" points="36,25 11.5,39 60.5,39"/>
    <polygon fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" points="36,25 20.5,39 51.5,39"/>
    <polygon fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" points="36,25 30.5,39 41.5,39"/>
    <rect x="21" y="39" width="30" height="16" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <rect x="30.5" y="39" width="11" height="16" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <rect x="36" y="44" width="0" height="11" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <polygon fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" points="36,44 33,55 39,55"/>
  </g>
`)
  )
}
export default EmojiCircusTent
