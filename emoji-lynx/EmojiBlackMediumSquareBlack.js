import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the OpenMoji "black medium square" (black) [25FC]. */
const EmojiBlackMediumSquareBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}), content: `
  <g id="line-supplement">
    <path id="mittleres schwarzes quadrat color 1" fill="#000" d="M55.9166 16.0417H16.0834V55.8749H55.9166V16.0417Z"/>
  </g>
  <g id="line">
    <path id="mittleres schwarzes quadrat line 1" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M55.9166 16.0417H16.0834V55.8749H55.9166V16.0417Z"/>
  </g>
` }
  )
}
export default EmojiBlackMediumSquareBlack
