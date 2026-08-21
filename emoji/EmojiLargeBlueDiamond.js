import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "large blue diamond" (color) [1F537]. */
const EmojiLargeBlueDiamond = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="color">
    <rect x="19.1581" y="18.3756" width="34.2487" height="34.2487" transform="translate(-14.4754 36.0533) rotate(-45)" fill="#92d3f5"/>
  </g>
  <g id="line">
    <rect x="19.1581" y="18.3756" width="34.2487" height="34.2487" transform="translate(-14.4754 36.0533) rotate(-45)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
`)
  )
}
export default EmojiLargeBlueDiamond
