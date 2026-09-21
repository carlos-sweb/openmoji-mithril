import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the OpenMoji "polyamory" (color) [E42B]. */
const EmojiPolyamory = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}), content: `
  <g id="color">
    <rect x="6" y="18" width="60" height="36" fill="#8967aa"/>
    <rect x="6" y="18" width="60" height="24" fill="#e67a94"/>
    <rect x="6" y="18" width="60" height="12" fill="#61b2e4"/>
    <path fill="#fff" d="m6 18v36l24-24-12-12h-12z"/>
    <path fill="#fcea2b" d="m14 39c-2.761 0-5-2.239-5-5 0-1.636 0.7858-3.088 2-4-1.214-0.9122-2-2.364-2-4 0-2.761 2.239-5 5-5 1.381 0 2.63 0.56 3.536 1.464l7.536 7.536-7.536 7.536c-0.9052 0.9044-2.155 1.464-3.536 1.464z"/>
  </g>
  <g id="line">
    <rect x="5" y="17" width="62" height="38" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
` }
  )
}
export default EmojiPolyamory
