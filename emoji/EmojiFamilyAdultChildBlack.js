import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "family: adult, child" (black) [1F9D1-200D-1F9D2]. */
const EmojiFamilyAdultChildBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="line">
    <circle cx="51" cy="39" r="5" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M42,57v-3c0-3.3137,2.6863-6,6-6h6c3.3137,0,6,2.6863,6,6v3"/>
    <circle cx="26" cy="22" r="6" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14,57v-16c0-4.4183,3.5817-8,8-8h8c4.4183,0,8,3.5817,8,8v16"/>
  </g>
`)
  )
}
export default EmojiFamilyAdultChildBlack
