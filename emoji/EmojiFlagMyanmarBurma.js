import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "flag: Myanmar (Burma)" (color) [1F1F2-1F1F2]. */
const EmojiFlagMyanmarBurma = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="color">
    <rect x="5" y="17" width="62" height="38" fill="#d22f27"/>
    <rect x="5" y="17" width="62" height="13" fill="#f1b31c"/>
    <rect x="5" y="30" width="62" height="12" fill="#5c9e31"/>
    <polygon fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" points="30.183 46 36.158 28 41.309 45.725 27 35.044 45 34.6 30.183 46"/>
  </g>
  <g id="line">
    <rect x="5" y="17" width="62" height="38" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
`)
  )
}
export default EmojiFlagMyanmarBurma
