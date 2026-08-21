import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "circled zero with slash" (black) [1F10D]. */
const EmojiCircledZeroWithSlashBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="line">
    <circle cx="36" cy="36" r="26.68" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4.74" paint-order="normal"/>
    <path fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4.74" d="m43.24 22.41-15.01 26-0.3267-0.1886"/>
    <g transform="matrix(4.347 0 0 4.347 36 20.78)" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" clip-rule="evenodd">
      <path fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1.84" d="m0 7c-1.058 0-1.916-0.857-1.916-1.916v-3.168c0-1.058 0.858-1.916 1.916-1.916s1.916 0.858 1.916 1.916v3.168c0 1.059-0.858 1.916-1.916 1.916z"/>
    </g>
  </g>
`)
  )
}
export default EmojiCircledZeroWithSlashBlack
