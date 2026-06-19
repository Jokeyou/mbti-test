import { useState, useCallback, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTest } from '../hooks/useTest'
import { questions } from '../data/questions'
import { useT } from '../utils/i18n'
import AnimatedPage from '../components/common/AnimatedPage'
import Button from '../components/common/Button'
import ProgressBar from '../components/test/ProgressBar'
import QuestionCard from '../components/test/QuestionCard'
import GuardianShelves, { guardians as guardianList } from '../components/test/GuardianShelves'
import GuardianUnlock from '../components/test/GuardianUnlock'
import SurpriseToast from '../components/test/SurpriseToast'
import { useTestStore } from '../store/testStore'

export default function TestPage() {
  const navigate = useNavigate()
  const { t } = useT()
  const {
    currentQuestion,
    answers,
    progress,
    isLast,
    setAnswer,
    goNext,
    goPrev,
    computeResult,
  } = useTest()
  const guardians = useTestStore((s) => s.guardians)
  const surpriseTrigger = useTestStore((s) => s.surpriseTrigger)
  const lang = useTestStore((s) => s.lang)
  const lastUnlocked = useTestStore((s) => s.lastUnlockedGuardian)
  const clearLastUnlocked = useTestStore((s) => s.clearLastUnlockedGuardian)

  // Guardian unlock detection — driven by store's lastUnlockedGuardian
  const [newGuardian, setNewGuardian] = useState<typeof guardianList[0] | null>(null)

  useEffect(() => {
    if (!lastUnlocked) return
    const guardian = guardianList.find((g) => g.dim === lastUnlocked)
    if (guardian) {
      setNewGuardian(guardian)
    }
  }, [lastUnlocked])

  const [animDir, setAnimDir] = useState<'forward' | 'backward'>('forward')

  const currentValue = answers[currentQuestion.id] ?? 0

  const handleSelect = useCallback(
    (value: number) => {
      setAnswer(currentQuestion.id, value)
      // Auto-advance after a brief delay
      setTimeout(() => {
        if (isLast) {
          computeResult()
          navigate('/result')
        } else {
          setAnimDir('forward')
          goNext()
        }
      }, 200)
    },
    [currentQuestion.id, setAnswer, isLast, computeResult, navigate, goNext],
  )

  const handlePrev = useCallback(() => {
    setAnimDir('backward')
    goPrev()
  }, [goPrev])

  const allAnswered = Object.keys(answers).length === questions.length

  return (
    <AnimatedPage className="min-h-screen flex flex-col">
      <GuardianShelves unlocked={guardians} />
      <SurpriseToast trigger={surpriseTrigger} lang={lang} />
      <GuardianUnlock
        guardian={newGuardian}
        onDone={() => {
          setNewGuardian(null)
          clearLastUnlocked()
        }}
      />
      <div className="flex-1 max-w-2xl mx-auto w-full pt-8 md:pt-16 pb-8 flex flex-col">
        <ProgressBar
          current={progress.current}
          total={progress.total}
          answeredCount={progress.answeredCount}
        />

        <div className="flex-1 flex items-center justify-center">
          <QuestionCard
            question={currentQuestion}
            selectedValue={currentValue}
            onSelect={handleSelect}
            direction={animDir}
          />
        </div>

        <div className="flex items-center justify-between mt-8 px-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={handlePrev}
            disabled={progress.current === 1}
          >
            ← {t('上一题', 'Prev')}
          </Button>

          <span className="text-xs text-text-muted/50">
            {t('点击选项自动进入下一题', 'Click an option to advance')}
          </span>

          {isLast && allAnswered && (
            <Button onClick={() => { computeResult(); navigate('/result') }}>
              {t('查看结果 →', 'View Results →')}
            </Button>
          )}
        </div>
      </div>
    </AnimatedPage>
  )
}
