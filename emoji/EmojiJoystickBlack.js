import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "joystick" (black) [1F579]. */
const EmojiJoystickBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="line">
    <rect x="14" y="55" width="44" height="10" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <path fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2" d="m27,55c0-3.866,4.0294-7,9-7s9,3.134,9,7"/>
    <polyline fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="17 55 17 52 24 52 24 55"/>
    <polyline fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="39 44.703 39 44 39 27 33 27 33 44.7053"/>
    <circle cx="36" cy="17" r="10" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2"/>
  </g>
`)
  )
}
export default EmojiJoystickBlack
