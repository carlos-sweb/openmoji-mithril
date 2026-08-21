import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "flag: Tanzania" (color) [1F1F9-1F1FF]. */
const EmojiFlagTanzania = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="color">
    <rect x="5" y="17" width="62" height="38" fill="#61b2e4"/>
    <polygon fill="#5c9e31" points="5 17 5 55 67 17 5 17"/>
    <polygon stroke="#f1b31c" stroke-linecap="round" stroke-linejoin="round" points="67 17 54 17 5 55 18 55 67 17"/>
  </g>
  <g id="line">
    <rect x="5" y="17" width="62" height="38" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
`)
  )
}
export default EmojiFlagTanzania
