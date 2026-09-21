import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the OpenMoji "black medium-small square" (black) [25FE]. */
const EmojiBlackMediumSmallSquareBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}), content: `
  <g id="line-supplement">
    <path id="kleines mittleres schwarzes quadrat color 1" fill="#000" d="M51.7357 20.3059H20.2643V51.7773H51.7357V20.3059Z"/>
  </g>
  <g id="line">
    <path id="kleines mittleres schwarzes quadrat line 1" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M51.7357 20.3059H20.2643V51.7773H51.7357V20.3059Z"/>
  </g>
` }
  )
}
export default EmojiBlackMediumSmallSquareBlack
