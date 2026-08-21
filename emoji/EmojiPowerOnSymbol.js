import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "power on symbol" (color) [23FD]. */
const EmojiPowerOnSymbol = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="color"/>
  <g id="line">
    <path stroke="#000000" stroke-linecap="round" stroke-width="2" d="M36 16L36 56"/>
  </g>
`)
  )
}
export default EmojiPowerOnSymbol
