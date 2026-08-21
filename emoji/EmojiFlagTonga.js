import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "flag: Tonga" (color) [1F1F9-1F1F4]. */
const EmojiFlagTonga = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="color">
    <rect x="5" y="17" width="62" height="38" fill="#d22f27"/>
    <rect x="5" y="17" width="32" height="20" fill="#fff"/>
    <polygon fill="#d22f27" stroke="#d22f27" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="27.5 26 22.5 26 22.5 21 19.5 21 19.5 26 14.5 26 14.5 29 19.5 29 19.5 34 22.5 34 22.5 29 27.5 29 27.5 26"/>
  </g>
  <g id="line">
    <rect x="5" y="17" width="62" height="38" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
`)
  )
}
export default EmojiFlagTonga
