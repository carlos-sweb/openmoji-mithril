import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "flag: São Tomé & Príncipe" (color) [1F1F8-1F1F9]. */
const EmojiFlagSaOTomePriNcipe = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="color">
    <rect x="5" y="17" width="62" height="38" fill="#b1cc33"/>
    <rect x="5" y="30" width="62" height="12" fill="#fcea2b"/>
    <polygon fill="#d22f27" points="26 36 5 55 5 17 26 36"/>
    <polygon stroke="#000" stroke-linecap="round" stroke-linejoin="round" points="38.5 33.59 40.045 38.59 36 35.5 41 35.5 36.955 38.59 38.5 33.59"/>
    <polygon stroke="#000" stroke-linecap="round" stroke-linejoin="round" points="53.5 33.59 55.045 38.59 51 35.5 56 35.5 51.955 38.59 53.5 33.59"/>
  </g>
  <g id="line">
    <rect x="5" y="17" width="62" height="38" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
`)
  )
}
export default EmojiFlagSaOTomePriNcipe
