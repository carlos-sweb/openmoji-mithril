import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "keycap: 0" (black) [0030-FE0F-20E3]. */
const EmojiKeycap0Black = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="line" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round">
    <path stroke-miterlimit="10" stroke-width="4.781" d="m35.88 44.45c-2.529 0-4.58-2.048-4.58-4.58v-7.572c0-2.529 2.051-4.58 4.58-4.58s4.58 2.051 4.58 4.58v7.572c0 2.531-2.051 4.58-4.58 4.58z" clip-rule="evenodd"/>
    <rect x="12" y="12" width="48" height="48" stroke-width="2"/>
  </g>
`)
  )
}
export default EmojiKeycap0Black
