import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "bisexual" (color) [E423]. */
const EmojiBisexual = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="color">
    <rect x="6" y="18" width="60" height="36" fill="#61b2e4"/>
    <rect x="6" y="18" width="60" height="21.6" fill="#8967aa"/>
    <rect x="6" y="18" width="60" height="14.4" fill="#e67a94"/>
  </g>
  <g id="line">
    <rect x="5" y="17" width="62" height="38" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
`)
  )
}
export default EmojiBisexual
