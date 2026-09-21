import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the OpenMoji "circle with left half black" (black) [25D0]. */
const EmojiCircleWithLeftHalfBlackBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}), content: `
  <g id="line">
    <path fill="none" stroke="#000" stroke-linejoin="round" stroke-width="2" d="m36,64c15.464,0,28-12.536,28-28s-12.536-28-28-28-28,12.536-28,28,12.536,28,28,28Z"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-width="2" d="m36,8v53"/>
  </g>
` }
  )
}
export default EmojiCircleWithLeftHalfBlackBlack
