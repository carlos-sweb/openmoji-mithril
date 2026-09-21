import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the OpenMoji "last quarter moon" (black) [1F317]. */
const EmojiLastQuarterMoonBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}), content: `
  <g id="line-supplement">
    <path fill="#000000" stroke="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M64,36A28,28,0,0,0,36,8V64A28,28,0,0,0,64,36Z"/>
  </g>
  <g id="line">
    <circle cx="36" cy="36" r="28" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8,36A28,28,0,0,0,36,64V8A28,28,0,0,0,8,36Z"/>
  </g>
` }
  )
}
export default EmojiLastQuarterMoonBlack
