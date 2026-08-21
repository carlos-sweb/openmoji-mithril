import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "flag: St. Lucia" (color) [1F1F1-1F1E8]. */
const EmojiFlagStLucia = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="color">
    <rect x="5" y="17" width="62" height="38" fill="#61b2e4"/>
    <polygon stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="36 23 48 49 24 49 36 23"/>
    <polygon fill="#fcea2b" stroke="#fcea2b" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="36 37 48 49 24 49 36 37"/>
  </g>
  <g id="line">
    <rect x="5" y="17" width="62" height="38" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
`)
  )
}
export default EmojiFlagStLucia
