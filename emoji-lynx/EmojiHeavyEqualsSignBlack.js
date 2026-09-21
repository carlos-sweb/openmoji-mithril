import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the OpenMoji "heavy equals sign" (black) [1F7F0]. */
const EmojiHeavyEqualsSignBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}), content: `
  <g id="line">
    <g id="line-2-2">
      <rect x="17.0608" y="22.3522" width="37.8783" height="10.2956" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    </g>
    <g id="line-3">
      <rect x="17.0608" y="39.3522" width="37.8783" height="10.2956" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    </g>
  </g>
` }
  )
}
export default EmojiHeavyEqualsSignBlack
