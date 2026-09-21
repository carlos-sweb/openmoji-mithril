import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the OpenMoji "flag: Togo" (color) [1F1F9-1F1EC]. */
const EmojiFlagTogo = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}), content: `
  <g id="color">
    <rect x="5" y="17" width="62" height="38" fill="#fcea2b"/>
    <rect x="5" y="32" width="62" height="8" fill="#5c9e31"/>
    <rect x="5" y="47" width="62" height="8" fill="#5c9e31"/>
    <rect x="5" y="17" width="62" height="8" fill="#5c9e31"/>
    <rect x="5" y="17" width="23" height="23" fill="#d22f27"/>
    <polygon fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" points="14.415 33 17.07 25 19.359 32.878 13 28.131 21 27.933 14.415 33"/>
  </g>
  <g id="line">
    <rect x="5" y="17" width="62" height="38" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
` }
  )
}
export default EmojiFlagTogo
