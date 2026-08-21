import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "heavy circle" (black) [2B58]. */
const EmojiHeavyCircleBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="line">
    <path fill="none" stroke="#000000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M36 56C47.0457 56 56 47.0457 56 36C56 24.9543 47.0457 16 36 16C24.9543 16 16 24.9543 16 36C16 47.0457 24.9543 56 36 56Z"/>
  </g>
`)
  )
}
export default EmojiHeavyCircleBlack
