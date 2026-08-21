import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "white small square" (black) [25AB]. */
const EmojiWhiteSmallSquareBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="line">
    <rect x="23.0094" y="22.9469" width="25.9812" height="25.9812" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
`)
  )
}
export default EmojiWhiteSmallSquareBlack
