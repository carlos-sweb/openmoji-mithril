import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "upside-down face" (black) [1F643]. */
const EmojiUpsideDownFaceBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="line">
    <circle cx="36" cy="36" r="23" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M26.1851,27.0707 c2.8995-1.6362,6.2482-2.5699,9.8149-2.5699s6.9153,0.9336,9.8149,2.5699"/>
    <path d="M42,41c0-1.6568,1.3448-3,3-3c1.6553,0,3,1.3433,3,3c0,1.6552-1.3447,3-3,3C43.3448,44,42,42.6552,42,41"/>
    <path d="M24,41c0-1.6568,1.3447-3,3-3s3,1.3433,3,3c0,1.6552-1.3447,3-3,3S24,42.6552,24,41"/>
  </g>
`)
  )
}
export default EmojiUpsideDownFaceBlack
