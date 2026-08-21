import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "left speech bubble" (color) [1F5E8]. */
const EmojiLeftSpeechBubble = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="color">
    <path fill="#FFFFFF" stroke="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M54.8808,49.1283C57.4746,45.405,59,40.8818,59,36c0-12.7026-10.2974-23-23-23S13,23.2974,13,36c0,12.7025,10.2974,23,23,23 c3.7581,0,7.3021-0.9071,10.4348-2.5054l4.8138,2.0528l5.7283,2.4428l-1.0836-6.1324L54.8808,49.1283z"/>
  </g>
  <g id="hair"/>
  <g id="skin"/>
  <g id="skin-shadow"/>
  <g id="line">
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M54.8808,49.1283C57.4746,45.405,59,40.8818,59,36c0-12.7026-10.2974-23-23-23S13,23.2974,13,36c0,12.7025,10.2974,23,23,23 c3.7581,0,7.3021-0.9071,10.4348-2.5054l4.8138,2.0528l5.7283,2.4428l-1.0836-6.1324L54.8808,49.1283z"/>
  </g>
`)
  )
}
export default EmojiLeftSpeechBubble
