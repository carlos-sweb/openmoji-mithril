import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "flag: Costa Rica" (color) [1F1E8-1F1F7]. */
const EmojiFlagCostaRica = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="color">
    <rect x="5" y="17" width="62" height="38" fill="#fff"/>
    <rect x="5" y="29.5" width="62" height="13" fill="#d22f27"/>
    <rect x="5" y="49" width="62" height="6" fill="#1e50a0"/>
    <rect x="5" y="17" width="62" height="6" fill="#1e50a0"/>
  </g>
  <g id="line">
    <rect x="5" y="17" width="62" height="38" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
`)
  )
}
export default EmojiFlagCostaRica
