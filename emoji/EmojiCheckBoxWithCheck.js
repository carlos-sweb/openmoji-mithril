import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "check box with check" (color) [2611]. */
const EmojiCheckBoxWithCheck = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="color">
    <path fill="#D0CFCE" stroke="#D0CFCE" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M45,29.0772V50.318c0,0.2541-0.2059,0.46-0.46,0.46H22.46c-0.254,0-0.46-0.2059-0.46-0.46v-22.08c0-0.254,0.2059-0.46,0.46-0.46 h13.9961h0.3953H45V29.0772z"/>
  </g>
  <g id="hair"/>
  <g id="skin"/>
  <g id="skin-shadow"/>
  <g id="line">
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M51.2308,14.778c-15.2308,18-18,30.4615-18,30.4615s-2.7692-6.9231-5.5385-9.6923"/>
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M45,29.0772V50.318c0,0.2541-0.2059,0.46-0.46,0.46H22.46c-0.254,0-0.46-0.2059-0.46-0.46v-22.08c0-0.254,0.2059-0.46,0.46-0.46 h13.9961h0.3953"/>
  </g>
`)
  )
}
export default EmojiCheckBoxWithCheck
