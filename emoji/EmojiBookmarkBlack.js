import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "bookmark" (black) [1F516]. */
const EmojiBookmarkBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="line">
    <polygon fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" points="46.5,56 36.5,44.8488 26.5,56 26.5,10.9583 46.5,10.9583"/>
    <polygon fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" points="46.5,56 36.5,44.8488 26.5,56 26.5,10.9583 46.5,10.9583"/>
  </g>
`)
  )
}
export default EmojiBookmarkBlack
