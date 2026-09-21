import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the OpenMoji "great pyramid of giza" (black) [E20F]. */
const EmojiGreatPyramidOfGizaBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}), content: `
  <g id="line">
    <polyline fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="44.586 41.219 50.363 34.326 57.105 55"/>
    <polygon fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="69.527 55 50.363 34.326 57.105 55 59.945 55 61.61 55 69.527 55"/>
    <polygon fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="2.473 55 25.968 26.963 35.111 55 2.473 55"/>
    <polyline fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="39.449 55 51.957 55 25.968 26.963"/>
  </g>
` }
  )
}
export default EmojiGreatPyramidOfGizaBlack
