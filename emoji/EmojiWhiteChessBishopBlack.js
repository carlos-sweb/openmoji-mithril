import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "white chess bishop" (black) [2657]. */
const EmojiWhiteChessBishopBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="line" transform="matrix(.8974 0 0 .8974 3.693 6.164)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="36" cy="17" r="10" stroke-width="2.229"/>
    <path stroke-width="2.229" d="m21.53 29.34a2.019 2.019 0 0 0 0 4"/>
    <path stroke-width="2.229" d="m30.8 35.65c0 10.97-11.86 23.57-13.87 24.45h19.07"/>
    <path stroke-width="2.229" d="m41.25 36.9c0.8326 10.65 11.88 22.36 13.82 23.2h-19.07"/>
    <path stroke-width="2.229" d="m52.05 33.34a2.019 2.019 0 0 0 0-4"/>
    <line x1="21.53" x2="52.05" y1="29.34" y2="29.34" stroke-width="2.229"/>
    <line x1="21.53" x2="52.05" y1="33.34" y2="33.34" stroke-width="2.229"/>
    <path transform="matrix(1.114 0 0 1.114 -4.115 -6.869)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m36 16v10.66"/>
    <path transform="matrix(1.114 0 0 1.114 -4.115 -6.869)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m41.32 21.33h-10.66"/>
    <ellipse cx="36" cy="4.5" rx="2.5" ry="2.5" stroke-width="2.229"/>
  </g>
`)
  )
}
export default EmojiWhiteChessBishopBlack
