import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "droplet" (black) [1F4A7]. */
const EmojiDropletBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="line">
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M56.0001,46.7065c0,11.7749-8.9543,21.2965-20,21.2965s-20-9.5455-20-21.3204c0,0-0.2191-14.3086,16.6559-40.1878 c0,0,3.1666-5.3703,6.3541-0.3523C55.8851,32.0216,56.0001,46.7065,56.0001,46.7065"/>
  </g>
`)
  )
}
export default EmojiDropletBlack
