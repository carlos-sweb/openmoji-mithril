import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "check mark" (black) [2714]. */
const EmojiCheckMarkBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="line">
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="m10.5 39.76 17.42 17.44 33.58-33.89-8.013-8.013-25.71 25.71-9.26-9.26z"/>
  </g>
`)
  )
}
export default EmojiCheckMarkBlack
