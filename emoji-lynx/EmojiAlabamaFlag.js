import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the OpenMoji "alabama flag" (color) [1F3F4-E0075-E0073-E0061-E006C-E007F]. */
const EmojiAlabamaFlag = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}), content: `
  <g id="color">
    <rect x="5" y="17" width="62" height="38" fill="#fff"/>
    <rect x="0" y="35" rx="3.25" width="70.5" height="6.5" transform="rotate(30 40 38)" fill="#d22f27"/>
    <rect x="0" y="35" rx="3.25" width="70.5" height="6.5" transform="rotate(-30 31 36)" fill="#d22f27"/>
  </g>
  <g id="line">
    <rect x="5" y="17" width="62" height="38" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
` }
  )
}
export default EmojiAlabamaFlag
