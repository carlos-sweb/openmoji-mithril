import type { Vnode } from 'mithril'

declare const EmojiPrinter: { view: (vnode: Vnode<{ size?: number; [key: string]: any }>) => any }
export default EmojiPrinter
