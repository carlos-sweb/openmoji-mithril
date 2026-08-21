import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "sort" (black) [E265]. */
const EmojiSortBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="line">
    <rect x="16" y="21" width="40" height="6" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <rect x="16" y="33" width="31" height="6" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <rect x="16.3333" y="45" width="26" height="6" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
  </g>
`)
  )
}
export default EmojiSortBlack
