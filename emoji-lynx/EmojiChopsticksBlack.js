import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the OpenMoji "chopsticks" (black) [1F962]. */
const EmojiChopsticksBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}), content: `
  <g id="line">
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M53.7603,58.9583L18.829,20.2998c-0.781-0.781-2.0474-0.781-2.8284,0c-0.781,0.781-0.781,2.0474,0,2.8284z"/>
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M56.5852,57.4276L30.512,12.3181c-0.6004-0.9271-1.8388-1.192-2.7659-0.5916s-1.192,1.8388-0.5916,2.7659z"/>
  </g>
` }
  )
}
export default EmojiChopsticksBlack
