import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the OpenMoji "keycap: 2" (black) [0032-FE0F-20E3]. */
const EmojiKeycap2Black = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}), content: `
  <g id="line" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round">
    <path stroke-miterlimit="10" stroke-width="4.798" d="m30.94 31.68c0.4822-2.349 2.562-4.119 5.055-4.119 1.425 0 2.713 0.5782 3.647 1.511 1.452 1.454 1.32 3.865-0.04318 5.403l-8.762 9.88h10.32" clip-rule="evenodd"/>
    <rect x="12" y="12" width="48" height="48" stroke-width="2"/>
  </g>
` }
  )
}
export default EmojiKeycap2Black
