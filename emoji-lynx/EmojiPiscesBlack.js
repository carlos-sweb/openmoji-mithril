import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the OpenMoji "Pisces" (black) [2653]. */
const EmojiPiscesBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}), content: `
  <g id="line-supplement" fill="none" stroke="#000" stroke-linecap="round" stroke-width="3">
    <path stroke-miterlimit="10" d="m23.39 50.52s7.057-4.043 6.983-14.52c0.0732-10.48-6.983-14.52-6.983-14.52"/>
    <path stroke-miterlimit="10" d="m48.61 21.48s-7.057 4.043-6.984 14.52c-0.0719 10.48 6.984 14.52 6.984 14.52"/>
    <line x1="48.18" x2="23.82" y1="36.52" y2="36.52" stroke-linejoin="round"/>
  </g>
  <g id="line">
    <rect x="12" y="12" width="48" height="48" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
` }
  )
}
export default EmojiPiscesBlack
