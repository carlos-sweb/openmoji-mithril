import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "flag: Puerto Rico" (color) [1F1F5-1F1F7]. */
const EmojiFlagPuertoRico = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="color">
    <rect x="5" y="17" width="62" height="38" fill="#fff"/>
    <rect x="5" y="32" width="62" height="8" fill="#d22f27"/>
    <rect x="5" y="47" width="62" height="8" fill="#d22f27"/>
    <rect x="5" y="17" width="62" height="8" fill="#d22f27"/>
    <polygon fill="#1e50a0" points="26 36 5 55 5 17 26 36"/>
    <polygon fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" points="13.5 33.5 15.045 38.5 11 35.41 16 35.41 11.955 38.5 13.5 33.5"/>
  </g>
  <g id="line">
    <rect x="5" y="17" width="62" height="38" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
`)
  )
}
export default EmojiFlagPuertoRico
