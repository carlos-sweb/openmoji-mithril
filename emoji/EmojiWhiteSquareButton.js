import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "white square button" (color) [1F533]. */
const EmojiWhiteSquareButton = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="line-supplement">
    <path fill="#000" d="M46 26H25V47H46V26Z"/>
  </g>
  <g id="color">
    <path fill="#fff" d="M56 16H16V56H56V16Z"/>
    <path fill="#3F3F3F" d="M46 26H25V47H46V26Z"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M46 26H25V47H46V26Z"/>
  </g>
  <g id="line">
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M56 16H16V56H56V16Z"/>
  </g>
`)
  )
}
export default EmojiWhiteSquareButton
