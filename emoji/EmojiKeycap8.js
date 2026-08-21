import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "keycap: 8" (color) [0038-FE0F-20E3]. */
const EmojiKeycap8 = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="color">
    <rect x="12" y="12" width="48" height="47.83" fill="#92d3f5"/>
  </g>
  <g id="line" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round">
    <path transform="matrix(2.394,0,0,2.394,31.19,40.2)" stroke-miterlimit="10" stroke-width="2" d="m0 0c0 0.969 0.785 1.754 1.754 1.754h0.254c0.969 0 1.755-0.785 1.755-1.754s-0.786-1.754-1.755-1.754h-0.254c-0.969 0-1.754 0.785-1.754 1.754z" clip-rule="evenodd"/>
    <path transform="matrix(2.394,0,0,2.394,31.19,31.8)" stroke-miterlimit="10" stroke-width="2" d="m0 0c0 0.969 0.785 1.754 1.754 1.754h0.254c0.969 0 1.755-0.785 1.755-1.754s-0.786-1.754-1.755-1.754h-0.254c-0.969 0-1.754 0.785-1.754 1.754z" clip-rule="evenodd"/>
    <rect x="12" y="12" width="48" height="48" stroke-width="2"/>
  </g>
`)
  )
}
export default EmojiKeycap8
