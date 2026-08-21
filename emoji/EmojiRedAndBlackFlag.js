import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "red and black flag" (color) [1F3F4-FE0F-200D-1F170-FE0F]. */
const EmojiRedAndBlackFlag = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="color">
    <rect x="5" y="17" width="62" height="38" fill="#000"/>
    <polygon fill="#d22f27" points="5 17 67 17 5 55"/>
  </g>
  <g id="line">
    <rect x="5" y="17" width="62" height="38" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
`)
  )
}
export default EmojiRedAndBlackFlag
