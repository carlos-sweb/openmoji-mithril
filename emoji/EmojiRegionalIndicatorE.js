import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "regional indicator E" (color) [1F1EA]. */
const EmojiRegionalIndicatorE = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="color">
    <circle cx="36" cy="36" r="28" fill="#fff"/>
  </g>
  <g id="line">
    <g id="line-2">
      <circle cx="36" cy="36" r="28" fill="none" stroke="#000" stroke-linejoin="round" stroke-width="2"/>
    </g>
    <path stroke="#000" stroke-linejoin="round" stroke-width="2" d="m45,23c.5522,0,1-.4478,1-1s-.4478-1-1-1h-16c-.5522,0-1,.4478-1,1v28c0,.5522.4478,1,1,1h16c.5522,0,1-.4478,1-1s-.4478-1-1-1h-15v-12h11c.5522,0,1-.4478,1-1s-.4478-1-1-1h-11v-12h15Z"/>
  </g>
`)
  )
}
export default EmojiRegionalIndicatorE
