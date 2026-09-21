import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the OpenMoji "flag: Martinique" (color) [1F1F2-1F1F6]. */
const EmojiFlagMartinique = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}), content: `
  <g id="color">
    <rect x="5" y="17" width="62" height="38" fill="#5C9E31"/>
    <rect x="5" y="36" width="62" height="19" fill="#3F3F3F"/>
    <polygon fill="#D22F27" points="26 36 5 55 5 17 26 36"/>
  </g>
  <g id="line">
    <rect x="5" y="17" width="62" height="38" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
` }
  )
}
export default EmojiFlagMartinique
