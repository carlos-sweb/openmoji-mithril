import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "red circle" (color) [1F534]. */
const EmojiRedCircle = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="color">
    <circle cx="36" cy="36.0001" r="28" fill="#d22f27"/>
  </g>
  <g id="line">
    <circle cx="36" cy="36.0001" r="28" fill="none" stroke="#000" stroke-linejoin="round" stroke-width="2"/>
  </g>
`)
  )
}
export default EmojiRedCircle
