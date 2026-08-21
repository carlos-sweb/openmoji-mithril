import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "signpost" (black) [E094]. */
const EmojiSignpostBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="line">
    <polyline fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="18.23 27.091 11.848 27.091 7.157 33.271 11.848 39.521 27.425 39.521 27.425 33.982"/>
    <polyline fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="46.711 14.992 58.181 14.992 62.873 21.172 58.181 27.421 42.605 27.421 42.605 23.216"/>
    <polyline fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="31.071 65.663 31.071 10.481 39.018 10.481 39.018 65.663"/>
  </g>
`)
  )
}
export default EmojiSignpostBlack
