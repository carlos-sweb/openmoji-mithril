import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the OpenMoji "upwards button" (black) [1F53C]. */
const EmojiUpwardsButtonBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}), content: `
  <g id="line">
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M14.8653,55L25,36.1176l9.9304-18.5018c0.4407-0.8211,1.6984-0.8211,2.1391,0L47,36.1176L57.1347,55"/>
  </g>
` }
  )
}
export default EmojiUpwardsButtonBlack
