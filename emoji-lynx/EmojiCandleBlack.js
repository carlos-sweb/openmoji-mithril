import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the OpenMoji "candle" (black) [1F56F]. */
const EmojiCandleBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}), content: `
  <g id="line">
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M30.9079,23.735c-0.4263-1.4112-0.7692-3.6894-0.7692-5.9495c0-4.4164,5.4684-9.482,5.4684-9.482s4.4065,4.2924,5.1651,8.5166 c0.4329,2.4099-0.1251,5.209-0.769,6.9149"/>
    <polygon fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" points="28.7763,63.6037 41.6698,63.6037 41.6698,32.5963 28.7763,32.5289"/>
    <line x1="35.3721" x2="35.3721" y1="23.7349" y2="27.7758" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
  </g>
` }
  )
}
export default EmojiCandleBlack
