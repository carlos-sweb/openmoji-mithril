import type { Vnode } from 'mithril'

declare const EmojiBus: { view: (vnode: Vnode<{ size?: number; [key: string]: any }>) => any }
export default EmojiBus
