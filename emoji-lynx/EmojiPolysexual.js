import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the OpenMoji "polysexual" (color) [E428]. */
const EmojiPolysexual = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}), content: `
  <g id="color">
    <rect x="6" y="18" width="60" height="36" fill="#61b2e4"/>
    <rect x="6" y="18" width="60" height="24" fill="#b1cc33"/>
    <rect x="6" y="18" width="60" height="12" fill="#e67a94"/>
  </g>
  <g id="line">
    <rect x="5" y="17" width="62" height="38" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
` }
  )
}
export default EmojiPolysexual
