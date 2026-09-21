import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the OpenMoji "left right black arrow" (black) [2B0C]. */
const EmojiLeftRightBlackArrowBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}), content: `
  <g id="line">
    <polygon id="_2" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="48.341 19.828 44.641 23.928 53.841 32.528 17.54 32.528 26.74 23.928 23.04 19.828 6.34 35.628 23.04 51.428 26.74 47.328 17.54 38.728 53.841 38.728 44.641 47.328 48.341 51.428 65.041 35.628 48.341 19.828"/>
  </g>
` }
  )
}
export default EmojiLeftRightBlackArrowBlack
