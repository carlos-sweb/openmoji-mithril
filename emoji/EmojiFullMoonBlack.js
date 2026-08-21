import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "full moon" (black) [1F315]. */
const EmojiFullMoonBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="line">
    <circle cx="36" cy="36" r="28" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
`)
  )
}
export default EmojiFullMoonBlack
