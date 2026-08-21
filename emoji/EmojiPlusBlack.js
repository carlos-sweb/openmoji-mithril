import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "plus" (black) [2795]. */
const EmojiPlusBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="line">
    <polygon fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" points="31,31 31,13 41,13 41,31 59,31 59,41 41,41 41,59 31,59 31,41 13,41 13,31"/>
  </g>
`)
  )
}
export default EmojiPlusBlack
