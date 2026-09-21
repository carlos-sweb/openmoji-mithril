import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the OpenMoji "twelve-thirty" (black) [1F567]. */
const EmojiTwelveThirtyBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}), content: `
  <g id="line" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2">
    <circle cx="35.958" cy="35.99" r="23"/>
    <line x1="36" x2="36" y1="36.062" y2="53.062"/>
    <line x1="36.033" x2="38.88" y1="35.816" y2="25.191"/>
  </g>
` }
  )
}
export default EmojiTwelveThirtyBlack
