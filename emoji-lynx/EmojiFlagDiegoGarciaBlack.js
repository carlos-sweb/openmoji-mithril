import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the OpenMoji "flag: Diego Garcia" (black) [1F1E9-1F1EC]. */
const EmojiFlagDiegoGarciaBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}), content: `
  <g id="line">
    <rect x="5.1969" y="17.2454" width="61.6062" height="37.7586" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.9873"/>
  </g>
` }
  )
}
export default EmojiFlagDiegoGarciaBlack
