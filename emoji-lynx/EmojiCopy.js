import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the OpenMoji "copy" (color) [E255]. */
const EmojiCopy = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}), content: `
  <g id="color">
    <rect x="23.8246" y="9.2081" width="32.1283" height="47.7648" fill="#9B9B9A"/>
    <rect x="19.9359" y="13.0968" width="32.1283" height="47.7648" fill="#FFFFFF"/>
  </g>
  <g id="hair"/>
  <g id="skin"/>
  <g id="skin-shadow"/>
  <g id="line">
    <polyline fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" points="52.06,56.9698 55.95,56.9698 55.95,9.2098 23.82,9.2098 23.82,13.0998"/>
    <rect x="19.9359" y="13.0968" width="32.1283" height="47.7648" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <line x1="31.1709" x2="40.8291" y1="37.0208" y2="37.0208" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <line x1="36" x2="36" y1="41.8499" y2="32.1917" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
  </g>
` }
  )
}
export default EmojiCopy
