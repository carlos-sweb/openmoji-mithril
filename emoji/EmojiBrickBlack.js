import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "brick" (black) [1F9F1]. */
const EmojiBrickBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="line">
    <g>
      <line x1="32" x2="32" y1="36" y2="27" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
      <line x1="54" x2="15" y1="27" y2="27" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
      <line x1="40" x2="40" y1="19" y2="27" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
      <line x1="58" x2="19" y1="36" y2="36" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
      <line x1="40" x2="40" y1="45" y2="36" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
      <line x1="52" x2="19" y1="45" y2="45" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
      <line x1="32" x2="32" y1="53" y2="45" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
      <line x1="47" x2="20" y1="18" y2="18" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
      <line x1="23" x2="23" y1="18" y2="27" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
      <line x1="23" x2="23" y1="45" y2="41" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
      <line x1="32" x2="32" y1="36" y2="27" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
      <line x1="49" x2="49" y1="46" y2="51" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
      <line x1="44" x2="26" y1="54" y2="54" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
      <line x1="57" x2="57" y1="40" y2="36" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    </g>
  </g>
`)
  )
}
export default EmojiBrickBlack
