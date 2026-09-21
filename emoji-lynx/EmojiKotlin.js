import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the OpenMoji "kotlin" (color) [E04E]. */
const EmojiKotlin = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}), content: `
  <g id="color">
    <path fill="#8967aa" d="m11.57 11.58v48.84h48.86l-24.94-24.78 24.94-24.06z"/>
  </g>
  <g id="line" fill="none" stroke="#000" stroke-linejoin="round">
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m11.57 11.58v48.84h48.86l-24.94-24.78 24.94-24.06z"/>
  </g>
` }
  )
}
export default EmojiKotlin
