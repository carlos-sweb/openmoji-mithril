import type { Vnode } from 'mithril'

declare const EmojiFilter: { view: (vnode: Vnode<{ size?: number; [key: string]: any }>) => any }
export default EmojiFilter
