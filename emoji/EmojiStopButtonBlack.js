import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "stop button" (black) [23F9]. */
const EmojiStopButtonBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="line">
    <path d="m49.2614,18c2.6129,0,4.7386,2.1257,4.7386,4.7386v26.5229c0,2.6128-2.1257,4.7385-4.7386,4.7385h-26.5228c-2.6129,0-4.7386-2.1257-4.7386-4.7386v-26.5228c0-2.6129,2.1257-4.7386,4.7386-4.7386h26.5228m0-2h-26.5228c-3.7216,0-6.7386,3.017-6.7386,6.7386v26.5229c0,3.7215,3.017,6.7385,6.7386,6.7385h26.5229c3.7215,0,6.7385-3.017,6.7385-6.7386v-26.5228c0-3.7216-3.017-6.7386-6.7386-6.7386h0Z"/>
  </g>
`)
  )
}
export default EmojiStopButtonBlack
