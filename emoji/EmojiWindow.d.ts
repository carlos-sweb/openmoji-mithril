import type { Vnode } from 'mithril'

declare const EmojiWindow: { view: (vnode: Vnode<{ size?: number; [key: string]: any }>) => any }
export default EmojiWindow
