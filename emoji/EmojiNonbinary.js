import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "nonbinary" (color) [E42E]. */
const EmojiNonbinary = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="color">
    <rect x="6" y="18" width="60" height="36" fill="#3f3f3f"/>
    <rect x="6" y="18" width="60" height="27" fill="#8967aa"/>
    <rect x="6" y="18" width="60" height="18" fill="#fff"/>
    <rect x="6" y="18" width="60" height="9" fill="#fcea2b"/>
  </g>
  <g id="line">
    <rect x="5" y="17" width="62" height="38" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
`)
  )
}
export default EmojiNonbinary
