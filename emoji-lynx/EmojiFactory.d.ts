import type { Vnode } from 'mithril'

declare const EmojiFactory: { view: (vnode: Vnode<{ size?: number; [key: string]: any }>) => any }
export default EmojiFactory
