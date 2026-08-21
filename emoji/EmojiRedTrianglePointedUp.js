import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "red triangle pointed up" (color) [1F53A]. */
const EmojiRedTrianglePointedUp = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="color">
    <path fill="#d22f27" d="m33.55 15.25-22.23 38.5c-1.091 1.89 0.2728 4.252 2.455 4.252h44.45c2.182 0 3.546-2.362 2.455-4.252l-22.23-38.5c-1.091-1.89-3.819-1.89-4.91 0z"/>
  </g>
  <g id="line">
    <path fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2" d="m33.55 15.25-22.23 38.5c-1.091 1.89 0.2728 4.252 2.455 4.252h44.45c2.182 0 3.546-2.362 2.455-4.252l-22.23-38.5c-1.091-1.89-3.819-1.89-4.91 0z"/>
  </g>
`)
  )
}
export default EmojiRedTrianglePointedUp
