import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the OpenMoji "large orange diamond" (color) [1F536]. */
const EmojiLargeOrangeDiamond = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}), content: `
  <g id="color">
    <rect x="18.34" y="18.3" width="35.32" height="35.32" transform="translate(35.97 -14.92) rotate(45)" fill="#e27022"/>
  </g>
  <g id="line">
    <rect x="18.34" y="18.3" width="35.32" height="35.32" transform="translate(35.97 -14.92) rotate(45)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
` }
  )
}
export default EmojiLargeOrangeDiamond
