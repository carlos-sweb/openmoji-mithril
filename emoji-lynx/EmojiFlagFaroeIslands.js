import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the OpenMoji "flag: Faroe Islands" (color) [1F1EB-1F1F4]. */
const EmojiFlagFaroeIslands = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}), content: `
  <g id="color">
    <rect x="5" y="17" width="62" height="38" fill="#fff"/>
    <polygon fill="#d22f27" stroke="#1e50a0" stroke-miterlimit="10" stroke-width="2" points="67 33 30 33 30 17 24 17 24 33 5 33 5 39 24 39 24 55 30 55 30 39 67 39 67 33"/>
  </g>
  <g id="line">
    <rect x="5" y="17" width="62" height="38" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
` }
  )
}
export default EmojiFlagFaroeIslands
