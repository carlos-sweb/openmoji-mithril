import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "picture" (black) [E142]. */
const EmojiPictureBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="line">
    <rect x="6" y="18" width="60" height="36" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <polyline fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" points="44,43 22,43 33,32 39.9976,38.9976"/>
    <polyline fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" points="39.7969,33.2031 45,28 60,43 43.9995,43"/>
  </g>
`)
  )
}
export default EmojiPictureBlack
