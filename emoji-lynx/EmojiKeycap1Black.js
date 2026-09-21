import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the OpenMoji "keycap: 1" (black) [0031-FE0F-20E3]. */
const EmojiKeycap1Black = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}), content: `
  <g id="line" transform="translate(0 .085)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round">
    <path stroke-miterlimit="10" stroke-width="4.781" d="m32.57 31.1 4.63-3.471v16.73" clip-rule="evenodd"/>
    <rect x="12" y="12" width="48" height="48" stroke-width="2"/>
  </g>
` }
  )
}
export default EmojiKeycap1Black
