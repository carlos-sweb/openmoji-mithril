import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "regional indicator J" (black) [1F1EF]. */
const EmojiRegionalIndicatorJBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="line">
    <g id="line-2">
      <circle cx="36" cy="36" r="28" fill="none" stroke="#000" stroke-linejoin="round" stroke-width="2"/>
    </g>
    <path fill="none" stroke="#000" stroke-linejoin="round" stroke-width="2" d="m44.3463,21c-.5527,0-1,.4478-1,1v18c0,4.9624-4.0371,9-9,9-2.2256,0-4.3643-.8208-6.0244-2.312-.4082-.3677-1.043-.3354-1.4121.0757s-.335,1.0435.0762,1.4126c2.0273,1.8208,4.6406,2.8237,7.3604,2.8237,6.0654,0,11-4.9346,11-11v-18c0-.5522-.4473-1-1-1Z"/>
  </g>
`)
  )
}
export default EmojiRegionalIndicatorJBlack
