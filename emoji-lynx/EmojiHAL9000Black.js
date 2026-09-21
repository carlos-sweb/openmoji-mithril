import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the OpenMoji "HAL 9000" (black) [25C9-FE0F-200D-1F534-200D-25AE-FE0F]. */
const EmojiHAL9000Black = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}), content: `
  <g id="line-supplement">
    <circle cx="36" cy="40" r="1" fill="#000"/>
  </g>
  <g id="line">
    <rect x="26" y="5" width="20" height="62" fill="none" stroke="#000" stroke-linejoin="round"/>
    <circle cx="36" cy="40" r="7" fill="none" stroke="#000"/>
    <line x1="27.5" x2="44.5" y1="52.5" y2="52.5" stroke="#000" stroke-linecap="round"/>
    <rect x="28" y="7" width="16" height="4" fill="none" stroke="#000" stroke-linejoin="round"/>
    <rect x="26" y="5" width="20" height="62" fill="none" stroke="#000" stroke-linejoin="round"/>
  </g>
` }
  )
}
export default EmojiHAL9000Black
