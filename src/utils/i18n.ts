import { useTestStore } from '../store/testStore'

export type Lang = 'zh' | 'en'

/**
 * Pick the right language value from a bilingual pair.
 * Usage: t(lang, zhString, enString)
 */
export function t(lang: Lang, zh: string, en: string): string {
  return lang === 'zh' ? zh : en
}

/**
 * Pick the right language value from a bilingual string array.
 */
export function tArr(lang: Lang, zh: string[], en: string[]): string[] {
  return lang === 'zh' ? zh : en
}

/**
 * Hook that returns the t() function bound to current language.
 */
export function useT() {
  const lang = useTestStore((s) => s.lang)
  return {
    lang,
    t: (zh: string, en: string) => t(lang, zh, en),
    tArr: (zh: string[], en: string[]) => tArr(lang, zh, en),
  }
}
