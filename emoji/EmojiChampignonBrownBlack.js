import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "champignon brown" (black) [E0C8]. */
const EmojiChampignonBrownBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="line">
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M27.1284,51.5319v8.0389s-.1171,1.358,2.5264,1.358H41.4242s2.2545.3973,2.2545-1.72V51.5318"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M61,38.7581c0,8.8366-11.1929,9-25,9s-25-.1634-25-9,11.1929-23,25-23S61,29.9215,61,38.7581Z"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M61,38.7581c0,8.8366-11.1929,9-25,9s-25-.1634-25-9,11.1929-23,25-23S61,29.9215,61,38.7581Z"/>
  </g>
`)
  )
}
export default EmojiChampignonBrownBlack
