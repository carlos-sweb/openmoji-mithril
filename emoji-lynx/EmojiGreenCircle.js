import _attrs from '../default_attrs.js'
import { lynxIcon } from '../lynx_svg.js'

/** Mithril-lynx component for the OpenMoji "green circle" (color) [1F7E2]. */
const EmojiGreenCircle = lynxIcon(`
  <g id="color">
    <circle cx="36" cy="36" r="28" fill="#b1cc33"/>
  </g>
  <g id="line">
    <circle cx="36" cy="36" r="28" fill="none" stroke="#000" stroke-linejoin="round" stroke-width="2"/>
  </g>
`, _attrs, 72)
export default EmojiGreenCircle
