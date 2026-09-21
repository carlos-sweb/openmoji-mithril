import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the OpenMoji "large blue diamond" (black) [1F537]. */
const EmojiLargeBlueDiamondBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}), content: `
  <g id="line">
    <rect x="19.1581" y="18.3756" width="34.2487" height="34.2487" transform="translate(-14.4754 36.0533) rotate(-45)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
` }
  )
}
export default EmojiLargeBlueDiamondBlack
