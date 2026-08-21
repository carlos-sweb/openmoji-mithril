import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "olive" (black) [1FAD2]. */
const EmojiOliveBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="line">
    <ellipse cx="35.9765" cy="36.145" rx="23.0446" ry="16.612" transform="translate(-15.0211 36.0258) rotate(-45)" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M50.2559,29.9382c-1.5521,1.5521-4.7673.8535-7.1813-1.56s-3.1127-5.6292-1.56-7.1814,4.7673-.8535,7.1813,1.56a8.2239,8.2239,0,0,1,2.2534,3.85"/>
  </g>
`)
  )
}
export default EmojiOliveBlack
