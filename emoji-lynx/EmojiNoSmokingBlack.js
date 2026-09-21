import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the OpenMoji "no smoking" (black) [1F6AD]. */
const EmojiNoSmokingBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}), content: `
  <g id="line" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round">
    <path stroke-miterlimit="10" stroke-width="1.99" d="m30.85 34-13.85-0.04 1e-3 7h20.18m8.379 0h5.448v-7l-12.88-0.085"/>
    <line x1="55" x2="55" y1="33.95" y2="40.95" stroke-miterlimit="10" stroke-width="1.99"/>
    <path stroke-miterlimit="10" stroke-width="1.99" d="m49 24c0 1.657 1.343 3 3 3s3 1.343 3 3"/>
    <circle cx="36" cy="36" r="30" stroke-width="2"/>
    <path stroke-width="2" d="m55.66 51.44a24.99 24.99 0 0 0-35.06-35.13z"/>
    <path stroke-width="2" d="m16.99 19.77a24.99 24.99 0 0 0 35.2 35.27z"/>
  </g>
` }
  )
}
export default EmojiNoSmokingBlack
