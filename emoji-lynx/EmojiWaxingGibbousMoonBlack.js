import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the OpenMoji "waxing gibbous moon" (black) [1F314]. */
const EmojiWaxingGibbousMoonBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}), content: `
  <g id="line-supplement">
    <path fill="#000000" d="M17,37A28.001,28.001,0,0,1,43.5465,9.0374,27.9995,27.9995,0,1,0,36,64q.7312,0,1.4535-.0374A28.0059,28.0059,0,0,1,17,37Z"/>
  </g>
  <g id="line">
    <circle cx="36" cy="36" r="28" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17,37A28.001,28.001,0,0,1,43.5465,9.0374,27.9995,27.9995,0,1,0,36,64q.7312,0,1.4535-.0374A28.0059,28.0059,0,0,1,17,37Z"/>
  </g>
` }
  )
}
export default EmojiWaxingGibbousMoonBlack
