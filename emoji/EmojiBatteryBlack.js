import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "battery" (black) [1F50B]. */
const EmojiBatteryBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="line">
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M61.081,31.3475v-7.159 c0-0.5523-0.4477-1-1-1H6.772c-0.5523,0-1,0.4477-1,1v25.016c0,0.5523,0.4477,1,1,1h53.313c0.5523,0,1-0.4477,1-1v-6.674h5.143 v-11.183H61.081z"/>
    <rect x="11" y="27.3595" width="34.239" height="19.007" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
`)
  )
}
export default EmojiBatteryBlack
