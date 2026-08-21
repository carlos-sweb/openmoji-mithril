import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "round pushpin" (black) [1F4CD]. */
const EmojiRoundPushpinBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="line">
    <circle cx="35.9715" cy="21.3656" r="11.8084" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <polyline fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" points="38.5196,37.0981 38.5196,55.7135 35.9356,64.2191 32.9209,55.7135 32.9209,37.0981"/>
  </g>
`)
  )
}
export default EmojiRoundPushpinBlack
