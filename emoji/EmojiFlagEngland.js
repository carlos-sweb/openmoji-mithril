import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "flag: England" (color) [1F3F4-E0067-E0062-E0065-E006E-E0067-E007F]. */
const EmojiFlagEngland = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="color">
    <rect x="5" y="17" width="62" height="38" fill="#fff"/>
    <polygon fill="#d22f27" stroke="#d22f27" stroke-miterlimit="10" stroke-width="2" points="67 33 39 33 39 17 33 17 33 33 5 33 5 39 33 39 33 55 39 55 39 39 67 39 67 33"/>
  </g>
  <g id="line">
    <rect x="5" y="17" width="62" height="38" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
`)
  )
}
export default EmojiFlagEngland
