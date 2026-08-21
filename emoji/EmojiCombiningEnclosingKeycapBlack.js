import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "combining enclosing keycap" (black) [20E3]. */
const EmojiCombiningEnclosingKeycapBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="line" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round">
    <rect x="12" y="12" width="48" height="48" stroke-width="2"/>
  </g>
`)
  )
}
export default EmojiCombiningEnclosingKeycapBlack
