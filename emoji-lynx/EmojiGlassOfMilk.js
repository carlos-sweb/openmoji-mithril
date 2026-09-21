import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the OpenMoji "glass of milk" (color) [1F95B]. */
const EmojiGlassOfMilk = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}), content: `
  <g id="color">
    <polygon fill="#fff" points="53.545 28 48.35 67 24.6 67 18.6794 28"/>
    <polygon fill="#d0cfce" points="43.404 28 38.35 67 48.35 67 53.404 28"/>
  </g>
  <g id="line">
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="m17,17L24.6,67L48.35,67L55,17"/>
  </g>
` }
  )
}
export default EmojiGlassOfMilk
