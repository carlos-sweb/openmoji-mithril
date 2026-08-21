import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "eyes" (color) [1F440]. */
const EmojiEyes = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="color">
    <ellipse cx="19.5477" cy="35.9583" rx="14.4692" ry="24.6554" fill="#FFFFFF"/>
    <ellipse cx="52.4523" cy="35.9583" rx="14.4692" ry="24.6554" fill="#FFFFFF"/>
    <ellipse cx="52.4523" cy="35.9583" rx="14.4692" ry="24.6554" fill="#FFFFFF"/>
    <circle cx="46.0104" cy="37.8173" r="8.0273" fill="#A57939"/>
    <ellipse cx="19.5477" cy="35.9583" rx="14.4692" ry="24.6554" fill="#FFFFFF"/>
    <circle cx="13.1058" cy="37.8173" r="8.0273" fill="#A57939"/>
  </g>
  <g id="hair"/>
  <g id="skin"/>
  <g id="skin-shadow"/>
  <g id="line">
    <ellipse cx="19.5477" cy="35.9583" rx="14.4692" ry="24.6554" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <ellipse cx="52.4523" cy="35.9583" rx="14.4692" ry="24.6554" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <circle cx="13.1058" cy="37.8173" r="3.6229"/>
    <circle cx="46.0104" cy="37.8173" r="3.6229"/>
    <circle cx="13.1058" cy="37.8173" r="3.6229" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <circle cx="13.1058" cy="37.8173" r="8.0273" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <circle cx="46.0104" cy="37.8173" r="3.6229" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <circle cx="46.0104" cy="37.8173" r="8.0273" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
  </g>
`)
  )
}
export default EmojiEyes
