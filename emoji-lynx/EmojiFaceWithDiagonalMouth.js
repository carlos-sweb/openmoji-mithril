import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the OpenMoji "face with diagonal mouth" (color) [1FAE4]. */
const EmojiFaceWithDiagonalMouth = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}), content: `
  <g id="color">
    <circle cx="36.341" cy="36.7559" r="22.9999" fill="#fcea2b"/>
  </g>
  <g id="line">
    <circle cx="36.341" cy="36.7559" r="23" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <path d="M30.341,31.7559a3,3,0,1,1-3-3,3.0011,3.0011,0,0,1,3,3"/>
    <path d="M48.341,31.7559a3,3,0,1,1-3-3,3.001,3.001,0,0,1,3,3"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M26,48c10-5,21-4.03,21-4.03"/>
  </g>
` }
  )
}
export default EmojiFaceWithDiagonalMouth
