import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the OpenMoji "multiply" (black) [2716]. */
const EmojiMultiplyBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}), content: `
  <g id="line">
    <polygon fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" points="30,36 18,24 24,18 36,30 48,18 54,24 42,36 54,48 48,54 36,42 24,54 18,48"/>
  </g>
` }
  )
}
export default EmojiMultiplyBlack
