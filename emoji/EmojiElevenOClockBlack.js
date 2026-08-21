import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "eleven o’clock" (black) [1F55A]. */
const EmojiElevenOClockBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="line">
    <circle cx="35.958" cy="35.9901" r="23" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <line x1="36" x2="36" y1="18.9893" y2="35.9893" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <line x1="35.8994" x2="30.3994" y1="35.9665" y2="26.4402" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
  </g>
`)
  )
}
export default EmojiElevenOClockBlack
