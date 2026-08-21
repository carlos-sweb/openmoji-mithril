import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "add button" (black) [E25F]. */
const EmojiAddButtonBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="line">
    <line x1="36.0731" x2="36.0731" y1="22.3267" y2="49.5769" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <line x1="49.6982" x2="22.4479" y1="35.9518" y2="35.9518" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <circle cx="36.0731" cy="35.9518" r="23" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
  </g>
`)
  )
}
export default EmojiAddButtonBlack
