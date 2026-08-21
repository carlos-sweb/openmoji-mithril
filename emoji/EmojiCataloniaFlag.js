import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "catalonia flag" (color) [1F3F4-E0065-E0073-E0063-E0074-E007F]. */
const EmojiCataloniaFlag = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="color">
    <rect x="5" y="17" width="62" height="38" fill="#f1b31c"/>
    <rect x="5" y="22" width="62" height="4" fill="#d22f27"/>
    <rect x="5" y="30" width="62" height="4" fill="#d22f27"/>
    <rect x="5" y="38" width="62" height="4" fill="#d22f27"/>
    <rect x="5" y="46" width="62" height="4" fill="#d22f27"/>
  </g>
  <g id="line">
    <rect x="5" y="17" width="62" height="38" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
`)
  )
}
export default EmojiCataloniaFlag
