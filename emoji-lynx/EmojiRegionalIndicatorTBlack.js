import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the OpenMoji "regional indicator T" (black) [1F1F9]. */
const EmojiRegionalIndicatorTBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}), content: `
  <g id="line">
    <g id="line-2">
      <circle cx="36" cy="36" r="28" fill="none" stroke="#000" stroke-linejoin="round" stroke-width="2"/>
    </g>
    <path stroke="#000" stroke-linejoin="round" stroke-width="2" d="m44,21h-16c-.5527,0-1,.4478-1,1s.4473,1,1,1h7v27c0,.5522.4473,1,1,1s1-.4478,1-1v-27h7c.5527,0,1-.4478,1-1s-.4473-1-1-1Z"/>
  </g>
` }
  )
}
export default EmojiRegionalIndicatorTBlack
