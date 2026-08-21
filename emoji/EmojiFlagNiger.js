import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "flag: Niger" (color) [1F1F3-1F1EA]. */
const EmojiFlagNiger = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="color">
    <rect x="5" y="17" width="62" height="38" fill="#fff"/>
    <circle cx="36" cy="36.01" r="5.803" fill="#e27022" stroke-width="0.6828"/>
    <rect x="5" y="42.4" width="62" height="12.6" fill="#5c9e31" stroke-width="1.342"/>
    <rect x="5" y="17" width="62" height="12.6" fill="#e27022" stroke-width="1.342"/>
  </g>
  <g id="line">
    <rect x="5" y="17" width="62" height="38" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
`)
  )
}
export default EmojiFlagNiger
