import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "pool 8 ball" (black) [1F3B1]. */
const EmojiPool8BallBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="line">
    <circle cx="36" cy="35.9583" r="29" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <circle cx="36" cy="32.5951" r="3.3632" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <circle cx="36" cy="40.3103" r="4.352" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
  </g>
`)
  )
}
export default EmojiPool8BallBlack
