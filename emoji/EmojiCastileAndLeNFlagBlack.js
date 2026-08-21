import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "castile and le�n flag" (black) [1F3F4-E0065-E0073-E0063-E006C-E007F]. */
const EmojiCastileAndLeNFlagBlack = {
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
export default EmojiCastileAndLeNFlagBlack
