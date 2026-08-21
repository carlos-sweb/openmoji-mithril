import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "black vertical rectangle" (color) [25AE]. */
const EmojiBlackVerticalRectangle = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="line-supplement">
    <path fill="#000" d="M55 67L55 5L17 5L17 67L55 67Z"/>
  </g>
  <g id="color">
    <path fill="#3F3F3F" d="M55 67L55 5L17 5L17 67L55 67Z"/>
  </g>
  <g id="line">
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M55 67L55 5L17 5L17 67L55 67Z"/>
  </g>
`)
  )
}
export default EmojiBlackVerticalRectangle
