import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the OpenMoji "plus" (color) [2795]. */
const EmojiPlus = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}), content: `
  <g id="color">
    <polygon fill="#D0CFCE" stroke="none" points="31,31 31,13 41,13 41,31 59,31 59,41 41,41 41,59 31,59 31,41 13,41 13,31"/>
  </g>
  <g id="hair"/>
  <g id="skin"/>
  <g id="skin-shadow"/>
  <g id="line">
    <polygon fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" points="31,31 31,13 41,13 41,31 59,31 59,41 41,41 41,59 31,59 31,41 13,41 13,31"/>
  </g>
` }
  )
}
export default EmojiPlus
