import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "left-right arrow" (black) [2194]. */
const EmojiLeftRightArrowBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="line">
    <polygon fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" points="50.2632,20.2344 46.5538,24.269 55.7618,32.9375 16.2382,32.9375 25.4458,24.269 21.7368,20.2344 5,35.998 21.7368,51.7646 25.4458,47.7314 16.2449,39.0664 55.7551,39.0664 46.5538,47.7314 50.2632,51.7646 67,35.998"/>
  </g>
`)
  )
}
export default EmojiLeftRightArrowBlack
