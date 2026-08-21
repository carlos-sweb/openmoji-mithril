import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "more information" (color) [E264]. */
const EmojiMoreInformation = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="color">
    <polygon fill="#D0CFCE" stroke="none" points="56,32.8 39.2,32.8 39.2,16 32.8,16 32.8,32.8 16,32.8 16,39.2 32.8,39.2 32.8,56 39.2,56 39.2,39.2 56,39.2"/>
  </g>
  <g id="hair"/>
  <g id="skin"/>
  <g id="skin-shadow"/>
  <g id="line">
    <polygon fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" points="56,32.8 39.2,32.8 39.2,16 32.8,16 32.8,32.8 16,32.8 16,39.2 32.8,39.2 32.8,56 39.2,56 39.2,39.2 56,39.2"/>
  </g>
`)
  )
}
export default EmojiMoreInformation
