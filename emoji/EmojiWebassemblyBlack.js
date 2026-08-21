import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "webassembly" (black) [E06A]. */
const EmojiWebassemblyBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="line" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round">
    <path stroke-width="2" d="m12.96 12a0.9679 0.9679 0 0 0-0.9648 0.9648v46.07a0.9679 0.9679 0 0 0 0.9648 0.9648h46.07a0.9679 0.9679 0 0 0 0.9648-0.9648v-46.07a0.9679 0.9679 0 0 0-0.9648-0.9648h-18.69c0 2.401-1.946 4.348-4.348 4.348s-4.348-1.946-4.348-4.348h-18.69z"/>
    <path stroke-miterlimit="10" stroke-width="4.456" d="m38.55 38.23-4.455 15.59-4.458-15.6-4.455 15.59-4.456-15.59" clip-rule="evenodd"/>
    <g transform="matrix(2.138,0,0,2.239,53.91,38.14)" fill-rule="evenodd" stroke-miterlimit="10" stroke-width="2" clip-rule="evenodd">
      <path transform="translate(-5,5.32)" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="m0 0h4" clip-rule="evenodd"/>
      <path d="m0 7-3-7-3 7"/>
    </g>
  </g>
`)
  )
}
export default EmojiWebassemblyBlack
