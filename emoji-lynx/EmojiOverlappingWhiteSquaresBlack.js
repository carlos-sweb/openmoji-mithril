import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the OpenMoji "overlapping white squares" (black) [2BBA]. */
const EmojiOverlappingWhiteSquaresBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}), content: `
  <g id="line">
    <path fill="none" stroke="#000" stroke-linejoin="round" stroke-width="2" d="M60 12H28V44H60V12Z"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M23.5 29H11V61H43V49"/>
  </g>
` }
  )
}
export default EmojiOverlappingWhiteSquaresBlack
