import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the OpenMoji "heavy equals sign" (color) [1F7F0]. */
const EmojiHeavyEqualsSign = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}), content: `
  <g id="color">
    <g id="line-2">
      <polygon fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="17.068 33.391 54.9463 33.3312 54.9463 38.4109 17.068 38.5603 17.068 33.391"/>
    </g>
    <g id="color-2">
      <polyline fill="#d0cfce" points="54.9391 32.334 17.0608 32.334 17.0608 22.429 54.9321 22.429"/>
    </g>
    <g id="color-3">
      <polyline fill="#d0cfce" points="54.9391 49.406 17.0608 49.406 17.0608 39.501 54.9321 39.501"/>
    </g>
  </g>
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
export default EmojiHeavyEqualsSign
