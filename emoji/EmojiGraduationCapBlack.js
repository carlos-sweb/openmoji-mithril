import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "graduation cap" (black) [1F393]. */
const EmojiGraduationCapBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="line">
    <circle cx="36" cy="22.0023" r="3"/>
    <rect x="4" y="22.875" width="64" height="5.0417" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <polyline fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.747" points="56 30.9166 56 45.896 16 45.896 16 30.9166"/>
  </g>
`)
  )
}
export default EmojiGraduationCapBlack
