import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the OpenMoji "right arrow curving up" (black) [2934]. */
const EmojiRightArrowCurvingUpBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}), content: `
  <g id="line">
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M40.1841,12L26.1294,26.8587l3.7285,3.413l7.5107-7.9438v16.4924c0,10.5232-5.7598,15.6386-17.6094,15.6386h-1V60h1	c14.9902,0,23.2461-7.522,23.2461-21.1797V22.3331l7.5078,7.9386l3.7275-3.413L40.1841,12z"/>
  </g>
` }
  )
}
export default EmojiRightArrowCurvingUpBlack
