import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the OpenMoji "small orange diamond" (black) [1F538]. */
const EmojiSmallOrangeDiamondBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}), content: `
  <g id="line">
    <rect x="22.7114" y="22.2114" width="27.5772" height="27.5772" transform="translate(-14.7652 36.3536) rotate(-45)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
` }
  )
}
export default EmojiSmallOrangeDiamondBlack
