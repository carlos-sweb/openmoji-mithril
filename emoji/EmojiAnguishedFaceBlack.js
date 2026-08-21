import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "anguished face" (black) [1F627]. */
const EmojiAnguishedFaceBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="line-supplement">
    <path d="m42.847 45.658c0-2.592-3.834-4.694-6.869-4.694s-6.869 2.101-6.869 4.694 3.659 0.9248 6.694 0.9248 7.044 1.6669 7.044-0.9248z"/>
  </g>
  <g id="line">
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m29.356 22.669a8.44 8.44 0 0 0-9.0659 4.4981"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m51.664 27.167a8.44 8.44 0 0 0-9.0659-4.4981"/>
    <circle cx="35.977" cy="35.958" r="23" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2"/>
    <path fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2" d="m42.847 45.658c0-2.592-3.834-4.694-6.869-4.694s-6.869 2.101-6.869 4.694 3.659 0.9248 6.694 0.9248 7.044 1.6669 7.044-0.9248z"/>
    <path d="m29.977 32.958a3 3 0 1 1-3-3 3.0011 3.0011 0 0 1 3 3"/>
    <path d="m47.977 32.958a3 3 0 1 1-3-3 3.0011 3.0011 0 0 1 3 3"/>
  </g>
`)
  )
}
export default EmojiAnguishedFaceBlack
