import _attrs from '../default_attrs.js'
import { lynxIcon } from '../lynx_svg.js'

/** Mithril-lynx component for the OpenMoji "overlapping black squares" (black) [2BBC]. */
const EmojiOverlappingBlackSquaresBlack = lynxIcon(`
  <g id="line-supplement">
    <path fill="#000" stroke="#000" stroke-width="2" d="M44 28H12V60H44V28Z"/>
    <path fill="#000" d="M60 12H28V44H60V12Z"/>
  </g>
  <g id="line">
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M24.5 28H12V60H44V48"/>
    <path fill="none" stroke="#000" stroke-linejoin="round" stroke-width="2" d="M60 12H28V44H60V12Z"/>
  </g>
`, _attrs, 72)
export default EmojiOverlappingBlackSquaresBlack
