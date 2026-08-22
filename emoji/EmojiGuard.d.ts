import type { Vnode } from 'mithril'

declare const EmojiGuard: { view: (vnode: Vnode<{ size?: number; [key: string]: any }>) => any }
export default EmojiGuard
