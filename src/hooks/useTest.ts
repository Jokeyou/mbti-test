import { useCallback, useEffect } from 'react'
import { useTestStore } from '../store/testStore'
import { questions60 } from '../data/questions60'
import { questions as questions28 } from '../data/questions'

export function useTest() {
  const store = useTestStore()
  const activeQuestions = store.questionSet === 'full' ? questions60 : questions28
  const currentQuestion = activeQuestions[store.currentIndex]
  const progress = {
    current: store.currentIndex + 1,
    total: activeQuestions.length,
    percentage: Math.round(((store.currentIndex + 1) / activeQuestions.length) * 100),
    answeredCount: Object.keys(store.answers).length,
  }

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key >= '1' && e.key <= '5') {
        const value = parseInt(e.key) - 3
        store.setAnswer(currentQuestion.id, value)
        return
      }

      if (e.key === 'Enter' || e.key === 'ArrowRight') {
        e.preventDefault()
        if (store.currentIndex < activeQuestions.length - 1) {
          store.goNext()
        }
        return
      }

      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        store.goPrev()
        return
      }
    },
    [store, currentQuestion.id, activeQuestions.length],
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
    isLast: store.currentIndex === activeQuestions.length - 1,
    setAnswer: store.setAnswer,
    goNext: store.goNext,
    goPrev: store.goPrev,
    goTo: store.goTo,
    computeResult: store.computeResult,
    reset: store.reset,
  }
}
