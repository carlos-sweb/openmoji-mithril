import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the OpenMoji "flag: Palestinian Territories" (color) [1F1F5-1F1F8]. */
const EmojiFlagPalestinianTerritories = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}), content: `
  <g id="color">
    <rect x="5" y="17" width="62" height="38" fill="#fff"/>
    <rect x="5" y="42" width="62" height="13" fill="#5c9e31"/>
    <rect x="5" y="17" width="62" height="13"/>
    <polygon fill="#d22f27" points="26 36 5 55 5 17 26 36"/>
  </g>
  <g id="line">
    <rect x="5" y="17" width="62" height="38" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
` }
  )
}
export default EmojiFlagPalestinianTerritories
