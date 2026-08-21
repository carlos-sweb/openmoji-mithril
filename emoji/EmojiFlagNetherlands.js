import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "flag: Netherlands" (color) [1F1F3-1F1F1]. */
const EmojiFlagNetherlands = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="color">
    <rect x="5" y="17" width="62" height="38" fill="#1e50a0"/>
    <rect x="5" y="17" width="62" height="13" fill="#d22f27"/>
    <rect x="5" y="30" width="62" height="12" fill="#fff"/>
  </g>
  <g id="line">
    <rect x="5" y="17" width="62" height="38" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
`)
  )
}
export default EmojiFlagNetherlands
