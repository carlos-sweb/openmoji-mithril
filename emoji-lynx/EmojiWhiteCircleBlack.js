import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the OpenMoji "white circle" (black) [26AA]. */
const EmojiWhiteCircleBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}), content: `
  <g id="line">
    <circle cx="36" cy="36.0001" r="28" fill="none" stroke="#000" stroke-linejoin="round" stroke-width="2"/>
  </g>
` }
  )
}
export default EmojiWhiteCircleBlack
