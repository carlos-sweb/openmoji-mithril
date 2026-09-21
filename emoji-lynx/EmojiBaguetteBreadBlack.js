import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the OpenMoji "baguette bread" (black) [1F956]. */
const EmojiBaguetteBreadBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}), content: `
  <g id="line">
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M11.9307,45.9297c-3.9043,3.9043-3.9063,10.2363,0,14.1416c3.9043,3.9053,10.2382,3.9053,14.1425,0.001l33.9991-34.001 c3.9043-3.9063,3.9043-10.2373,0-14.1416c-3.9063-3.9063-10.2373-3.9063-14.1426-0.001L11.9307,45.9297z"/>
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M45.9297,11.9287c-3.9043,3.9053-3.9043,10.2373,0,14.1426"/>
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M37.4297,20.4287c-3.9043,3.9053-3.9043,10.2373,0,14.1426"/>
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M28.9297,28.9287c-3.9033,3.9063-3.9033,10.2383,0,14.1426"/>
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M20.4307,37.4297c-3.9043,3.9053-3.9043,10.2373,0,14.1426"/>
  </g>
` }
  )
}
export default EmojiBaguetteBreadBlack
