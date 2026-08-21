import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "kissing face" (black) [1F617]. */
const EmojiKissingFaceBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="line">
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M36.4153,41.0923c0,0,10.5248,3.1956,0,5.5637c0,0,10.4577,2.9883,0,4.9125"/>
    <path d="M30,31c0,1.6568-1.3448,3-3,3c-1.6553,0-3-1.3433-3-3c0-1.6552,1.3447-3,3-3C28.6552,28,30,29.3448,30,31"/>
    <path d="M48,31c0,1.6568-1.3447,3-3,3s-3-1.3433-3-3c0-1.6552,1.3447-3,3-3S48,29.3448,48,31"/>
    <ellipse cx="36" cy="36" rx="23.0001" ry="23.0001" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
  </g>
`)
  )
}
export default EmojiKissingFaceBlack
