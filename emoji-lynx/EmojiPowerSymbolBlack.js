import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the OpenMoji "power symbol" (black) [23FB]. */
const EmojiPowerSymbolBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}), content: `
  <g id="line">
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m29.3333,17c-7.7679,2.7553-13.3333,10.1899-13.3333,18.929,0,11.0849,8.9543,20.071,20,20.071s20-8.9861,20-20.071c0-8.7391-5.5654-16.1737-13.3333-18.929"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-width="2" d="m36,11v25"/>
  </g>
` }
  )
}
export default EmojiPowerSymbolBlack
