import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the OpenMoji "flag: Laos" (color) [1F1F1-1F1E6]. */
const EmojiFlagLaos = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}), content: `
  <g id="color">
    <rect x="5" y="17" width="62" height="38" fill="#1e50a0"/>
    <circle cx="36" cy="36.013" r="8.5" fill="#fff"/>
    <rect x="5" y="48" width="62" height="7" fill="#d22f27"/>
    <rect x="5" y="17" width="62" height="7" fill="#d22f27"/>
  </g>
  <g id="line">
    <rect x="5" y="17" width="62" height="38" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
` }
  )
}
export default EmojiFlagLaos
