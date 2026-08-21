import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "eye" (color) [1F441]. */
const EmojiEye = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="color">
    <ellipse cx="35.75" cy="36.4282" rx="34.8096" ry="20.4282" fill="#FFFFFF" stroke="none"/>
    <ellipse cx="35.75" cy="36.4282" rx="34.8096" ry="20.4282" fill="#FFFFFF" stroke="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <circle cx="36" cy="35.9583" r="15.484" fill="#a57939" stroke="none"/>
  </g>
  <g id="hair"/>
  <g id="skin"/>
  <g id="skin-shadow"/>
  <g id="line">
    <ellipse cx="35.75" cy="36.4282" rx="34.8096" ry="20.4282" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <circle cx="36" cy="35.9583" r="8.4416" fill="#000000" stroke="none"/>
    <circle cx="36" cy="35.9583" r="8.4416" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <circle cx="36" cy="35.9583" r="15.484" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
  </g>
`)
  )
}
export default EmojiEye
