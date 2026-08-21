import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "black circle" (black) [26AB]. */
const EmojiBlackCircleBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="line-supplement">
    <path fill="#000" d="M36 64.0001C51.464 64.0001 64 51.4641 64 36.0001C64 20.5361 51.464 8.00012 36 8.00012C20.536 8.00012 8 20.5361 8 36.0001C8 51.4641 20.536 64.0001 36 64.0001Z"/>
  </g>
  <g id="line">
    <path fill="none" stroke="#000" stroke-linejoin="round" stroke-width="2" d="M36 64.0001C51.464 64.0001 64 51.4641 64 36.0001C64 20.5361 51.464 8.00012 36 8.00012C20.536 8.00012 8 20.5361 8 36.0001C8 51.4641 20.536 64.0001 36 64.0001Z"/>
  </g>
`)
  )
}
export default EmojiBlackCircleBlack
