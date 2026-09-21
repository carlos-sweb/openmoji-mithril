import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the OpenMoji "lime" (black) [1F34B-200D-1F7E9]. */
const EmojiLimeBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}), content: `
  <g id="line">
    <path fill="none" stroke="#000" stroke-linejoin="round" stroke-width="2" d="M56.4437,35.2005c-.1519,18.0271-18.2015,23.8475-33.1168,13.7215-14.9152-10.126-2.7472-30.0242-2.7472-30.0242,0,0-11.2102,24.9065,6.7555,29.0579,19.8724,4.5921,29.1338-15.7551,29.1085-12.7552Z"/>
  </g>
` }
  )
}
export default EmojiLimeBlack
