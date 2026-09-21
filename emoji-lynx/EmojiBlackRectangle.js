import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the OpenMoji "black rectangle" (color) [25AC]. */
const EmojiBlackRectangle = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}), content: `
  <g id="line-supplement">
    <path fill="#000" d="M67 17H5V55H67V17Z"/>
  </g>
  <g id="color">
    <path fill="#3F3F3F" d="M67 17H5V55H67V17Z"/>
  </g>
  <g id="line">
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M67 17H5V55H67V17Z"/>
  </g>
` }
  )
}
export default EmojiBlackRectangle
