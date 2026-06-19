import { useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useTest } from '../hooks/useTest'
import { questions } from '../data/questions'
import { useT } from '../utils/i18n'
import AnimatedPage from '../components/common/AnimatedPage'
import Button from '../components/common/Button'
import ProgressBar from '../components/test/ProgressBar'
import QuestionCard from '../components/test/QuestionCard'

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

  const [animDir, setAnimDir] = useState<'forward' | 'backward'>('forward')

  const currentValue = answers[currentQuestion.id] ?? 0

  const handleSelect = useCallback(
    (value: number) => {
      setAnswer(currentQuestion.id, value)
    },
    [currentQuestion.id, setAnswer],
  )

  const handleNext = useCallback(() => {
    if (isLast) {
      computeResult()
      navigate('/result')
      return
    }
    setAnimDir('forward')
    goNext()
  }, [isLast, computeResult, navigate, goNext])

  const handlePrev = useCallback(() => {
    setAnimDir('backward')
    goPrev()
  }, [goPrev])

  const allAnswered = Object.keys(answers).length === questions.length

  return (
    <AnimatedPage className="min-h-screen flex flex-col">
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

          <span className="text-sm text-text-muted">
            {currentValue !== 0 ? t('已选择', 'Selected') : t('请选择', 'Choose')}
          </span>

          {isLast ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <Button onClick={handleNext}>
                {allAnswered
                  ? t('查看结果 →', 'View Results →')
                  : t('完成测试 →', 'Finish Test →')}
              </Button>
            </motion.div>
          ) : (
            <Button variant="ghost" size="sm" onClick={handleNext}>
              {t('下一题 →', 'Next →')}
            </Button>
          )}
        </div>
      </div>
    </AnimatedPage>
  )
}
