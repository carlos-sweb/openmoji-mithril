import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the OpenMoji "film frames" (black) [1F39E]. */
const EmojiFilmFramesBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}), content: `
  <g id="line">
    <rect x="12" y="17" width="48" height="38" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <polyline fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" points="12,24.9369 33.9591,24.9369 33.9591,46.9796 12,46.9796"/>
    <polyline fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" points="60,46.9796 38.2303,46.9796 38.2303,24.9369 60,24.9369"/>
    <circle cx="18.0947" cy="20.908" r="1.0794" fill="#000000" stroke="none"/>
    <circle cx="24.0947" cy="20.908" r="1.0794" fill="#000000" stroke="none"/>
    <circle cx="30.0947" cy="20.908" r="1.0794" fill="#000000" stroke="none"/>
    <circle cx="36.0947" cy="20.908" r="1.0794" fill="#000000" stroke="none"/>
    <circle cx="42.0947" cy="20.908" r="1.0794" fill="#000000" stroke="none"/>
    <circle cx="48.0947" cy="20.908" r="1.0794" fill="#000000" stroke="none"/>
    <circle cx="54.0947" cy="20.908" r="1.0794" fill="#000000" stroke="none"/>
    <circle cx="18.0778" cy="51.0255" r="1.0794" fill="#000000" stroke="none"/>
    <circle cx="24.0778" cy="51.0255" r="1.0794" fill="#000000" stroke="none"/>
    <circle cx="30.0778" cy="51.0255" r="1.0794" fill="#000000" stroke="none"/>
    <circle cx="36.0778" cy="51.0255" r="1.0794" fill="#000000" stroke="none"/>
    <circle cx="42.0778" cy="51.0255" r="1.0794" fill="#000000" stroke="none"/>
    <circle cx="48.0778" cy="51.0255" r="1.0794" fill="#000000" stroke="none"/>
    <circle cx="54.0778" cy="51.0255" r="1.0794" fill="#000000" stroke="none"/>
  </g>
` }
  )
}
export default EmojiFilmFramesBlack
