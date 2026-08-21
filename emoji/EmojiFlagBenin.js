import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "flag: Benin" (color) [1F1E7-1F1EF]. */
const EmojiFlagBenin = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="color">
    <rect x="5" y="17" width="62" height="38" fill="#f1b31c"/>
    <rect x="5" y="36" width="62" height="19" fill="#d22f27"/>
    <rect x="5" y="17" width="21" height="38" fill="#5c9e31"/>
  </g>
  <g id="line">
    <rect x="5" y="17" width="62" height="38" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
`)
  )
}
export default EmojiFlagBenin
