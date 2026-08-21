import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "white chess king" (black) [2654]. */
const EmojiWhiteChessKingBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="line" fill="none" stroke="#000" stroke-linejoin="round" stroke-width="2">
    <circle cx="36" cy="24.36" r="5.065"/>
    <path stroke-linecap="round" d="m36 19.3v-7.848"/>
    <path stroke-linecap="round" d="m32.08 14.45h7.848"/>
    <path stroke-linecap="round" d="m22.68 47.15h26.64v13.4l-26.56-0.06014z"/>
    <path stroke-linecap="round" d="m36 29.43 0.0034 17.72"/>
    <path stroke-linecap="round" d="m30.93 24.36c-22.4 0-17.56 22.36-8.25 22.78"/>
    <path stroke-linecap="round" d="m41.07 24.36c22.4 0 17.56 22.36 8.25 22.78"/>
  </g>
`)
  )
}
export default EmojiWhiteChessKingBlack
