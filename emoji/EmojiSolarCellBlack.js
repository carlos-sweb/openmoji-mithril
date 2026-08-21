import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "solar cell" (black) [E1D6]. */
const EmojiSolarCellBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="line">
    <polygon fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" points="51,53 5,53 17,19 63,19"/>
    <line x1="40" x2="28" y1="19" y2="53" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <line x1="58.5022" x2="66" y1="31.7562" y2="53" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
  </g>
`)
  )
}
export default EmojiSolarCellBlack
