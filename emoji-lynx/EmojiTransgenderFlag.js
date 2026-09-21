import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the OpenMoji "transgender flag" (color) [1F3F3-FE0F-200D-26A7-FE0F]. */
const EmojiTransgenderFlag = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}), content: `
  <g id="color">
    <rect x="6" y="46.8" width="60" height="7.2" fill="#92d3f5" stroke-width="0"/>
    <rect x="6" y="39.6" width="60" height="7.2" fill="#ffa7c0" stroke-width="0"/>
    <rect x="6" y="32.4" width="60" height="7.2" fill="#fff" stroke-width="0"/>
    <rect x="6" y="25.2" width="60" height="7.2" fill="#ffa7c0" stroke-width="0"/>
    <rect x="6" y="18" width="60" height="7.2" fill="#92d3f5" stroke-width="0"/>
  </g>
  <g id="line">
    <rect x="5" y="17" width="62" height="38" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
` }
  )
}
export default EmojiTransgenderFlag
