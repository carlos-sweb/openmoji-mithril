import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the OpenMoji "flood" (black) [E09F]. */
const EmojiFloodBlack = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`
  <g id="line">
    <line x1="55.1849" x2="55.1849" y1="50.4349" y2="25.2007" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <line x1="16.6073" x2="16.6073" y1="25.2007" y2="50.9457" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <polygon fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="16.6 25.201 35.686 8.917 55.192 25.201 16.6 25.201"/>
    <polygon fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="28.922 14.674 28.922 10.009 22.991 10.009 22.991 19.743 28.922 14.674"/>
    <polyline fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="30.741 41.21 30.741 31.123 41.051 31.123 41.051 44.197"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m61.7947,56.4009c-5.1544,0-5.1544-3.1836-10.3089-3.1836s-5.1545,3.1836-10.3089,3.1836-5.1545-3.1836-10.3089-3.1836-5.1545,3.1836-10.4606,3.1836-5.1544-3.1836-10.46-3.1836"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m61.7947,48.9356c-5.1544,0-5.1544-3.1836-10.3089-3.1836s-5.1545,3.1836-10.3089,3.1836-5.1545-3.1836-10.3089-3.1836-5.1545,3.1836-10.4606,3.1836-5.1544-3.1836-10.4605-3.1836"/>
    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m61.7947,63.8662c-5.1544,0-5.1544-3.1836-10.3089-3.1836s-5.1545,3.1836-10.3089,3.1836-5.1545-3.1836-10.3089-3.1836-5.1545,3.1836-10.4606,3.1836-5.1544-3.1836-10.46-3.1836"/>
  </g>
`)
  )
}
export default EmojiFloodBlack
