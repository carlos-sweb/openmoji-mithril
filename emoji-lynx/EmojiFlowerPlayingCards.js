import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the OpenMoji "flower playing cards" (color) [1F3B4]. */
const EmojiFlowerPlayingCards = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}), content: `
  <g id="color">
    <rect x="17" y="5.0503" width="38" height="62" fill="#d22f27"/>
    <circle cx="30.9868" cy="21.3538" r="10" fill="#fff"/>
    <path fill="#3f3f3f" d="M55,48.1415c-19.5-19.5-38,.0252-38,.0252V67H55Z"/>
  </g>
  <g id="line">
    <rect x="17" y="5.0503" width="38" height="62" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <circle cx="30.9868" cy="21.3538" r="10" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17,48.1667s18.5-19.5,38,0"/>
  </g>
` }
  )
}
export default EmojiFlowerPlayingCards
