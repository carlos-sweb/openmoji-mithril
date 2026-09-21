import _attrs from '../default_attrs.js'
import { lynxIcon } from '../lynx_svg.js'

/** Mithril-lynx component for the OpenMoji "berber flag" (color) [1F3F3-200D-1F7E6-200D-1F7E9-200D-1F7E8]. */
const EmojiBerberFlag = lynxIcon(`
  <g id="color">
    <rect x="5" y="17" width="62" height="38" fill="#fcea2b"/>
    <rect x="5" y="30" width="62" height="12" fill="#b1cc33"/>
    <rect x="5" y="17" width="62" height="13" fill="#61b2e4"/>
    <line x1="36" x2="36" y1="24" y2="48" fill="none" stroke="#d22f27" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <path fill="none" stroke="#d22f27" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M36,39.5625c-6.4095,0-12.0057,3.3935-15,8.4375"/>
    <path fill="none" stroke="#d22f27" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M36,39.5625c6.4095,0,12.0057,3.3935,15,8.4375"/>
    <path fill="none" stroke="#d22f27" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M36,32.4375c-6.4095,0-12.0057-3.3935-15-8.4375"/>
    <path fill="none" stroke="#d22f27" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M36,32.4375c6.4095,0,12.0057-3.3935,15-8.4375"/>
  </g>
  <g id="skin"/>
  <g id="skin-shadow"/>
  <g id="hair"/>
  <g id="line">
    <rect x="5" y="17" width="62" height="38" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
`, _attrs, 72)
export default EmojiBerberFlag
