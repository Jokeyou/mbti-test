import { motion } from 'framer-motion'
import type { DimensionScore } from '../../utils/scoring'
import { useTestStore } from '../../store/testStore'

interface Props {
  scores: DimensionScore[]
}

export default function DimensionBars({ scores }: Props) {
  const lang = useTestStore((s) => s.lang)

  return (
    <div className="w-full max-w-md mx-auto space-y-4">
      {scores.map((s, i) => {
        const leftPct = s.percentage
        const rightPct = 100 - s.percentage

        return (
          <div key={s.dimension}>
            <div className="flex justify-between text-sm font-medium mb-1">
              <span className="text-primary">
                {lang === 'zh' ? s.leftLabel : s.leftLabel.replace(/[^A-Z]/g, '')}
              </span>
              <span className="text-text-muted">
                {lang === 'zh' ? s.rightLabel : s.rightLabel.replace(/[^A-Z]/g, '')}
              </span>
            </div>
            <div className="h-2.5 bg-border rounded-full overflow-hidden flex">
              <motion.div
                className="h-full bg-primary-lighter rounded-l-full"
                initial={{ width: 0 }}
                animate={{ width: `${leftPct}%` }}
                transition={{ delay: i * 0.2, duration: 0.6, ease: 'easeOut' }}
              />
              <motion.div
                className="h-full bg-bg-off rounded-r-full"
                initial={{ width: 0 }}
                animate={{ width: `${rightPct}%` }}
                transition={{ delay: i * 0.2, duration: 0.6, ease: 'easeOut' }}
              />
            </div>
            <div className="flex justify-between text-xs text-text-muted mt-0.5">
              <span>{leftPct}%</span>
              <span>{rightPct}%</span>
            </div>
          </div>
        )
      })}
    </div>
  )
}
