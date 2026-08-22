import m from 'mithril'
import { EmojiGrinningFace, EmojiGrinningFaceBlack } from './../index.js'

m.mount(document.getElementById('emoji1'),{view:()=>m(EmojiGrinningFace)})
m.mount(document.getElementById('emoji2'),{view:()=>m(EmojiGrinningFaceBlack,{
size: 96,
class: 'my-emoji'
})})
  


