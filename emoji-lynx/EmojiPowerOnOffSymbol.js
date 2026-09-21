import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the OpenMoji "power on-off symbol" (color) [23FC]. */
const EmojiPowerOnOffSymbol = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}), content: `
  <g id="color">
    <path id="Vector_6" fill="#fff" d="m36.0583,55.1726c10.5936,0,19.1814-8.5878,19.1814-19.1814s-8.5878-19.1814-19.1814-19.1814-19.1814,8.5878-19.1814,19.1814,8.5878,19.1814,19.1814,19.1814Z"/>
  </g>
  <g id="line">
    <path id="Line_1" fill="none" stroke="#000" stroke-linecap="round" stroke-width="2" d="m36,24v24"/>
    <path id="Vector_6-2" fill="none" stroke="#000" stroke-linejoin="round" stroke-width="2" d="m36,56c11.0457,0,20-8.9543,20-20s-8.9543-20-20-20-20,8.9543-20,20,8.9543,20,20,20Z"/>
  </g>
` }
  )
}
export default EmojiPowerOnOffSymbol
