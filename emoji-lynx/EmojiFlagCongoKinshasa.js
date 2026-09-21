import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the OpenMoji "flag: Congo - Kinshasa" (color) [1F1E8-1F1E9]. */
const EmojiFlagCongoKinshasa = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}), content: `
  <g id="color">
    <rect x="5" y="17" width="62" height="38" fill="#61b2e4"/>
    <polygon fill="#d22f27" stroke="#f1b31c" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="67 24 67 17 59 17 5 48 5 55 13 55 67 24"/>
    <polygon fill="#f1b31c" stroke="#f1b31c" stroke-linecap="round" stroke-linejoin="round" points="12.348 30.583 14.671 23.583 16.674 30.476 11.11 26.322 18.11 26.15 12.348 30.583"/>
  </g>
  <g id="line">
    <rect x="5" y="17" width="62" height="38" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
` }
  )
}
export default EmojiFlagCongoKinshasa
