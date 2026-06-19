import { motion, AnimatePresence } from 'framer-motion'
import type { Question, Dimension } from '../../data/questions'
import { dimensions } from '../../data/dimensions'
import { useT } from '../../utils/i18n'
import LikertScale from './LikertScale'

const dimIcons: Record<Dimension, string> = {
  EI: '⚡',
  SN: '👁️',
  TF: '🧠',
  JP: '📋',
}

interface Props {
  question: Question
  selectedValue: number
  onSelect: (value: number) => void
  direction: 'forward' | 'backward'
}

export default function QuestionCard({
  question,
  selectedValue,
  onSelect,
  direction,
}: Props) {
  const { t } = useT()
  const questionText = t(question.text, question.textEn)
  const dim = dimensions.find((d) => d.id === question.dimension)!
  const dimLabel = t(dim.label, dim.labelEn)
  const dimIcon = dimIcons[question.dimension]

  const variants = {
    enter: (dir: string) => ({
      x: dir === 'forward' ? 120 : -120,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: string) => ({
      x: dir === 'forward' ? -120 : 120,
      opacity: 0,
    }),
  }

  return (
    <div className="max-w-xl mx-auto px-4 w-full">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={question.id}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.25, ease: 'easeInOut' }}
        >
          {/* Glass card container */}
          <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl border border-white/40 dark:border-slate-700/40 shadow-lg shadow-black/5 dark:shadow-black/20 rounded-3xl p-8 md:p-10">
            {/* Dimension tag */}
            <div className="text-center mb-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-primary/5 dark:bg-primary/15 text-primary/70">
                {dimIcon}
                {dimLabel}
              </span>
            </div>

            <h2 className="text-xl md:text-2xl font-semibold text-center text-text leading-relaxed min-h-[80px] flex items-center justify-center">
              {questionText}
            </h2>

            <LikertScale value={selectedValue} onChange={onSelect} />
          </div>

          <p className="mt-6 text-center text-xs text-text-muted">
            {t(
              '按键盘 1-5 选择 · ← → 切换题目',
              'Press 1-5 to select · ← → to navigate',
            )}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
