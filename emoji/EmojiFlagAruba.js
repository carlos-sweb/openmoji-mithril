import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "flag: Aruba" (color) [1F1E6-1F1FC]. */
const EmojiFlagAruba = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="color">
    <rect x="5" y="17" width="62" height="38" fill="#61b2e4"/>
    <rect x="5" y="47" width="62" height="2" fill="#f1b31c"/>
    <rect x="5" y="43" width="62" height="2" fill="#f1b31c"/>
    <polygon fill="#d22f27" stroke="#d22f27" stroke-linecap="round" stroke-linejoin="round" points="12.707 23.293 16 24 12.707 24.707 12 28 11.293 24.707 8 24 11.293 23.293 12 20 12.707 23.293"/>
  </g>
  <g id="line">
    <rect x="5" y="17" width="62" height="38" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
`)
  )
}
export default EmojiFlagAruba
