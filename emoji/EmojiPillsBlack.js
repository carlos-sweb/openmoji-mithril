import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "pills" (black) [E305]. */
const EmojiPillsBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="line">
    <rect x="9.057" y="18.4" rx="4.644" ry="4.644" width="53.89" height="35.2" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <circle cx="21.34" cy="29.2" r="4.309" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <circle cx="36.18" cy="29.2" r="4.309" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <circle cx="51.03" cy="29.2" r="4.309" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <circle cx="21.34" cy="43.16" r="4.309" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <circle cx="36.18" cy="43.16" r="4.309" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <circle cx="51.03" cy="43.16" r="4.309" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
`)
  )
}
export default EmojiPillsBlack
