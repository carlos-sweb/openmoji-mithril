import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "medium-light skin tone" (black) [1F3FC]. */
const EmojiMediumLightSkinToneBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="line">
    <path fill="none" stroke="#000" stroke-linejoin="round" stroke-width="2" d="M59.0349,60h-46.07A.9679.9679,0,0,1,12,59.0349v-46.07A.9679.9679,0,0,1,12.9651,12h46.07A.9679.9679,0,0,1,60,12.9651v46.07A.9679.9679,0,0,1,59.0349,60Z"/>
  </g>
`)
  )
}
export default EmojiMediumLightSkinToneBlack
