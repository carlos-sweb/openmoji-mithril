import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "right arrow" (black) [27A1]. */
const EmojiRightArrowBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="line">
    <polygon fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" points="49.2124,51.5343 67,35.0363 49.2124,18.5382 45.4234,22.6138 55.8191,32.2554 5,32.2554 5,37.8171 55.8191,37.8171 45.4234,47.4587"/>
  </g>
`)
  )
}
export default EmojiRightArrowBlack
