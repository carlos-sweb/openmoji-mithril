import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "simple" (black) [E24C]. */
const EmojiSimpleBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="line">
    <circle cx="36" cy="36" r="25" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
  </g>
`)
  )
}
export default EmojiSimpleBlack
