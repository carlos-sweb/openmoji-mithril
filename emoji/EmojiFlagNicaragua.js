import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "flag: Nicaragua" (color) [1F1F3-1F1EE]. */
const EmojiFlagNicaragua = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="color">
    <rect x="5" y="17" width="62" height="38" fill="#61b2e4"/>
    <rect x="5" y="17" width="62" height="13" fill="#61b2e4"/>
    <rect x="5" y="30" width="62" height="12" fill="#fff"/>
    <polygon fill="#61b2e4" points="33 37.5 36 32.5 39 37.5 33 37.5"/>
    <circle cx="36" cy="36" r="5" fill="none" stroke="#fcea2b" stroke-miterlimit="10"/>
  </g>
  <g id="line">
    <rect x="5" y="17" width="62" height="38" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
`)
  )
}
export default EmojiFlagNicaragua
