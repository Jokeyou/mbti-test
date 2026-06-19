import { create } from 'zustand'
import { questions, type Dimension } from '../data/questions'
import { dimensions } from '../data/dimensions'
import { calculateResult, type TestResult } from '../utils/scoring'
import type { Lang } from '../utils/i18n'

export type ThemeMode = 'system' | 'light' | 'dark'

function getInitialLang(): Lang {
  try {
    const stored = localStorage.getItem('mbti-lang')
    if (stored === 'en' || stored === 'zh') return stored
  } catch { /* localStorage unavailable */ }
  return 'zh'
}

function getInitialTheme(): ThemeMode {
  try {
    const stored = localStorage.getItem('mbti-theme')
    if (stored === 'system' || stored === 'light' || stored === 'dark') return stored
  } catch { /* noop */ }
  return 'system'
}

interface TestState {
  answers: Record<number, number>
  currentIndex: number
  result: TestResult | null
  lang: Lang
  theme: ThemeMode
  guardians: Dimension[]
  surpriseTrigger: number
  lastUnlockedGuardian: Dimension | null

  setAnswer: (questionId: number, value: number) => void
  goNext: () => void
  goPrev: () => void
  goTo: (index: number) => void
  computeResult: () => void
  reset: () => void
  setLang: (lang: Lang) => void
  setTheme: (theme: ThemeMode) => void
  clearLastUnlockedGuardian: () => void
}

export const useTestStore = create<TestState>((set, get) => ({
  answers: {},
  currentIndex: 0,
  result: null,
  lang: getInitialLang(),
  theme: getInitialTheme(),
  guardians: [],
  surpriseTrigger: 0,
  lastUnlockedGuardian: null,

  setAnswer: (questionId, value) => {
    set((state) => {
      const newAnswers = { ...state.answers, [questionId]: value }
      // Check for newly completed dimensions
      const allDims: Dimension[] = ['EI', 'SN', 'TF', 'JP']
      const newGuardians = [...state.guardians]
      let lastUnlocked: Dimension | null = null
      for (const dim of allDims) {
        if (!newGuardians.includes(dim)) {
          const dimQuestions = questions.filter((q) => q.dimension === dim)
          const allAnswered = dimQuestions.every((q) => newAnswers[q.id] != null)
          if (allAnswered) {
            newGuardians.push(dim)
            lastUnlocked = dim
          }
        }
      }
      return {
        answers: newAnswers,
        guardians: newGuardians,
        surpriseTrigger: state.surpriseTrigger + 1,
        lastUnlockedGuardian: lastUnlocked,
      }
    })
  },

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
      guardians: [],
      surpriseTrigger: 0,
      lastUnlockedGuardian: null,
    }),

  setLang: (lang) => {
    try { localStorage.setItem('mbti-lang', lang) } catch { /* noop */ }
    set({ lang })
  },

  setTheme: (theme) => {
    try { localStorage.setItem('mbti-theme', theme) } catch { /* noop */ }
    set({ theme })
  },

  clearLastUnlockedGuardian: () => set({ lastUnlockedGuardian: null }),
}))
