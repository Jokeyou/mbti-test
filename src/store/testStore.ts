import { create } from 'zustand'
import { questions as questions28, type Dimension } from '../data/questions'
import { questions60 } from '../data/questions60'
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
  questionSet: 'quick' | 'full'
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
  setQuestionSet: (q: 'quick' | 'full') => void
  clearLastUnlockedGuardian: () => void
}

function getActiveQuestions(mode: 'quick' | 'full') {
  return mode === 'full' ? questions60 : questions28
}

export const useTestStore = create<TestState>((set, get) => ({
  answers: {},
  currentIndex: 0,
  result: null,
  lang: getInitialLang(),
  theme: getInitialTheme(),
  questionSet: 'quick',
  guardians: [],
  surpriseTrigger: 0,
  lastUnlockedGuardian: null,

  setAnswer: (questionId, value) => {
    set((state) => {
      const newAnswers = { ...state.answers, [questionId]: value }
      // Check for newly completed dimensions
      const activeQs = getActiveQuestions(state.questionSet)
      const allDims: Dimension[] = ['EI', 'SN', 'TF', 'JP']
      const newGuardians = [...state.guardians]
      let newUnlock: Dimension | null | undefined = undefined
      for (const dim of allDims) {
        if (!newGuardians.includes(dim)) {
          const dimQuestions = activeQs.filter((q) => q.dimension === dim)
          const allAnswered = dimQuestions.every((q) => newAnswers[q.id] != null)
          if (allAnswered) {
            newGuardians.push(dim)
            newUnlock = dim
          }
        }
      }
      return {
        answers: newAnswers,
        guardians: newGuardians,
        surpriseTrigger: state.surpriseTrigger + 1,
        // Only override lastUnlockedGuardian when a new one is unlocked
        ...(newUnlock != null ? { lastUnlockedGuardian: newUnlock } : {}),
      }
    })
  },

  goNext: () =>
    set((state) => ({
      currentIndex: Math.min(state.currentIndex + 1, getActiveQuestions(state.questionSet).length - 1),
    })),

  goPrev: () =>
    set((state) => ({
      currentIndex: Math.max(state.currentIndex - 1, 0),
    })),

  goTo: (index) =>
    set((state) => ({
      currentIndex: Math.max(0, Math.min(index, getActiveQuestions(state.questionSet).length - 1)),
    })),

  computeResult: () => {
    const { answers, questionSet } = get()
    const activeQs = getActiveQuestions(questionSet)
    const result = calculateResult(activeQs, answers, dimensions)
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

  setQuestionSet: (q) => set({ questionSet: q }),

  clearLastUnlockedGuardian: () => set({ lastUnlockedGuardian: null }),
}))
