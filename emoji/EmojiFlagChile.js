import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "flag: Chile" (color) [1F1E8-1F1F1]. */
const EmojiFlagChile = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="color">
    <rect x="5" y="17" width="62" height="38" fill="#fff"/>
    <rect x="5" y="36" width="62" height="19" fill="#d22f27"/>
    <rect x="5" y="17" width="21" height="19" fill="#1e50a0"/>
    <polygon fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" points="12.688 30.445 15.16 22.445 17.632 30.445 11.16 25.5 19.16 25.5 12.688 30.445"/>
  </g>
  <g id="line">
    <rect x="5" y="17" width="62" height="38" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
`)
  )
}
export default EmojiFlagChile
