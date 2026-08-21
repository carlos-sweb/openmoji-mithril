import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "link" (black) [E269]. */
const EmojiE269Black = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="line">
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m49.0417,27h12.9583c3.3,0,6,2.7,6,6v6c0,3.3-2.7,6-6,6h-29c-3.3,0-6-2.7-6-6v-2"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m49,33h11.0001c1.1046,0,2,.7374,2,1.647v2.7058c0,.9096-.8954,1.647-2,1.647h-25c-1.1046,0-2-.7374-2-1.647v-.3737"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m22.9882,45h-12.9882c-3.3,0-6-2.7-6-6v-6c0-3.3,2.7-6,6-6h29c3.3,0,6,2.7,6,6v2"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m23,39h-11.0001c-1.1046,0-2-.7374-2-1.647v-2.7059c0-.9096.8954-1.647,2-1.647h25c1.1046,0,2,.7374,2,1.647v.3454"/>
  </g>
`)
  )
}
export default EmojiE269Black
