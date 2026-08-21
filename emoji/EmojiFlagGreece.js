import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "flag: Greece" (color) [1F1EC-1F1F7]. */
const EmojiFlagGreece = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="color">
    <rect x="5" y="17" width="62" height="38" fill="#fff"/>
    <rect x="5" y="34" width="62" height="4" fill="#1e50a0"/>
    <rect x="5" y="25.75" width="62" height="4" fill="#1e50a0"/>
    <rect x="5" y="42.25" width="62" height="4" fill="#1e50a0"/>
    <rect x="5" y="50" width="62" height="5" fill="#1e50a0"/>
    <rect x="5" y="17" width="62" height="5" fill="#1e50a0"/>
    <rect x="5" y="17" width="22" height="21" fill="#1e50a0"/>
    <rect x="14.5" y="17" width="4" height="22" fill="#fff"/>
    <rect x="5" y="25.75" width="22" height="4" fill="#fff"/>
  </g>
  <g id="line">
    <rect x="5" y="17" width="62" height="38" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
`)
  )
}
export default EmojiFlagGreece
