import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "wine glass" (black) [1F377]. */
const EmojiWineGlassBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="line">
    <line x1="20" x2="52" y1="67" y2="67" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <line x1="36" x2="36" y1="44" y2="67" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m56,24c0,3.265-.7824,6.3473-2.1699,9.0696-3.3065,6.4874-10.0494,10.9304-17.8301,10.9304-11.0457,0-20-8.9543-20-20"/>
    <line x1="16" x2="16" y1="5" y2="24" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <line x1="56" x2="56" y1="5" y2="24" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
`)
  )
}
export default EmojiWineGlassBlack
