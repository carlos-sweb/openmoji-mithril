import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the OpenMoji "filter" (black) [E257]. */
const EmojiFilterBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}), content: `
  <g id="line">
    <polyline fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" points="36,10.9792 11,10.9792 11,16.0207 31.5,34.25 31.5,56.021 40.5,60.9792 40.5,34.25 61,16.0208 61,10.9792 36,10.9792"/>
  </g>
` }
  )
}
export default EmojiFilterBlack
