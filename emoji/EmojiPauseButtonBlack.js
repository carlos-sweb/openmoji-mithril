import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "pause button" (black) [23F8]. */
const EmojiPauseButtonBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="line">
    <line x1="40.5" x2="40.5" y1="17" y2="55" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <line x1="32.5" x2="32.5" y1="17" y2="55" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
  </g>
`)
  )
}
export default EmojiPauseButtonBlack
