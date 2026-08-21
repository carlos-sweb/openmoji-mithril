import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "white square button" (black) [1F533]. */
const EmojiWhiteSquareButtonBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="line-supplement">
    <path fill="#000" d="M46 26H25V47H46V26Z"/>
  </g>
  <g id="line">
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M56 16H16V56H56V16Z"/>
  </g>
`)
  )
}
export default EmojiWhiteSquareButtonBlack
