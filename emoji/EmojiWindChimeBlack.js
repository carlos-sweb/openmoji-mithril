import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "wind chime" (black) [1F390]. */
const EmojiWindChimeBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="line">
    <g>
      <path fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2" d="M55.1767,38.6265a19.6726,19.6726,0,0,0,.4943-9.2146A19.9973,19.9973,0,0,0,16,33a19.7418,19.7418,0,0,0,.8242,5.63,2.0054,2.0054,0,0,0,1.9234,1.4292H53.2521A2.0071,2.0071,0,0,0,55.1767,38.6265Z"/>
      <path fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M36,13s.7889-4.1056-1-5"/>
      <path fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2" d="M36,44s1,6-4,9"/>
      <path fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2" d="M39,41a3,3,0,0,1-6,0"/>
      <path fill="none" stroke="#000" stroke-linejoin="round" stroke-width="2" d="M16,54a14.4232,14.4232,0,0,0,14-4l4,6a14.4232,14.4232,0,0,1-14,4Z"/>
    </g>
  </g>
`)
  )
}
export default EmojiWindChimeBlack
