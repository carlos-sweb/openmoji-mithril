import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "flag: Sudan" (color) [1F1F8-1F1E9]. */
const EmojiFlagSudan = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="color">
    <rect x="5" y="17" width="62" height="38" fill="#fff"/>
    <rect x="5" y="42" width="62" height="13"/>
    <rect x="5" y="17" width="62" height="13" fill="#d22f27"/>
    <polygon fill="#5c9e31" points="26 36 5 55 5 17 26 36"/>
  </g>
  <g id="line">
    <rect x="5" y="17" width="62" height="38" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
`)
  )
}
export default EmojiFlagSudan
