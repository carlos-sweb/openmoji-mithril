import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "flag: Türkiye" (color) [1F1F9-1F1F7]. */
const EmojiFlagTuRkiye = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="color">
    <rect x="5" y="17" width="62" height="38" fill="#d22f27"/>
    <path fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="m40.64 33.05s3.052 4.019 3.052 4.019l-4.934-1.532 4.932-1.541s-3.046 4.025-3.046 4.025l-0.003536-4.972"/>
    <path fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="m31.29 44.64a8.643 8.643 0 1 1 3.958-16.34 11 11 0 1 0 0 15.38 8.715 8.715 0 0 1-3.958 0.9507z"/>
  </g>
  <g id="line">
    <rect x="5" y="17" width="62" height="38" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
`)
  )
}
export default EmojiFlagTuRkiye
