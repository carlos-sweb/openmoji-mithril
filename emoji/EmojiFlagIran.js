import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "flag: Iran" (color) [1F1EE-1F1F7]. */
const EmojiFlagIran = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="color">
    <rect x="5" y="17" width="62" height="38" fill="#d22f27"/>
    <rect x="5" y="17" width="62" height="13" fill="#5c9e31"/>
    <rect x="5" y="30" width="62" height="12" fill="#fff"/>
    <line x1="36" x2="36" y1="32" y2="40" fill="none" stroke="#d22f27" stroke-linecap="round" stroke-linejoin="round"/>
    <path fill="none" stroke="#d22f27" stroke-linecap="round" stroke-linejoin="round" d="M38,32a4,4,0,0,1,0,8"/>
    <path fill="none" stroke="#d22f27" stroke-linecap="round" stroke-linejoin="round" d="M36,40a4.0012,4.0012,0,0,0,1.2285-6.7678"/>
    <path fill="none" stroke="#d22f27" stroke-linecap="round" stroke-linejoin="round" d="M36,40a4.0013,4.0013,0,0,1-1.2284-6.7678"/>
    <path fill="none" stroke="#d22f27" stroke-linecap="round" stroke-linejoin="round" d="M34,32a4,4,0,0,0,0,8"/>
  </g>
  <g id="line">
    <rect x="5" y="17" width="62" height="38" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
`)
  )
}
export default EmojiFlagIran
