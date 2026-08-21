import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "flag: Lesotho" (color) [1F1F1-1F1F8]. */
const EmojiFlagLesotho = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="color">
    <rect x="5" y="17" width="62" height="38" fill="#5c9e31"/>
    <rect x="5" y="30" width="62" height="12" fill="#fff"/>
    <rect x="5" y="17" width="62" height="13" fill="#1e50a0"/>
    <g>
      <polygon stroke="#000" stroke-linecap="round" stroke-linejoin="round" points="36 34.75 32.536 40.75 39.464 40.75 36 34.75"/>
      <ellipse cx="36" cy="34.25" rx="2" ry="3" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round"/>
      <line x1="36" x2="36" y1="31.25" y2="37.25" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round"/>
      <line x1="34.5" x2="37.5" y1="33.75" y2="33.75" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
  </g>
  <g id="line">
    <rect x="5" y="17" width="62" height="38" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
`)
  )
}
export default EmojiFlagLesotho
