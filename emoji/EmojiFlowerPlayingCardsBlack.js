import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "flower playing cards" (black) [1F3B4]. */
const EmojiFlowerPlayingCardsBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="line">
    <rect x="17" y="5.0503" width="38" height="62" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <circle cx="30.9868" cy="21.3538" r="10" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17,48.1667s18.5-19.5,38,0"/>
  </g>
`)
  )
}
export default EmojiFlowerPlayingCardsBlack
