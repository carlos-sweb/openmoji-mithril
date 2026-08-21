import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "black large square" (color) [2B1B]. */
const EmojiBlackLargeSquare = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="line-supplement">
    <path id="groÃŸes schwarzes quadrat color 1" fill="#000" d="M61 11.0417H11V61.0417H61V11.0417Z"/>
  </g>
  <g id="color">
    <path id="groÃŸes schwarzes quadrat color 1_2" fill="#3F3F3F" d="M61 11.0417H11V61.0417H61V11.0417Z"/>
  </g>
  <g id="line">
    <path id="groÃŸes schwarzes quadrat line" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M61 11.0417H11V61.0417H61V11.0417Z"/>
  </g>
`)
  )
}
export default EmojiBlackLargeSquare
