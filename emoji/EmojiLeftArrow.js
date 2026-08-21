import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "left arrow" (color) [2B05]. */
const EmojiLeftArrow = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="color">
    <polygon fill="#3F3F3F" stroke="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" points="22.7876,51.5343 5,35.0363 22.7876,18.5382 26.5766,22.6138 16.1809,32.2554 67,32.2554 67,37.8171 16.1809,37.8171 26.5766,47.4587"/>
  </g>
  <g id="hair"/>
  <g id="skin"/>
  <g id="skin-shadow"/>
  <g id="line">
    <polygon fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" points="22.7876,51.5343 5,35.0363 22.7876,18.5382 26.5766,22.6138 16.1809,32.2554 67,32.2554 67,37.8171 16.1809,37.8171 26.5766,47.4587"/>
  </g>
`)
  )
}
export default EmojiLeftArrow
