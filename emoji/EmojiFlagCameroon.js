import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "flag: Cameroon" (color) [1F1E8-1F1F2]. */
const EmojiFlagCameroon = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="color">
    <rect x="5" y="17" width="62" height="38" fill="#d22f27"/>
    <rect x="5" y="17" width="21" height="38" fill="#5c9e31"/>
    <rect x="46" y="17" width="21" height="38" fill="#f1b31c"/>
    <polygon fill="#f1b31c" stroke="#f1b31c" stroke-linecap="round" stroke-linejoin="round" points="33.528 40 36 32 38.473 40 32 35.055 40 35.056 33.528 40"/>
  </g>
  <g id="line">
    <rect x="5" y="17" width="62" height="38" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
`)
  )
}
export default EmojiFlagCameroon
