import type { Vnode } from 'mithril'

declare const EmojiBucket: { view: (vnode: Vnode<{ size?: number; [key: string]: any }>) => any }
export default EmojiBucket
