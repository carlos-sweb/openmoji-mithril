import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "greysexual" (black) [E427]. */
const EmojiGreysexualBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="line">
    <rect x="5" y="17" width="62" height="38" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
`)
  )
}
export default EmojiGreysexualBlack
