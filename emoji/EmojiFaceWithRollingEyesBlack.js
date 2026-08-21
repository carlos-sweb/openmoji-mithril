import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "face with rolling eyes" (black) [1F644]. */
const EmojiFaceWithRollingEyesBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="line">
    <circle id="SVGID_5_" cx="46.0556" cy="28" r="2.5556"/>
    <circle id="SVGID_9_" cx="26.0556" cy="28" r="2.5556"/>
    <circle cx="36" cy="36" r="23" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <circle cx="46" cy="32" r="6.5" fill="none" stroke="#000000" stroke-miterlimit="10" stroke-width="2"/>
    <circle cx="26" cy="32" r="6.5" fill="none" stroke="#000000" stroke-miterlimit="10" stroke-width="2"/>
    <line x1="31" x2="41" y1="49.4967" y2="49.4967" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
  </g>
`)
  )
}
export default EmojiFaceWithRollingEyesBlack
