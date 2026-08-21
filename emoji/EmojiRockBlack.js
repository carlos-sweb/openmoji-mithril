import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "rock" (black) [1FAA8]. */
const EmojiRockBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="line">
    <polyline fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="45.797 23.608 54.99 35.597 56.128 47.239 54.469 56 26.692 56 16 32.86 16.813 28.219 19.252 25.222 37.558 16 41.377 16.807 44.02 20.917 39.008 24.27"/>
    <polyline fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="47.359 56 40.298 45.797 16.813 28.219"/>
    <polyline fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="54.99 35.597 51.095 43.659 40.298 45.797"/>
  </g>
`)
  )
}
export default EmojiRockBlack
