import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "NEW button" (black) [1F195]. */
const EmojiNEWButtonBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="line"/>
`)
  )
}
export default EmojiNEWButtonBlack
