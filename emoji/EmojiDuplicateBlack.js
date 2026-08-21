import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "duplicate" (black) [E25B]. */
const EmojiDuplicateBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="line">
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M46.8015,51.984v7.013c0,0.55-0.45,1-1,1h-33c-0.55,0-1-0.45-1-1v-33c0-0.5523,0.4477-1,1-1h7.0819"/>
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M58.8017,46.9968h-33c-0.55,0-1-0.45-1-1v-33c0-0.5523,0.4477-1,1-1h33c0.55,0,1,0.45,1,1v33 C59.8017,46.5468,59.3517,46.9968,58.8017,46.9968z"/>
  </g>
`)
  )
}
export default EmojiDuplicateBlack
