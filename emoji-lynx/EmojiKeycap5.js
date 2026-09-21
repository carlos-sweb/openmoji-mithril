import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the OpenMoji "keycap: 5" (color) [0035-FE0F-20E3]. */
const EmojiKeycap5 = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}), content: `
  <g id="color">
    <rect x="12" y="12" width="48" height="47.83" fill="#92d3f5"/>
  </g>
  <g id="line" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round">
    <path stroke-miterlimit="10" stroke-width="4.856" d="m31.94 41.7c0.5754 1.585 2.095 2.717 3.877 2.717h0.1141c2.28 0 4.125-1.848 4.125-4.125v-0.8838c0-2.28-1.845-4.127-4.125-4.127h-3.991v-7.859h8.117" clip-rule="evenodd"/>
    <rect x="12" y="12" width="48" height="48" stroke-width="2"/>
  </g>
` }
  )
}
export default EmojiKeycap5
