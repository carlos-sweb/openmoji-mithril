import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the OpenMoji "rainbow flag" (color) [1F3F3-FE0F-200D-1F308]. */
const EmojiRainbowFlag = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}), content: `
  <g id="color">
    <rect x="5" y="48" width="62" height="6.2" fill="#b399c8" stroke-width="0"/>
    <rect x="5" y="42" width="62" height="6" fill="#92d3f5" stroke-width="0"/>
    <rect x="5" y="36" width="62" height="6" fill="#b1cc33" stroke-width="0"/>
    <rect x="5" y="30" width="62" height="6" fill="#fcea2b" stroke-width="0"/>
    <rect x="5" y="24" width="62" height="6" fill="#f4aa41" stroke-width="0"/>
    <rect x="5" y="17.8" width="62" height="6.2" fill="#ea5a47" stroke-width="0"/>
  </g>
  <g id="hair"/>
  <g id="skin"/>
  <g id="skin-shadow"/>
  <g id="line">
    <rect x="5" y="17" width="62" height="38" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
` }
  )
}
export default EmojiRainbowFlag
