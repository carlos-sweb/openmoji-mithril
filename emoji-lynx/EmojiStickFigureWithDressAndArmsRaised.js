import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the OpenMoji "stick figure with dress and arms raised" (color) [1FBC6-200D-1F457]. */
const EmojiStickFigureWithDressAndArmsRaised = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}), content: `
  <g id="color">
    <polygon fill="#fff" points="31.1073 20.3714 38.9727 20.3714 37.0269 35.0198 40.0279 62.59 30.4495 62.6174 33.4779 35.0198 31.1073 20.3714"/>
  </g>
  <g id="line">
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m29.5,63.5l3-28.5"/>
    <path fill="none" stroke="#000" stroke-width="2" d="m29.5,63.5h11.5"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m41,63.5l-3-28.5"/>
    <path fill="none" stroke="#000" stroke-width="2" d="m32.5,35l-2.5-16"/>
    <path fill="none" stroke="#000" stroke-width="2" d="m38,35l2-16"/>
    <circle cx="35" cy="11" r="3" fill="none" stroke="#000" stroke-width="2"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m23,5l-1,10.5,8,4"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m47,5l1,10.5-8,4"/>
    <path fill="none" stroke="#000" stroke-width="2" d="m30,19.5h10.5"/>
  </g>
` }
  )
}
export default EmojiStickFigureWithDressAndArmsRaised
