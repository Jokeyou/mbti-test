import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useT } from '../../utils/i18n'

const accuracyOptions = [
  { value: 2, zh: '非常符合', en: 'Very Accurate', emoji: '😍' },
  { value: 1, zh: '比较符合', en: 'Mostly Accurate', emoji: '😊' },
  { value: 0, zh: '一般', en: 'Neutral', emoji: '😐' },
  { value: -1, zh: '不太符合', en: 'Somewhat Off', emoji: '🤔' },
  { value: -2, zh: '完全不符合', en: 'Not Accurate', emoji: '😕' },
]

export default function FeedbackSection() {
  const { t } = useT()
  const [accuracy, setAccuracy] = useState<number | null>(null)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = useCallback(() => {
    setSubmitted(true)
  }, [])

  return (
    <div className="mt-12 px-4 max-w-2xl mx-auto">
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="thankyou"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-center py-8"
          >
            <span className="text-4xl">🙏</span>
            <p className="mt-3 text-lg font-semibold text-text">
              {t('感谢反馈！', 'Thank you for your feedback!')}
            </p>
          </motion.div>
        ) : (
          <motion.div
            key="feedback"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="bg-white/60 dark:bg-slate-800/60 backdrop-blur rounded-3xl border border-border p-6 md:p-8"
          >
            <h3 className="text-lg font-bold text-text text-center mb-4">
              {t('这个结果符合你吗？', 'Does this result match you?')}
            </h3>
            <div className="flex flex-wrap justify-center gap-2 md:gap-3">
              {accuracyOptions.map((opt) => {
                const isSelected = accuracy === opt.value
                return (
                  <motion.button
                    key={opt.value}
                    onClick={() => setAccuracy(opt.value)}
                    className={`
                      flex flex-col items-center gap-1 px-3 py-3 rounded-2xl
                      border-2 transition-all duration-200 cursor-pointer
                      min-w-[72px]
                      ${
                        isSelected
                          ? 'border-primary-lighter bg-primary-lighter/10 shadow-md'
                          : 'border-border hover:border-primary-lighter/30 bg-white/40 dark:bg-slate-700/40'
                      }
                    `}
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 0 }}
                  >
                    <span className="text-2xl">{opt.emoji}</span>
                    <span className="text-xs font-medium text-text-muted">
                      {t(opt.zh, opt.en)}
                    </span>
                  </motion.button>
                )
              })}
            </div>
            <div className="text-center mt-6">
              <motion.button
                onClick={handleSubmit}
                disabled={accuracy === null}
                className={`
                  px-6 py-3 rounded-xl font-semibold text-sm
                  transition-all duration-200 cursor-pointer
                  ${
                    accuracy !== null
                      ? 'bg-primary text-white hover:bg-primary-light shadow-md hover:shadow-lg'
                      : 'bg-border text-text-muted cursor-not-allowed'
                  }
                `}
                whileHover={accuracy !== null ? { scale: 1.03 } : undefined}
                whileTap={accuracy !== null ? { scale: 0.97 } : undefined}
              >
                {t('提交反馈', 'Submit')}
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
