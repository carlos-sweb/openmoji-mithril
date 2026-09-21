import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the OpenMoji "roasted coffee bean" (black) [E0C6]. */
const EmojiRoastedCoffeeBeanBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}), content: `
  <g id="line">
    <ellipse cx="36" cy="36" rx="19" ry="28" fill="none" stroke="#000" stroke-width="2"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m36,36s-3-5.5964-3-12.5,3-12.5,3-12.5"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m36,36s3,5.5964,3,12.5-3,12.5-3,12.5"/>
  </g>
` }
  )
}
export default EmojiRoastedCoffeeBeanBlack
