import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "female sign" (black) [2640]. */
const EmojiFemaleSignBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="line">
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m38.5001,40.7611v7.1492l1.4999.0002h6v5h-6l-1.4999-.0002v9.0445l-4.9974-.0443v-8.9998l-1.5027-.0002h-6v-5h6l1.5027.0003v-7.1515c-7.0893-1.1943-12.5027-7.362-12.5027-14.7909,0-8.2843,6.7157-15,15-15s15,6.7157,15,15c0,7.3797-5.3292,13.5147-12.3491,14.7665-.0504.009-.1009.0177-.1515.0262"/>
    <circle cx="36" cy="25.9684" r="10" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
`)
  )
}
export default EmojiFemaleSignBlack
