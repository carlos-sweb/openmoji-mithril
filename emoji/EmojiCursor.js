import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "cursor" (color) [E258]. */
const EmojiCursor = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="color">
    <path fill="#fff" d="m47.11 59.48-10.75 4.57-6.435-14.44-11.74 4.993 0.04766-46.65 35.58 31.5-13.14 5.586z"/>
    <path fill="#d0cfce" d="m44.61 43.87 9.207-4.416-35.58-31.5z"/>
  </g>
  <g id="line">
    <path fill="none" stroke="#000" stroke-linejoin="round" stroke-width="2" d="m18.21 7.95 35.64 31.5-13.16 5.586 6.445 14.44-10.77 4.57-6.445-14.44-11.76 4.993z"/>
  </g>
`)
  )
}
export default EmojiCursor
