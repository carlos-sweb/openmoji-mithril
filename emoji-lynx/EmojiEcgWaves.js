import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the OpenMoji "ecg waves" (color) [E308]. */
const EmojiEcgWaves = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}), content: `
  <g id="color"/>
  <g id="line">
    <polyline fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="11 36.873 20.227 36.873 25.713 29.641 30.95 43.107 36.686 27.397 42.047 44.603 48.157 36.873 61 36.873"/>
  </g>
` }
  )
}
export default EmojiEcgWaves
