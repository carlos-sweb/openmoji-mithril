import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "mahjong red dragon" (black) [1F004]. */
const EmojiMahjongRedDragonBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="line">
    <rect x="17" y="8" width="38" height="56" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <line x1="36" x2="36" y1="16" y2="56" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <rect x="24" y="24" width="24" height="12" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
`)
  )
}
export default EmojiMahjongRedDragonBlack
