import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the OpenMoji "flag: Honduras" (color) [1F1ED-1F1F3]. */
const EmojiFlagHonduras = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}), content: `
  <g id="color">
    <rect x="5" y="17" width="62" height="38" fill="#fff"/>
    <rect x="5" y="17" width="62" height="13" fill="#61b2e4"/>
    <rect x="5" y="42" width="62" height="13" fill="#61b2e4"/>
    <circle cx="36" cy="36" r="1.5" fill="#61b2e4"/>
    <circle cx="43" cy="39" r="1.5" fill="#61b2e4"/>
    <circle cx="43" cy="33" r="1.5" fill="#61b2e4"/>
    <circle cx="29" cy="39" r="1.5" fill="#61b2e4"/>
    <circle cx="29" cy="33" r="1.5" fill="#61b2e4"/>
  </g>
  <g id="line">
    <rect x="5" y="17" width="62" height="38" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
` }
  )
}
export default EmojiFlagHonduras
