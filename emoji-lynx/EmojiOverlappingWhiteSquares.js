import _attrs from '../default_attrs.js'
import { lynxIcon } from '../lynx_svg.js'

/** Mithril-lynx component for the OpenMoji "overlapping white squares" (color) [2BBA]. */
const EmojiOverlappingWhiteSquares = lynxIcon(`
  <g id="color">
    <path fill="#fff" d="M44 28H12V60H44V28Z"/>
    <path fill="#fff" d="M60 12H28V44H60V12Z"/>
  </g>
  <g id="line">
    <path fill="none" stroke="#000" stroke-linejoin="round" stroke-width="2" d="M60 12H28V44H60V12Z"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M23.5 29H11V61H43V49"/>
  </g>
`, _attrs, 72)
export default EmojiOverlappingWhiteSquares
