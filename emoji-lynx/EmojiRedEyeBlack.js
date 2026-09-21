import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the OpenMoji "red eye" (black) [25C9-FE0F-200D-1F534]. */
const EmojiRedEyeBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}), content: `
  <g id="line">
    <circle cx="36" cy="36" r="28" fill="none" stroke="#000" stroke-width="2"/>
  </g>
` }
  )
}
export default EmojiRedEyeBlack
