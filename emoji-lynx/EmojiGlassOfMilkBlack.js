import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the OpenMoji "glass of milk" (black) [1F95B]. */
const EmojiGlassOfMilkBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}), content: `
  <g id="line">
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="m17,17L24.6,67L48.35,67L55,17"/>
  </g>
` }
  )
}
export default EmojiGlassOfMilkBlack
