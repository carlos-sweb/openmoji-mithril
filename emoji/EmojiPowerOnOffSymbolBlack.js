import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "power on-off symbol" (black) [23FC]. */
const EmojiPowerOnOffSymbolBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="line">
    <path id="Line_1" fill="none" stroke="#000" stroke-linecap="round" stroke-width="2" d="m36,24v24"/>
    <path id="Vector_6-2" fill="none" stroke="#000" stroke-linejoin="round" stroke-width="2" d="m36,56c11.0457,0,20-8.9543,20-20s-8.9543-20-20-20-20,8.9543-20,20,8.9543,20,20,20Z"/>
  </g>
`)
  )
}
export default EmojiPowerOnOffSymbolBlack
