import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "black rectangle" (black) [25AC]. */
const EmojiBlackRectangleBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="line-supplement">
    <path fill="#000" d="M67 17H5V55H67V17Z"/>
  </g>
  <g id="line">
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M67 17H5V55H67V17Z"/>
  </g>
`)
  )
}
export default EmojiBlackRectangleBlack
