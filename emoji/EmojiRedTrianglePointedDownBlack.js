import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "red triangle pointed down" (black) [1F53B]. */
const EmojiRedTrianglePointedDownBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="line">
    <path fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2" d="m38.45 57.15 22.23-38.5c1.091-1.89-0.2728-4.252-2.455-4.252h-44.45c-2.182 0-3.546 2.362-2.455 4.252l22.23 38.5c1.091 1.89 3.819 1.89 4.91 0z"/>
  </g>
`)
  )
}
export default EmojiRedTrianglePointedDownBlack
