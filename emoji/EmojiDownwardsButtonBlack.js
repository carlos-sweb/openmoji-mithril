import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "downwards button" (black) [1F53D]. */
const EmojiDownwardsButtonBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="line">
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M57.1347,17L47,35.8824l-9.9304,18.5018c-0.4407,0.8211-1.6984,0.8211-2.1391,0L25,35.8824L14.8653,17"/>
  </g>
`)
  )
}
export default EmojiDownwardsButtonBlack
