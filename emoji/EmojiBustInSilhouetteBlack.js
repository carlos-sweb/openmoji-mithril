import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "bust in silhouette" (black) [1F464]. */
const EmojiBustInSilhouetteBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="line">
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M58,60c0,0,0-2-1-6 c-1.2109-4.8457-4-8-10-8c-5,0-15,0-22,0c-6,0-8.7891,3.1543-10,8c-1,4-1,6-1,6"/>
    <path fill="none" stroke="#000000" stroke-linejoin="round" stroke-width="2" d="M26,26c0,3.7246,0.5391,7.8086,2,10 c1.8613,2.793,5.0176,4,8,4c3.0957,0,6.1367-1.207,8-4c1.46-2.1914,2-6.2754,2-10c0-2.7935-1-12-10-12S26,21.3442,26,26z"/>
  </g>
`)
  )
}
export default EmojiBustInSilhouetteBlack
