import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "fisheye" (color) [25C9]. */
const EmojiFisheye = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="color">
    <circle cx="36" cy="36" r="28" fill="#61B2E4"/>
    <circle r="18" transform="matrix(-1 0 0 1 36 36)" fill="#92D3F5"/>
    <path fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="10" d="M54.125 36C54.125 33.8816 53.7616 31.848 53.0937 29.9583C50.6055 22.9186 43.8917 17.875 36 17.875"/>
  </g>
  <g id="line">
    <circle cx="36" cy="36" r="7.25" fill="#000"/>
    <circle cx="36" cy="36" r="28" fill="none" stroke="#000" stroke-width="2"/>
  </g>
`)
  )
}
export default EmojiFisheye
