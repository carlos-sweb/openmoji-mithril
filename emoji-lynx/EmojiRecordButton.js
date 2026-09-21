import _attrs from '../default_attrs.js'
import { lynxIcon } from '../lynx_svg.js'

/** Mithril-lynx component for the OpenMoji "record button" (color) [23FA]. */
const EmojiRecordButton = lynxIcon(`
  <g id="color">
    <circle cx="36" cy="36" r="19.0492" fill="#fff"/>
  </g>
  <g id="line">
    <circle cx="36" cy="36" r="20" fill="none" stroke="#000" stroke-linejoin="round" stroke-width="2"/>
    <circle cx="36" cy="36" r="7"/>
  </g>
  <g id="color-foreground">
    <circle cx="36" cy="36" r="7" fill="#d22f27"/>
  </g>
`, _attrs, 72)
export default EmojiRecordButton
