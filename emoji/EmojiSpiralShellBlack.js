import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "spiral shell" (black) [1F41A]. */
const EmojiSpiralShellBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="line">
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M30,31c0,0-2,23,7,26s14-34,6-34c-6.2075,0-7-1-11.7099-0.3422C29.9197,22.8491,27.9837,22.7602,26,24c-8,5,5,29,8,31"/>
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M42,22c0,0,1-3-2-3s-7,0-7,0s-2.1402-0.4205-1,3"/>
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M34,18c3.2-5.3333,5.1333,0.3333,5,0"/>
  </g>
`)
  )
}
export default EmojiSpiralShellBlack
