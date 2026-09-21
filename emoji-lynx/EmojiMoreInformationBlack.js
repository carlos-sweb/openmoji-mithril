import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the OpenMoji "more information" (black) [E264]. */
const EmojiMoreInformationBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}), content: `
  <g id="line">
    <polygon fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" points="56,32.8 39.2,32.8 39.2,16 32.8,16 32.8,32.8 16,32.8 16,39.2 32.8,39.2 32.8,56 39.2,56 39.2,39.2 56,39.2"/>
  </g>
` }
  )
}
export default EmojiMoreInformationBlack
