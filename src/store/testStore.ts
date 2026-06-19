import { create } from 'zustand'
import { questions } from '../data/questions'
import { dimensions } from '../data/dimensions'
import { calculateResult, type TestResult } from '../utils/scoring'
import type { Lang } from '../utils/i18n'

function getInitialLang(): Lang {
  try {
    const stored = localStorage.getItem('mbti-lang')
    if (stored === 'en' || stored === 'zh') return stored
  } catch { /* localStorage unavailable */ }
  return 'zh'
}

interface TestState {
  answers: Record<number, number>
  currentIndex: number
  result: TestResult | null
  lang: Lang

  setAnswer: (questionId: number, value: number) => void
  goNext: () => void
  goPrev: () => void
  goTo: (index: number) => void
  computeResult: () => void
  reset: () => void
  setLang: (lang: Lang) => void
}

export const useTestStore = create<TestState>((set, get) => ({
  answers: {},
  currentIndex: 0,
  result: null,
  lang: getInitialLang(),

  setAnswer: (questionId, value) =>
    set((state) => ({ answers: { ...state.answers, [questionId]: value } })),

  goNext: () =>
    set((state) => ({
      currentIndex: Math.min(state.currentIndex + 1, questions.length - 1),
    })),

  goPrev: () =>
    set((state) => ({
      currentIndex: Math.max(state.currentIndex - 1, 0),
    })),

  goTo: (index) =>
    set(() => ({
      currentIndex: Math.max(0, Math.min(index, questions.length - 1)),
    })),

  computeResult: () => {
    const { answers } = get()
    const result = calculateResult(questions, answers, dimensions)
    set({ result })
  },

  reset: () =>
    set({
      answers: {},
      currentIndex: 0,
      result: null,
    }),

  setLang: (lang) => {
    try { localStorage.setItem('mbti-lang', lang) } catch { /* noop */ }
    set({ lang })
  },
}))
