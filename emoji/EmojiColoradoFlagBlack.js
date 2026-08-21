import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "colorado flag" (black) [1F3F4-E0075-E0073-E0063-E006F-E007F]. */
const EmojiColoradoFlagBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="line">
    <g stroke-width="2">
      <rect x="5" y="17" width="62" height="38" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    </g>
  </g>
`)
  )
}
export default EmojiColoradoFlagBlack
