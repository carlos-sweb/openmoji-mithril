import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the OpenMoji "up-left arrow" (black) [2196]. */
const EmojiUpLeftArrowBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}), content: `
  <g id="line">
    <polygon fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" points="37.8362,14.0387 13.6073,13.1416 14.5044,37.3705 20.0624,37.1647 19.5378,23.0048 55.4303,58.8973 59.3629,54.9646 23.4704,19.0721 37.6303,19.5967"/>
  </g>
` }
  )
}
export default EmojiUpLeftArrowBlack
