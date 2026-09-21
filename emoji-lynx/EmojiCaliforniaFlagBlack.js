import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the OpenMoji "california flag" (black) [1F3F4-E0075-E0073-E0063-E0061-E007F]. */
const EmojiCaliforniaFlagBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}), content: `
  <g id="line">
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M67 17H5V55H67V17Z"/>
  </g>
` }
  )
}
export default EmojiCaliforniaFlagBlack
