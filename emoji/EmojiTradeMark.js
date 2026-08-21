import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "trade mark" (color) [2122]. */
const EmojiTradeMark = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="color"/>
  <g id="line">
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="6.735" d="m57.68 47.79v-23.57l-10.1 20.2-10.1-20.2v23.57" clip-rule="evenodd"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="6.735" d="m14.32 24.21h13.47" clip-rule="evenodd"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="6.735" d="m21.05 24.21v23.57" clip-rule="evenodd"/>
  </g>
`)
  )
}
export default EmojiTradeMark
