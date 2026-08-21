import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "wikidata" (black) [E04B]. */
const EmojiWikidataBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="line-supplement">
    <rect x="8" y="20" width="3.027" height="32" fill="#000"/>
    <rect x="12.5406" y="20" width="6.0541" height="32" fill="#000"/>
    <rect x="20.1081" y="20" width="6.0541" height="32" fill="#000"/>
    <rect x="36.7568" y="20" width="6.0541" height="32" fill="#000"/>
    <rect x="48.8648" y="20" width="6.0541" height="32" fill="#000"/>
    <rect x="27.6757" y="20" width="3.027" height="32" fill="#000"/>
    <rect x="32.2162" y="20" width="3.027" height="32" fill="#000"/>
    <rect x="44.3243" y="20" width="3.027" height="32" fill="#000"/>
    <rect x="56.4324" y="20" width="3.027" height="32" fill="#000"/>
    <rect x="60.973" y="20" width="3.027" height="32" fill="#000"/>
  </g>
  <g id="line">
    <rect x="5" y="17" width="62" height="38" fill="none" stroke="#000" stroke-linejoin="round" stroke-width="2"/>
  </g>
`)
  )
}
export default EmojiWikidataBlack
