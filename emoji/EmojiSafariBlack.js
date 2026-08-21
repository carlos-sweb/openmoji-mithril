import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "Safari" (black) [E051]. */
const EmojiSafariBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="line">
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m36,64c15.464,0,28-12.536,28-28s-12.536-28-28-28-28,12.536-28,28,12.536,28,28,28Z"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m33.2,33.2l-9.2,14.8,14.8-9.2"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m33.2,33.2l14.8-9.2-9.2,14.8"/>
  </g>
`)
  )
}
export default EmojiSafariBlack
