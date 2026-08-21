import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "flag: Liechtenstein" (color) [1F1F1-1F1EE]. */
const EmojiFlagLiechtenstein = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="color">
    <rect x="5" y="17" width="62" height="38" fill="#1e50a0"/>
    <rect x="5" y="36" width="62" height="19" fill="#d22f27"/>
    <line x1="18" x2="18" y1="22" y2="30" fill="#fcea2b" stroke="#fcea2b" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <path fill="none" stroke="#fcea2b" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18,28a3,3,0,0,1,3-3c1.6569,0,4.1391,1.4725,2,6H13c-2.1391-4.5275.3431-6,2-6a3,3,0,0,1,3,3"/>
  </g>
  <g id="line">
    <rect x="5" y="17" width="62" height="38" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
`)
  )
}
export default EmojiFlagLiechtenstein
