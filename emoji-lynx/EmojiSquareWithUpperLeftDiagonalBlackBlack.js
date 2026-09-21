import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the OpenMoji "square with upper left diagonal black" (black) [25E9]. */
const EmojiSquareWithUpperLeftDiagonalBlackBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}), content: `
  <g id="line">
    <path fill="none" stroke="#000" stroke-linejoin="round" stroke-width="2" d="m59.0349,60H12.9649c-.2557-.0008-.5007-.1027-.6815-.2836-.1808-.1808-.2827-.4258-.2834-.6815V12.9649c.0008-.2557.1027-.5007.2836-.6815.1808-.1808.4258-.2827.6815-.2834h46.07c.2557.0008.5007.1027.6815.2836.1808.1808.2827.4258.2834.6815v46.07c-.0008.2557-.1027.5007-.2836.6815-.1808.1808-.4258.2827-.6815.2834h0Z"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-width="2" d="m59,13L15,57"/>
  </g>
` }
  )
}
export default EmojiSquareWithUpperLeftDiagonalBlackBlack
