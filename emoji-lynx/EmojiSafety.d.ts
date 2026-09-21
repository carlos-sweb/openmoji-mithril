import type { Vnode } from 'mithril'

declare const EmojiSafety: { view: (vnode: Vnode<{ size?: number; [key: string]: any }>) => any }
export default EmojiSafety
