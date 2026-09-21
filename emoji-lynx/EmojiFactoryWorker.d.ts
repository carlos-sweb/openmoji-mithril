import type { Vnode } from 'mithril'

declare const EmojiFactoryWorker: { view: (vnode: Vnode<{ size?: number; [key: string]: any }>) => any }
export default EmojiFactoryWorker
