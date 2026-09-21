import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the OpenMoji "flag: Malawi" (color) [1F1F2-1F1FC]. */
const EmojiFlagMalawi = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}), content: `
  <g id="color">
    <rect x="5" y="17" width="62" height="38" fill="#5c9e31"/>
    <rect x="5" y="17" width="62" height="13"/>
    <rect x="5" y="30" width="62" height="12" fill="#d22f27"/>
    <path fill="#d22f27" stroke="#d22f27" stroke-miterlimit="10" d="M29.2393,30.9991A7.503,7.503,0,0,1,42.76,30.9984Z"/>
    <path fill="none" stroke="#d22f27" stroke-miterlimit="10" d="M26.54,31a10.004,10.004,0,0,1,18.92-.0009Z"/>
  </g>
  <g id="line">
    <rect x="5" y="17" width="62" height="38" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
` }
  )
}
export default EmojiFlagMalawi
