import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the OpenMoji "red square" (color) [1F7E5]. */
const EmojiRedSquare = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}), content: `
  <g id="color">
    <rect x="12" y="12" width="48" height="47.83" fill="#d22f27"/>
  </g>
  <g id="line">
    <rect x="12" y="12" width="48" height="48" fill="none" stroke="#000" stroke-linejoin="round" stroke-width="2"/>
  </g>
` }
  )
}
export default EmojiRedSquare
