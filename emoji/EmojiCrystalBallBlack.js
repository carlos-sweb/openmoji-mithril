import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "crystal ball" (black) [1F52E]. */
const EmojiCrystalBallBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="line">
    <circle cx="36" cy="32.8" r="22.2" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <circle cx="36" cy="32.8" r="22.2" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M18,56.6l-3,2.8 c-0.7,0.7-0.3,1.9,0.8,1.9h39.5c1,0,1.5-1.2,0.8-1.9l-2.8-2.8"/>
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M53.2,56.6l2.8,2.8c0.7,0.7,0.2,1.9-0.8,1.9"/>
  </g>
`)
  )
}
export default EmojiCrystalBallBlack
