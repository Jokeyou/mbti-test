import { motion } from 'framer-motion'
import { useT } from '../../utils/i18n'

interface Props {
  current: number
  total: number
  answeredCount: number
}

export default function ProgressBar({ current, total, answeredCount }: Props) {
  const { t } = useT()
  // Bar shows position progress, filled answers shown separately
  const barPct = Math.round((current / total) * 100)

  return (
    <div className="w-full mb-10">
      <div className="flex justify-between items-center mb-2 text-sm text-text-muted">
        <span>
          {t('第', 'Q')} {current} / {total}
        </span>
        <span>
          {t('已答', 'Answered')} {answeredCount}/{total}
        </span>
      </div>
      <div className="h-1.5 bg-border dark:bg-slate-700 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-primary-lighter rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${barPct}%` }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        />
      </div>
    </div>
  )
}
