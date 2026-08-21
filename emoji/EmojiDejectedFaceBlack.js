import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "dejected face" (black) [E282]. */
const EmojiDejectedFaceBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="line">
    <circle cx="36" cy="36" r="23" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2"/>
    <line x1="28.99" x2="43.01" y1="51" y2="51" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <path d="m29.2 42c0 1.657-1.345 3-3 3-1.655 0-3-1.343-3-3 0-1.655 1.345-3 3-3 1.655 0 3 1.345 3 3"/>
    <path d="m48.8 42c0 1.657-1.345 3-3 3s-3-1.343-3-3c0-1.655 1.345-3 3-3s3 1.345 3 3"/>
  </g>
`)
  )
}
export default EmojiDejectedFaceBlack
