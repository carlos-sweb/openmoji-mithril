import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "demisexual" (black) [E426]. */
const EmojiDemisexualBlack = {
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
export default EmojiDemisexualBlack
