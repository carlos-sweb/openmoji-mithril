import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the OpenMoji "overlapping white and black squares" (black) [2BBB]. */
const EmojiOverlappingWhiteAndBlackSquaresBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}), content: `
  <g id="line-supplement">
    <path fill="#000" d="M60 12H28V44H60V12Z"/>
  </g>
  <g id="line">
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M24.5 28H12V60H44V48"/>
    <path fill="none" stroke="#000" stroke-linejoin="round" stroke-width="2" d="M60 12H28V44H60V12Z"/>
  </g>
` }
  )
}
export default EmojiOverlappingWhiteAndBlackSquaresBlack
