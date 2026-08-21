import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "mark" (black) [E240]. */
const EmojiMarkBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="line">
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m52.0844,28.991c.9115,2.1542,1.4156,4.5227,1.4156,7.009,0,9.9411-8.0589,18-18,18s-18-8.0589-18-18,8.0589-18,18-18c3.2668,0,6.3303.8703,8.9714,2.3916"/>
    <polygon fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="54.5737 12.7708 35.5 40.3333 25.1667 30.3333 25.1667 35.25 35.875 45.75 54.5737 18.625 54.5737 12.7708"/>
  </g>
`)
  )
}
export default EmojiMarkBlack
