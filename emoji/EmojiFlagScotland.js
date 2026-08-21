import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "flag: Scotland" (color) [1F3F4-E0067-E0062-E0073-E0063-E0074-E007F]. */
const EmojiFlagScotland = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="color">
    <rect x="5" y="17" width="62" height="38" fill="#1e50a0"/>
    <path fill="#fff" stroke="#fff" stroke-miterlimit="10" d="m10.6 54.72c-5.599 0.3008-5.599 0.3008-5.645-3.774l56.15-33.69c4.468 0.132 6.208-0.8087 5.843 3.674z"/>
    <path fill="#fff" stroke="#fff" stroke-miterlimit="10" d="m10.3 17.03c-5.301-0.03272-5.301-0.03272-5.432 3.904l56.9 34.13c5.235-0.06544 5.235-0.06544 5.202-4.018z"/>
  </g>
  <g id="line">
    <rect x="5" y="17" width="62" height="38" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
`)
  )
}
export default EmojiFlagScotland
