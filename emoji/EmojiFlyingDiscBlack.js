import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "flying disc" (black) [1F94F]. */
const EmojiFlyingDiscBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="line">
    <ellipse cx="35.9999" cy="30.5" rx="6.7991" ry="21.9789" transform="translate(-5.0564 53.7513) rotate(-69.7961)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <ellipse cx="35.9999" cy="30.5" rx="11.5334" ry="27.8816" transform="translate(-4.9734 53.8973) rotate(-70)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M39.8023,52.363c2.8865,1.5925,21.926,6.78,23.98,1.8"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M37.778,48.8451c2.3577,1.41,18.0633,6.2843,19.919,2.1969"/>
  </g>
`)
  )
}
export default EmojiFlyingDiscBlack
