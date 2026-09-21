import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the OpenMoji "plastic bottle" (black) [E0CC]. */
const EmojiPlasticBottleBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}), content: `
  <g id="line">
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m29 10h14"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m30 5h12"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m41 13.5v1.5c4 5 6 6 6 8s-2 2-2 3 2 1 2 3-2 2-2 3 2 1 2 3-2 2-2 3 2 1 2 3-2 2-2 3 2 1 2 3-2 2-2 3 2 1 2 3-2 2-2 3 2 1 2 3-2 2-2 3 2 1 2 3-1.717 2-2 2h-18c-0.2833 0-2 0-2-2s2-2 2-3-2-1-2-3 2-2 2-3-2-1-2-3 2-2 2-3-2-1-2-3 2-2 2-3-2-1-2-3 2-2 2-3-2-1-2-3 2-2 2-3-2-1-2-3 2-2 2-3-2-1-2-3 2-3 6-8v-1.5"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m31.5 26h9"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m31.5 32h9"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m31.5 38h9"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m31.5 44h9"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m31.5 50h9"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m31.5 56h9"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m31.5 62h9"/>
  </g>
` }
  )
}
export default EmojiPlasticBottleBlack
