import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the OpenMoji "demigender" (color) [E434]. */
const EmojiDemigender = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}), content: `
  <g id="color">
    <rect x="6" y="18" width="60" height="36" fill="#9b9b9a" stroke-width="0"/>
    <rect x="6" y="18" width="60" height="30.86" fill="#d0cfce" stroke-width="0"/>
    <rect x="6" y="18" width="60" height="25.71" fill="#fcea2b" stroke-width="0"/>
    <rect x="6" y="18" width="60" height="20.57" fill="#fff" stroke-width="0"/>
    <rect x="6" y="18" width="60" height="15.43" fill="#fcea2b" stroke-width="0"/>
    <rect x="6" y="18" width="60" height="10.29" fill="#d0cfce" stroke-width="0"/>
    <rect x="6" y="18" width="60" height="5.141" fill="#9b9b9a" stroke-width="0"/>
  </g>
  <g id="line">
    <rect x="5" y="17" width="62" height="38" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
` }
  )
}
export default EmojiDemigender
