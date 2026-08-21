import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "O button (blood type)" (color) [1F17E]. */
const EmojiOButtonBloodType = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="line-supplement">
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="6.729" d="m36.03 47.9c-4.643 0-8.411-3.765-8.411-8.411v-6.729c0-4.646 3.768-8.411 8.411-8.411 4.646 0 8.411 3.765 8.411 8.411v6.729c0 4.646-3.765 8.411-8.411 8.411z" clip-rule="evenodd"/>
  </g>
  <g id="color">
    <rect x="12" y="12" width="48" height="47.83" fill="#d22f27"/>
    <path fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="6.729" d="m36.03 47.9c-4.643 0-8.411-3.765-8.411-8.411v-6.729c0-4.646 3.768-8.411 8.411-8.411 4.646 0 8.411 3.765 8.411 8.411v6.729c0 4.646-3.765 8.411-8.411 8.411z" clip-rule="evenodd"/>
  </g>
  <g id="line">
    <rect x="12" y="12" width="48" height="48" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
`)
  )
}
export default EmojiOButtonBloodType
