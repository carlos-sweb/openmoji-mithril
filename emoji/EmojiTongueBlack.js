import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "tongue" (black) [1F445]. */
const EmojiTongueBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="line">
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M62.4167,12.5C56.2812,19.625,48.9688,22.1893,36,22.1875C23.0312,22.1893,15.7188,19.625,9.5833,12.5"/>
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M62.4167,12.5C56.2812,19.625,48.9688,22.1893,36,22.1875C23.0312,22.1893,15.7188,19.625,9.5833,12.5"/>
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M57.375,21.75C66.5,55.1875,48.0383,60.375,36.5,60.375s-30-5.1875-20.875-38.625"/>
    <line x1="36.5" x2="36.5" y1="60.375" y2="34.1955" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
  </g>
`)
  )
}
export default EmojiTongueBlack
