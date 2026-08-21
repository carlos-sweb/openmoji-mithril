import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "musical notes" (black) [1F3B6]. */
const EmojiMusicalNotesBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="line">
    <circle cx="15.2049" cy="45.7102" r="5" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <circle cx="29.4459" cy="57.9304" r="5" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <circle cx="46.1395" cy="45.7102" r="5" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <polyline fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" points="56.7293,17.1547 50.7609,17.1547 51.1395,45.7102"/>
    <polyline fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" points="40.0358,29.3749 34.0673,29.3749 34.4459,57.9304"/>
    <polyline fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" points="25.7947,17.1547 19.8263,17.1547 20.2049,45.7102"/>
  </g>
`)
  )
}
export default EmojiMusicalNotesBlack
