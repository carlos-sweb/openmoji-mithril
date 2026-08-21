import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "family: adult, adult, child, child" (color) [1F9D1-200D-1F9D1-200D-1F9D2-200D-1F9D2]. */
const EmojiFamilyAdultAdultChildChild = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="color">
    <rect x="34" y="37" width="4" height="23" fill="#fcea2b" stroke="#fcea2b" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <path fill="#fcea2b" stroke="#fcea2b" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10,53v-16c0-4.4183,3.5817-8,8-8h8c4.4183,0,8,3.5817,8,8v16H10Z"/>
    <path fill="#fcea2b" stroke="#fcea2b" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M38,53v-16c0-4.4183,3.5817-8,8-8h8c4.4183,0,8,3.5817,8,8v16h-24Z"/>
    <circle cx="22" cy="18" r="6" fill="#fcea2b" stroke="#fcea2b" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <circle cx="50" cy="18" r="6" fill="#fcea2b" stroke="#fcea2b" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <g>
      <circle cx="25" cy="42" r="5" fill="#fcea2b" stroke="#fcea2b" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
      <circle cx="47" cy="42" r="5" fill="#fcea2b" stroke="#fcea2b" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
      <path fill="#fcea2b" stroke="#fcea2b" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16,60v-3c0-3.3137,2.6863-6,6-6h6c3.3137,0,6,2.6863,6,6v3H16Z"/>
      <path fill="#fcea2b" stroke="#fcea2b" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M38,60v-3c0-3.3137,2.6863-6,6-6h6c3.3137,0,6,2.6863,6,6v3h-18Z"/>
    </g>
  </g>
  <g id="line">
    <circle cx="25" cy="42" r="5" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <circle cx="22" cy="18" r="6" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10,53v-16c0-4.4183,3.5817-8,8-8h8c4.4183,0,8,3.5817,8,8"/>
    <circle cx="50" cy="18" r="6" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M38,37c0-4.4183,3.5817-8,8-8h8c4.4183,0,8,3.5817,8,8v16"/>
    <circle cx="47" cy="42" r="5" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16,60v-3c0-3.3137,2.6863-6,6-6h6c3.3137,0,6,2.6863,6,6v3"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M38,60v-3c0-3.3137,2.6863-6,6-6h6c3.3137,0,6,2.6863,6,6v3"/>
  </g>
`)
  )
}
export default EmojiFamilyAdultAdultChildChild
