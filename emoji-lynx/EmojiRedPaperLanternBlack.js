import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the OpenMoji "red paper lantern" (black) [1F3EE]. */
const EmojiRedPaperLanternBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}), content: `
  <g id="line">
    <polyline fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="26.84 7.481 26.84 4.972 44.146 4.972 44.146 7.481"/>
    <polyline fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="44.146 64.657 44.146 67.05 26.84 67.05 26.84 64.657"/>
    <rect x="19.125" y="9.871" rx="11" width="32.7367" height="52.2643" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <g>
      <rect x="31.3396" y="31.6894" width="8.3074" height="8.9339" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
      <rect x="31.3396" y="42.5391" width="8.3074" height="8.9339" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
      <rect x="31.3396" y="20.8397" width="8.3074" height="8.9339" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </g>
  </g>
` }
  )
}
export default EmojiRedPaperLanternBlack
