import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "intricate" (black) [E24B]. */
const EmojiIntricateBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="line">
    <circle cx="19" cy="54" r="8" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <circle cx="46.5" cy="39.5" r="17.5" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <circle cx="18" cy="21" r="11" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
  </g>
`)
  )
}
export default EmojiIntricateBlack
