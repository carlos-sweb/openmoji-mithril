import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "expressionless face" (black) [1F611]. */
const EmojiExpressionlessFaceBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="line">
    <circle cx="36" cy="36" r="23" fill="none" stroke="#000000" stroke-miterlimit="10" stroke-width="2"/>
    <line x1="27" x2="45" y1="43" y2="43" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <line x1="25" x2="30" y1="31" y2="31" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <line x1="43" x2="48" y1="31" y2="31" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
  </g>
`)
  )
}
export default EmojiExpressionlessFaceBlack
