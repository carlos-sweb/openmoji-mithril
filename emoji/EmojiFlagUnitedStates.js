import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "flag: United States" (color) [1F1FA-1F1F8]. */
const EmojiFlagUnitedStates = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="color">
    <rect x="5" y="17" width="62" height="38" fill="#fff"/>
    <rect x="5" y="17" width="62" height="5" fill="#d22f27"/>
    <rect x="5" y="26" width="62" height="4" fill="#d22f27"/>
    <rect x="5" y="34" width="62" height="4" fill="#d22f27"/>
    <rect x="5" y="17" width="32" height="21" fill="#1e50a0"/>
    <rect x="5" y="42" width="62" height="4" fill="#d22f27"/>
    <circle cx="9.5" cy="22" r="1.75" fill="#fff"/>
    <circle cx="17.5" cy="22" r="1.75" fill="#fff"/>
    <circle cx="25.5" cy="22" r="1.75" fill="#fff"/>
    <circle cx="33.5" cy="22" r="1.75" fill="#fff"/>
    <circle cx="29.5" cy="26" r="1.75" fill="#fff"/>
    <circle cx="21.5" cy="26" r="1.75" fill="#fff"/>
    <circle cx="13.5" cy="26" r="1.75" fill="#fff"/>
    <circle cx="9.5" cy="30" r="1.75" fill="#fff"/>
    <circle cx="17.5" cy="30" r="1.75" fill="#fff"/>
    <circle cx="25.5" cy="30" r="1.75" fill="#fff"/>
    <circle cx="33.5" cy="30" r="1.75" fill="#fff"/>
    <circle cx="29.5" cy="34" r="1.75" fill="#fff"/>
    <circle cx="21.5" cy="34" r="1.75" fill="#fff"/>
    <circle cx="13.5" cy="34" r="1.75" fill="#fff"/>
    <rect x="5" y="50" width="62" height="5" fill="#d22f27"/>
  </g>
  <g id="line">
    <rect x="5" y="17" width="62" height="38" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
`)
  )
}
export default EmojiFlagUnitedStates
