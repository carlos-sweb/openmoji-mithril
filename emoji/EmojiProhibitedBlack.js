import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "prohibited" (black) [1F6AB]. */
const EmojiProhibitedBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="line">
    <circle cx="36" cy="36" r="30" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m55.66 51.44a24.99 24.99 0 0 0-35.06-35.13z"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m16.99 19.77a24.99 24.99 0 0 0 35.2 35.27z"/>
  </g>
`)
  )
}
export default EmojiProhibitedBlack
