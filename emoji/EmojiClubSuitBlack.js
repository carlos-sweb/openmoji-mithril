import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "club suit" (black) [2663]. */
const EmojiClubSuitBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="line">
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m38.7,38.8c1.2,7.9,7,20.5,8.9,21.3h-22.7c2-.9,8.4-15.1,9-22.8"/>
    <circle cx="36.2" cy="19.6" r="11.5" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <circle cx="53.4" cy="36.7" r="11.5" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <circle cx="19" cy="36.7" r="11.5" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
`)
  )
}
export default EmojiClubSuitBlack
