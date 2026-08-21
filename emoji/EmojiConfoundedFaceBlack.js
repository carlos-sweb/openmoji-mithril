import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "confounded face" (black) [1F616]. */
const EmojiConfoundedFaceBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="line">
    <circle cx="36" cy="36" r="23" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="m23.64 27.87 7.928 2.431-7.862 3.248"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="m48.36 27.87-7.928 2.431 7.862 3.248"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m23.93 44.39 3.533-2.896 3.931 5.55 4.608-4.044 4.608 4.044 3.944-5.55 3.532 2.905v-0.0107"/>
  </g>
`)
  )
}
export default EmojiConfoundedFaceBlack
