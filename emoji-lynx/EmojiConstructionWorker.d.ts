import type { Vnode } from 'mithril'

declare const EmojiConstructionWorker: { view: (vnode: Vnode<{ size?: number; [key: string]: any }>) => any }
export default EmojiConstructionWorker
