import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the OpenMoji "flag: Bahrain" (color) [1F1E7-1F1ED]. */
const EmojiFlagBahrain = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}), content: `
  <g id="color">
    <rect x="5" y="17" width="62" height="38" fill="#d22f27"/>
    <path fill="#fff" d="m21 18-16-1v38l16-1 9.067-3.6-9.067-3.6 9.067-3.6-9.067-3.6 8.933-3.6-8.933-3.6 8.933-3.6-8.933-3.6 8.933-3.6z"/>
  </g>
  <g id="line">
    <rect x="5" y="17" width="62" height="38" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
` }
  )
}
export default EmojiFlagBahrain
