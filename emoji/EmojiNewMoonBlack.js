import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "new moon" (black) [1F311]. */
const EmojiNewMoonBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="line-supplement">
    <circle cx="36" cy="36" r="28" fill="#000000" stroke="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
  <g id="line">
    <circle cx="36" cy="36" r="28" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
`)
  )
}
export default EmojiNewMoonBlack
