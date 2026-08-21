import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "tangerine" (black) [1F34A]. */
const EmojiTangerineBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="line">
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M36,22.3263a7.2293,7.2293,0,0,1,4.2028.8654c3.5973,2.06,9.6312.0634,11.2842-5.3548A4.077,4.077,0,0,1,49.06,16.4748C46.5805,13.4882,38.8128,13.2635,36,22.3263Z"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M49.8321,24.6279A19.9974,19.9974,0,1,1,31.887,19.4968"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M31.3745,14.6242S36.4906,15.674,36,22.3263"/>
  </g>
`)
  )
}
export default EmojiTangerineBlack
