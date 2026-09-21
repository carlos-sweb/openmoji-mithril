import type { Vnode } from 'mithril'

declare const EmojiElement: { view: (vnode: Vnode<{ size?: number; [key: string]: any }>) => any }
export default EmojiElement
