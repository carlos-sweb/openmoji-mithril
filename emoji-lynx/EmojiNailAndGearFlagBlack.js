import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the OpenMoji "nail and gear flag" (black) [1F3F3-FE0F-200D-1F4CC-200D-2699-FE0F]. */
const EmojiNailAndGearFlagBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}), content: `
  <g id="line">
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M67 17H5V55H67V17Z"/>
  </g>
` }
  )
}
export default EmojiNailAndGearFlagBlack
