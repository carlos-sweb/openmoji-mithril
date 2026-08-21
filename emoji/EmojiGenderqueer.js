import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "genderqueer" (color) [E430]. */
const EmojiGenderqueer = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="color">
    <rect x="6" y="18" width="60" height="36" fill="#5c9e31"/>
    <rect x="6" y="18" width="60" height="24" fill="#fff"/>
    <rect x="6" y="18" width="60" height="12" fill="#b399c8"/>
  </g>
  <g id="line">
    <rect x="5" y="17" width="62" height="38" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
`)
  )
}
export default EmojiGenderqueer
