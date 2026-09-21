import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the OpenMoji "gay" (color) [E422]. */
const EmojiGay = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}), content: `
  <g id="color">
    <rect x="6" y="18" width="60" height="36" fill="#1e50a0"/>
    <rect x="6" y="18" width="60" height="28.8" fill="#61b2e4"/>
    <rect x="6" y="18" width="60" height="21.6" fill="#fff"/>
    <rect x="6" y="18" width="60" height="14.4" fill="#5c9e31"/>
    <rect x="6" y="18" width="60" height="7.2" fill="#186648"/>
  </g>
  <g id="line">
    <rect x="5" y="17" width="62" height="38" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
` }
  )
}
export default EmojiGay
