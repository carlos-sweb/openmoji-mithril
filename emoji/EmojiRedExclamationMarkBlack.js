import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "red exclamation mark" (black) [2757]. */
const EmojiRedExclamationMarkBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="line">
    <circle cx="36.0928" cy="58.8419" r="3" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M35.9873,49.3729c-1.3809,0-2.5-1.1191-2.5-2.5V11.6636c0-1.3809,1.1191-2.5,2.5-2.5s2.5,1.1191,2.5,2.5v35.2093 C38.4873,48.2538,37.3682,49.3729,35.9873,49.3729z"/>
  </g>
`)
  )
}
export default EmojiRedExclamationMarkBlack
