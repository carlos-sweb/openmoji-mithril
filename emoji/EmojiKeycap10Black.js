import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "keycap: 10" (black) [1F51F]. */
const EmojiKeycap10Black = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="line" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round">
    <path transform="translate(-5.417 -.1646)" stroke-miterlimit="10" stroke-width="4.781" d="m47.26 44.44c-2.529 0-4.58-2.048-4.58-4.58v-7.572c0-2.529 2.051-4.58 4.58-4.58s4.58 2.051 4.58 4.58v7.572c0 2.531-2.051 4.58-4.58 4.58z" clip-rule="evenodd"/>
    <path transform="translate(-5.417 -.1646)" stroke-miterlimit="10" stroke-width="4.781" d="m31.25 31.19 4.63-3.471v16.73" clip-rule="evenodd"/>
    <rect x="12" y="12" width="48" height="48" stroke-width="2"/>
  </g>
`)
  )
}
export default EmojiKeycap10Black
