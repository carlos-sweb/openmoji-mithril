import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "orange square" (black) [1F7E7]. */
const EmojiOrangeSquareBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="line">
    <rect x="12" y="12" width="48" height="47.83" fill="none" stroke="#000" stroke-linejoin="round" stroke-width="2"/>
  </g>
`)
  )
}
export default EmojiOrangeSquareBlack
