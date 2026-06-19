import { useCallback, useEffect } from 'react'
import { useTestStore } from '../store/testStore'
import { questions } from '../data/questions'

export function useTest() {
  const store = useTestStore()
  const currentQuestion = questions[store.currentIndex]
  const progress = {
    current: store.currentIndex + 1,
    total: questions.length,
    percentage: Math.round(((store.currentIndex + 1) / questions.length) * 100),
    answeredCount: Object.keys(store.answers).length,
  }

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      // Number keys 1-5 for selecting answer
      if (e.key >= '1' && e.key <= '5') {
        const value = parseInt(e.key) - 3 // Maps 1→-2, 3→0, 5→+2
        store.setAnswer(currentQuestion.id, value)
        return
      }

      // Enter or right arrow → next
      if (e.key === 'Enter' || e.key === 'ArrowRight') {
        e.preventDefault()
        if (store.currentIndex < questions.length - 1) {
          store.goNext()
        }
        return
      }

      // Left arrow → previous
      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        store.goPrev()
        return
      }
    },
    [store, currentQuestion.id],
  )

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  return {
    currentQuestion,
    currentIndex: store.currentIndex,
    answers: store.answers,
    progress,
    result: store.result,
    isFirst: store.currentIndex === 0,
    isLast: store.currentIndex === questions.length - 1,
    setAnswer: store.setAnswer,
    goNext: store.goNext,
    goPrev: store.goPrev,
    goTo: store.goTo,
    computeResult: store.computeResult,
    reset: store.reset,
  }
}
