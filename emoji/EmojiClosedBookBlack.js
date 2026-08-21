import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "closed book" (black) [1F4D5]. */
const EmojiClosedBookBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="line">
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m11.164,16.4512l4.8345-4.4512h43.003c.5515,0,.9985.447.9985.9985v43.003c0,.5515-.447.9985-.9985.9985"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m55.0015,61H11.9985c-.5515,0-.9985-.447-.9985-.9985V16.9985c0-.5515.447-.9985.9985-.9985h43.003c.5515,0,.9985.447.9985.9985v43.003c0,.5515-.447.9985-.9985.9985Z"/>
  </g>
`)
  )
}
export default EmojiClosedBookBlack
