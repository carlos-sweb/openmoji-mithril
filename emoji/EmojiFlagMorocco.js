import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "flag: Morocco" (color) [1F1F2-1F1E6]. */
const EmojiFlagMorocco = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="color">
    <rect x="5" y="17" width="62" height="38" fill="#d22f27"/>
    <polygon fill="none" stroke="#5c9e31" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" points="25 33.03 47 33.03 29.202 45.962 36 25.038 42.798 45.962 25 33.03"/>
  </g>
  <g id="line">
    <rect x="5" y="17" width="62" height="38" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
`)
  )
}
export default EmojiFlagMorocco
