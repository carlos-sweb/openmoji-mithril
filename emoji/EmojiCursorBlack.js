import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "cursor" (black) [E258]. */
const EmojiCursorBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="line">
    <path fill="none" stroke="#000" stroke-linejoin="round" stroke-width="2" d="m18.21 7.95 35.64 31.5-13.16 5.586 6.445 14.44-10.77 4.57-6.445-14.44-11.76 4.993z"/>
  </g>
`)
  )
}
export default EmojiCursorBlack
