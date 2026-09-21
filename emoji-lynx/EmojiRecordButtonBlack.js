import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the OpenMoji "record button" (black) [23FA]. */
const EmojiRecordButtonBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}), content: `
  <g id="line">
    <circle cx="36" cy="36" r="20" fill="none" stroke="#000" stroke-linejoin="round" stroke-width="2"/>
    <circle cx="36" cy="36" r="7"/>
  </g>
` }
  )
}
export default EmojiRecordButtonBlack
