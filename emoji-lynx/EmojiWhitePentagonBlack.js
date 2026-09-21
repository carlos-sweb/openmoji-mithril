import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the OpenMoji "white pentagon" (black) [2B20]. */
const EmojiWhitePentagonBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}), content: `
  <g id="line">
    <path fill="none" stroke="#000000" stroke-width="2" d="M34.824,10.451 C35.525,9.942 36.475,9.942 37.176,10.451 L62.405,28.781 C63.106,29.291 63.399,30.193 63.132,31.017 L53.495,60.676 C53.227,61.5 52.459,62.058 51.593,62.058 L20.407,62.058 C19.541,62.058 18.773,61.5 18.505,60.676 L8.868,31.017 C8.601,30.193 8.894,29.291 9.595,28.781 L34.824,10.451 z"/>
  </g>
` }
  )
}
export default EmojiWhitePentagonBlack
