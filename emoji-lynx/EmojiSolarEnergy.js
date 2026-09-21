import _attrs from '../default_attrs.js'
import { lynxIcon } from '../lynx_svg.js'

/** Mithril-lynx component for the OpenMoji "solar energy" (color) [E2CD]. */
const EmojiSolarEnergy = lynxIcon(`
  <g id="color">
    <polygon fill="#92d3f5" points="16 36 35 36 51 56 31 56 16 36"/>
    <circle cx="48" cy="24" r="8" fill="#fcea2b"/>
  </g>
  <g id="line">
    <polygon fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="16 36 35.543 36 52 56 31.429 56 16 36"/>
    <polyline fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="17 43 17 56 27 56"/>
    <line x1="24" x2="43" y1="46" y2="46" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <line x1="26" x2="42" y1="36" y2="56" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <circle cx="48" cy="24" r="8" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
`, _attrs, 72)
export default EmojiSolarEnergy
