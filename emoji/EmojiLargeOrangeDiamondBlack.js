import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "large orange diamond" (black) [1F536]. */
const EmojiLargeOrangeDiamondBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="line">
    <rect x="18.34" y="18.3" width="35.32" height="35.32" transform="translate(35.97 -14.92) rotate(45)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
`)
  )
}
export default EmojiLargeOrangeDiamondBlack
