import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the OpenMoji "triangular flag" (color) [1F6A9]. */
const EmojiTriangularFlag = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}), content: `
  <g id="color">
    <polygon fill="#d22f27" points="67 24 36 33.5 5 43 5 24 5 5 36 14.5 67 24"/>
  </g>
  <g id="line">
    <g>
      <polygon fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="67 24 36 33.5 5 43 5 24 5 5 36 14.5 67 24"/>
      <line x1="5" x2="5" y1="5" y2="67" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    </g>
  </g>
` }
  )
}
export default EmojiTriangularFlag
