import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "ballot box with ballot" (black) [1F5F3]. */
const EmojiBallotBoxWithBallotBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="line">
    <polyline fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.0001" points="43.7058 31.0959 61.856 31.0959 61.856 61.0377"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.0001" d="m10.134,61.0377v-29.9418h13.5345"/>
    <polyline fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.0001" points="37.2631 36.8415 23.7767 31.3123 33.7653 6.9477 50.4851 13.7991 41.1095 36.6612"/>
    <line x1="21.91" x2="50.1" y1="36.92" y2="36.92" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
`)
  )
}
export default EmojiBallotBoxWithBallotBlack
