import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "close" (color) [E24E]. */
const EmojiClose = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="color"/>
  <g id="hair"/>
  <g id="skin"/>
  <g id="skin-shadow"/>
  <g id="line">
    <line x1="17.5" x2="54.5" y1="17.5" y2="54.5" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <line x1="54.5" x2="17.5" y1="17.5" y2="54.5" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
  </g>
`)
  )
}
export default EmojiClose
