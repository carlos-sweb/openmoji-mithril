import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "drop of blood" (black) [1FA78]. */
const EmojiDropOfBloodBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="line">
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M56,46.7065C56,58.4814,47.0458,68.003,36,68.003s-20-9.5455-20-21.32c0,0-.2191-14.3086,16.6559-40.1878,0,0,3.1666-5.37,6.3541-.3523C55.8851,32.0216,56,46.7065,56,46.7065"/>
  </g>
`)
  )
}
export default EmojiDropOfBloodBlack
