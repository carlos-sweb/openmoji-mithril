import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the OpenMoji "flag: Guinea" (color) [1F1EC-1F1F3]. */
const EmojiFlagGuinea = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}), content: `
  <g id="color">
    <rect x="5" y="17" width="62" height="38" fill="#fcea2b"/>
    <rect x="5" y="17" width="21" height="38" fill="#d22f27"/>
    <rect x="46" y="17" width="21" height="38" fill="#5c9e31"/>
  </g>
  <g id="line">
    <rect x="5" y="17" width="62" height="38" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
` }
  )
}
export default EmojiFlagGuinea
