import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "face with crossed-out eyes" (black) [1F635]. */
const EmojiFaceWithCrossedOutEyesBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="line">
    <circle cx="36" cy="36" r="23" fill="none" stroke="#000000" stroke-miterlimit="10" stroke-width="2"/>
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M29.5,43c1.2841-0.6376,3.9847-1.0308,6.8421-0.9981c2.6235,0.03,4.9897,0.4146,6.1579,0.9981"/>
    <line x1="47.5" x2="42.5" y1="29" y2="33" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <line x1="42.5" x2="47.5" y1="29" y2="33" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <line x1="29.5" x2="24.5" y1="29" y2="33" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <line x1="24.5" x2="29.5" y1="29" y2="33" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
  </g>
`)
  )
}
export default EmojiFaceWithCrossedOutEyesBlack
