import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the OpenMoji "small blue diamond" (black) [1F539]. */
const EmojiSmallBlueDiamondBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}), content: `
  <g id="line">
    <rect x="21.7114" y="22.2114" width="27.5772" height="27.5772" transform="translate(-15.0581 35.6464) rotate(-45)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
` }
  )
}
export default EmojiSmallBlueDiamondBlack
