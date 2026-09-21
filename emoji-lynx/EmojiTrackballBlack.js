import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the OpenMoji "trackball" (black) [1F5B2]. */
const EmojiTrackballBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}), content: `
  <g id="line">
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m40.13,62.42h-8.259c-5.9137-.0165-10.7035-4.8063-10.72-10.72v-25.31c.0165-5.9137,4.8063-10.7035,10.72-10.72h8.259c5.9137.0165,10.7035,4.8063,10.72,10.72v25.31c-.0165,5.9137-4.8063,10.7035-10.72,10.72Z"/>
    <circle cx="36" cy="30.51" r="8.902" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m36,15.1c.5005-13.15-19.03-4.582-21.79-9.568"/>
  </g>
` }
  )
}
export default EmojiTrackballBlack
