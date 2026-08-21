import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "forward" (color) [E24F]. */
const EmojiForward = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="color"/>
  <g id="hair"/>
  <g id="skin"/>
  <g id="skin-shadow"/>
  <g id="line">
    <polyline fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" points="46.8146,33.4278 55,25.2139 46.8146,17"/>
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M32.3288,54.4975c-8.0865,0-14.6418-6.5554-14.6418-14.6418s6.5554-14.6418,14.6418-14.6418h21.7298"/>
  </g>
`)
  )
}
export default EmojiForward
