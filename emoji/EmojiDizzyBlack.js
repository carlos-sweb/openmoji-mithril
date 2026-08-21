import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "dizzy" (black) [1F4AB]. */
const EmojiDizzyBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="line">
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M48.6648,34.784c0.7196-5.4552-6.5085-11.5508-33.8374-16.2489c0,0,72.9938-9.9979,34.8066,33.0676"/>
    <polygon fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" points="35,30.4033 39.9443,40.4214 51,42.0279 44,49.826 45.8885,60.8371 35,55.6384 25.1115,60.8371 27,49.826 19,42.0279 30.0557,40.4214"/>
  </g>
`)
  )
}
export default EmojiDizzyBlack
