import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the OpenMoji "mantelpiece clock" (black) [1F570]. */
const EmojiMantelpieceClockBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}), content: `
  <g id="line">
    <circle cx="35.8447" cy="30.9509" r="16.6904" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.3021"/>
    <circle cx="35.8447" cy="30.9509" r="16.6904" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.3021"/>
    <rect x="6" y="50.8667" width="59.75" height="4.4508" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.0923"/>
  </g>
` }
  )
}
export default EmojiMantelpieceClockBlack
