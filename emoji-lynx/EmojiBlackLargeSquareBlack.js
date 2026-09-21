import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the OpenMoji "black large square" (black) [2B1B]. */
const EmojiBlackLargeSquareBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}), content: `
  <g id="line-supplement">
    <path id="groÃŸes schwarzes quadrat color 1" fill="#000" d="M61 11.0417H11V61.0417H61V11.0417Z"/>
  </g>
  <g id="line">
    <path id="groÃŸes schwarzes quadrat line" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M61 11.0417H11V61.0417H61V11.0417Z"/>
  </g>
` }
  )
}
export default EmojiBlackLargeSquareBlack
