import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril-lynx component for the OpenMoji "construction" (black) [1F6A7]. */
const EmojiConstructionBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}), content: `
  <g id="line">
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12.74,42.72v-6.348"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m16.92,50.9v6.509c0,.6723-.5448,1.217-1.217,1.217h-1.748c-.672,0-1.217-.5451-1.217-1.217v-6.071"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m16.92,36.37v6.348"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12.74,28.24v-5.907m4.181,0v5.812"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m55.1,43.29v-6.921"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m59.28,51.34v6.071c0,.6723-.5448,1.217-1.217,1.217h-1.748c-.672,0-1.217-.5451-1.217-1.217v-6.071"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m59.28,36.37v5.969"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m55.1,28.03v-5.891m4.181,0v5.796"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7.95,28.33h56.1v7.612H7.95v-7.612Z"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7.95,43.29h56.1v7.612H7.95v-7.612Z"/>
    <circle cx="14.83" cy="17.97" r="4.594" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <circle cx="57.19" cy="17.97" r="4.594" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
` }
  )
}
export default EmojiConstructionBlack
