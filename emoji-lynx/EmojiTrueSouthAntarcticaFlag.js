import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the OpenMoji "true south (antarctica) flag" (color) [1F3F3-FE0F-200D-1F9CA-200D-1F48E]. */
const EmojiTrueSouthAntarcticaFlag = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}), content: `
  <g id="color">
    <rect x="5" y="17.08" width="62" height="38" fill="#FFF"/>
    <path fill="#1E50A0" stroke="#1E50A0" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m 5 17.08 l 62 0 l 0 19 l -20.667 0 l -10.333 15.111 l -10.333 -15.111 l -20.667 0 l 0 -19"/>
    <path fill="#FFF" stroke="#FFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m 36 21.468 l 9.833 15.111 l -9.833 3.778 l -9.833 -3.778 l 9.833 -15.111"/>
  </g>
  <g id="line">
    <rect x="5" y="17" width="62" height="38" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
` }
  )
}
export default EmojiTrueSouthAntarcticaFlag
