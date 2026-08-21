import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "united federation of planets flag (star trek)" (black) [1F3F3-FE0F-200D-1F7E6-200D-1F30C]. */
const EmojiUnitedFederationOfPlanetsFlagStarTrekBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="line">
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M67 17H5V55H67V17Z"/>
  </g>
`)
  )
}
export default EmojiUnitedFederationOfPlanetsFlagStarTrekBlack
