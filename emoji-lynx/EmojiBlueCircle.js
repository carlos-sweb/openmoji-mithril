import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the OpenMoji "blue circle" (color) [1F535]. */
const EmojiBlueCircle = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}), content: `
  <g id="color">
    <circle cx="36" cy="36" r="28" fill="#92d3f5"/>
  </g>
  <g id="line">
    <circle cx="36" cy="36" r="28" fill="none" stroke="#000" stroke-linejoin="round" stroke-width="2"/>
  </g>
` }
  )
}
export default EmojiBlueCircle
