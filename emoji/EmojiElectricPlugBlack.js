import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "electric plug" (black) [1F50C]. */
const EmojiElectricPlugBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="line">
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M33.013,23.0925V8.2105 c0-1.8264-1.4806-3.307-3.307-3.307h0l0,0c-1.8264,0-3.307,1.4806-3.307,3.307l0,0v14.883"/>
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M49.55,23.0925V8.2105 c0-1.8264-1.4806-3.307-3.307-3.307h0l0,0c-1.8264,0-3.307,1.4806-3.307,3.307l0,0v14.883"/>
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.435,23.1885v11.48 c0,10.0461,8.1439,18.19,18.19,18.19s18.19-8.144,18.19-18.19v-11.48H19.435z"/>
    <polyline fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="31.011,51.8095 32.665,58.0005 42.586,58.0005 44.24,51.8335"/>
    <polyline fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="33.618,66.0835 33.618,58.0005 41.681,58.0005 41.681,66.0835"/>
  </g>
`)
  )
}
export default EmojiElectricPlugBlack
