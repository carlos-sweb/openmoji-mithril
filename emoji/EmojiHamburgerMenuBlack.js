import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "hamburger menu" (black) [E250]. */
const EmojiHamburgerMenuBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="line">
    <line x1="16" x2="56" y1="26" y2="26" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <line x1="16" x2="56" y1="36" y2="36" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <line x1="16" x2="56" y1="46" y2="46" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
  </g>
`)
  )
}
export default EmojiHamburgerMenuBlack
