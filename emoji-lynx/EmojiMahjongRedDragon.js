import _attrs from '../default_attrs.js'
import { lynxIcon } from '../lynx_svg.js'

/** Mithril-lynx component for the OpenMoji "mahjong red dragon" (color) [1F004]. */
const EmojiMahjongRedDragon = lynxIcon(`
  <g id="color">
    <rect x="17" y="8" width="38" height="56" fill="#fff"/>
  </g>
  <g id="line">
    <rect x="17" y="8" width="38" height="56" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <line x1="36" x2="36" y1="16" y2="56" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <rect x="24" y="24" width="24" height="12" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
  <g id="color-foreground">
    <line x1="36" x2="36" y1="16" y2="56" fill="none" stroke="#d22f27" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <rect x="24" y="24" width="24" height="12" fill="none" stroke="#d22f27" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
`, _attrs, 72)
export default EmojiMahjongRedDragon
