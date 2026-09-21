import _attrs from '../default_attrs.js'
import { lynxIcon } from '../lynx_svg.js'

/** Mithril-lynx component for the OpenMoji "bari flag" (color) [1F3F4-E0069-E0074-E0062-E0061-E007F]. */
const EmojiBariFlag = lynxIcon(`
  <g id="color">
    <rect x="5" y="17" width="62" height="38" fill="#92d3f5"/>
    <polygon fill="#fff" points="6,18 6,54 36,36"/>
    <polygon fill="#fff" points="66,18 66,54 36,36"/>
  </g>
  <g id="line">
    <rect x="5" y="17" width="62" height="38" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
`, _attrs, 72)
export default EmojiBariFlag
