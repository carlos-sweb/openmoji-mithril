import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "ring" (black) [1F48D]. */
const EmojiRingBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="line">
    <circle cx="37.625" cy="41" r="19.9583" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <line x1="27.9329" x2="31.1832" y1="11.9583" y2="18.4279" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <line x1="46.8751" x2="43.6249" y1="11.9568" y2="18.4264" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <polygon fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" points="41.3137,17 33.6463,17 32.6463,11.9568 42.3137,11.9568"/>
  </g>
`)
  )
}
export default EmojiRingBlack
