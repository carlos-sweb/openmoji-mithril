import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the OpenMoji "black square button" (black) [1F532]. */
const EmojiBlackSquareButtonBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}), content: `
  <g id="line-supplement">
    <path fill="#000" fill-rule="evenodd" d="M16 16 H56V56H16V16Z M25 26 V47H46V26H25Z" clip-rule="evenodd"/>
  </g>
  <g id="line">
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M56 16H16V56H56V16Z"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M46 26H25V47H46V26Z"/>
  </g>
` }
  )
}
export default EmojiBlackSquareButtonBlack
