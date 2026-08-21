import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "regional indicator L" (black) [1F1F1]. */
const EmojiRegionalIndicatorLBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="line">
    <g id="line-2">
      <circle cx="36" cy="36" r="28" fill="none" stroke="#000" stroke-linejoin="round" stroke-width="2"/>
    </g>
    <path stroke="#000" stroke-linejoin="round" stroke-width="2" d="m43,49.0122h-11v-27c0-.5522-.4473-1-1-1s-1,.4478-1,1v28c0,.5522.4473,1,1,1h12c.5527,0,1-.4478,1-1s-.4473-1-1-1Z"/>
  </g>
`)
  )
}
export default EmojiRegionalIndicatorLBlack
