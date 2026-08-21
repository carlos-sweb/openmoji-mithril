import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "smiling face with halo" (black) [1F607]. */
const EmojiSmilingFaceWithHaloBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="line">
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M45.8147,45.2268a15.4294,15.4294,0,0,1-19.6294,0"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M47.7657,16.233a23.0273,23.0273,0,0,0-23.3693-.096"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.6381,22.1467a23,23,0,1,0,36.625-.1294"/>
    <ellipse cx="36" cy="14.8" rx="25" ry="5.25" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M31.6941,33.4036a4.7262,4.7262,0,0,0-8.6382,0"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M48.9441,33.4036a4.7262,4.7262,0,0,0-8.6382,0"/>
  </g>
`)
  )
}
export default EmojiSmilingFaceWithHaloBlack
