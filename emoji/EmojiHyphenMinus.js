import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "hyphen-minus" (color) [002D]. */
const EmojiHyphenMinus = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="line-supplement">
    <polyline fill="#000000" stroke="none" points="59,41 13,41 13,31 59,31"/>
  </g>
  <g id="color">
    <polyline fill="#3F3F3F" stroke="none" points="59,41 13,41 13,31 59,31"/>
  </g>
  <g id="hair"/>
  <g id="skin"/>
  <g id="skin-shadow"/>
  <g id="line">
    <rect x="13" y="31" width="46" height="10" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
  </g>
`)
  )
}
export default EmojiHyphenMinus
