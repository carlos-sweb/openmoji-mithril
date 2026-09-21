import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the OpenMoji "white large square" (black) [2B1C]. */
const EmojiWhiteLargeSquareBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}), content: `
  <g id="line">
    <rect x="11" y="10.9374" width="50" height="50" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
` }
  )
}
export default EmojiWhiteLargeSquareBlack
