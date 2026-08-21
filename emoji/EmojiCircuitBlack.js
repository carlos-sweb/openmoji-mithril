import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "circuit" (black) [E1D7]. */
const EmojiCircuitBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="line">
    <polyline fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" points="16,28.2498 16,15.9998 56,15.9998 56,30.4998"/>
    <polyline fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" points="56,37.9998 56,55.9998 16,55.9998 16,43.7498"/>
    <polyline fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" points="20,28.2498 20,19.9998 52,19.9998 52,33.9998"/>
    <polyline fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" points="52,41.4998 52,51.9998 20,51.9998 20,43.7498"/>
    <circle cx="18" cy="36" r="8" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <line x1="23.6569" x2="12.3431" y1="30.3431" y2="41.6569" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <line x1="12.3431" x2="23.6569" y1="30.3431" y2="41.6569" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <line x1="49" x2="59" y1="34" y2="34" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <line x1="44" x2="64" y1="38" y2="38" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
  </g>
`)
  )
}
export default EmojiCircuitBlack
