import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the OpenMoji "keycap: 7" (color) [0037-FE0F-20E3]. */
const EmojiKeycap7 = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}), content: `
  <g id="color">
    <rect x="12" y="12" width="48" height="47.83" fill="#92d3f5"/>
  </g>
  <g id="line" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round">
    <path stroke-miterlimit="10" stroke-width="4.798" d="m31.28 31.75v-4.146h9.443l-5.835 16.79" clip-rule="evenodd"/>
    <rect x="12" y="12" width="48" height="48" stroke-width="2"/>
  </g>
` }
  )
}
export default EmojiKeycap7
