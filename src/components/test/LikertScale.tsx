import { motion } from 'framer-motion'
import { useT } from '../../utils/i18n'

interface Props {
  value: number
  onChange: (value: number) => void
}

export default function LikertScale({ value, onChange }: Props) {
  const { t } = useT()

  const options = [
    { value: -2, zh: '非常不同意', en: 'Strongly Disagree', key: '1' },
    { value: -1, zh: '不同意', en: 'Disagree', key: '2' },
    { value: 0, zh: '中立', en: 'Neutral', key: '3' },
    { value: 1, zh: '同意', en: 'Agree', key: '4' },
    { value: 2, zh: '非常同意', en: 'Strongly Agree', key: '5' },
  ]

  return (
    <div className="flex flex-col sm:flex-row gap-2 items-stretch sm:items-center justify-center mt-8">
      {options.map((opt, idx) => {
        const isSelected = value === opt.value
        const label = t(opt.zh, opt.en)
        return (
          <motion.button
            key={opt.value}
            onClick={() => onChange(opt.value)}
            className={`
              relative px-3 py-3 rounded-xl text-sm font-medium
              transition-all duration-200 cursor-pointer
              border-2
              ${
                isSelected
                  ? 'border-primary-lighter bg-primary-lighter/10 text-primary shadow-md shadow-primary-lighter/20'
                  : 'border-border bg-white/60 dark:bg-slate-800/60 hover:border-primary-lighter/40 hover:bg-white dark:hover:bg-slate-700 hover:shadow-sm text-text-muted hover:text-text'
              }
            `}
            whileHover={{ y: -3, scale: 1.03 }}
            whileTap={{ y: 0, scale: 0.97 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05, duration: 0.3 }}
          >
            <span className="block text-base mb-0.5 whitespace-nowrap">{label}</span>
            <span className="block text-xs opacity-50">{opt.key}</span>
            {isSelected && (
              <motion.div
                className="absolute inset-0 rounded-xl ring-2 ring-primary-lighter/40 pointer-events-none"
                layoutId="likert-glow"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
          </motion.button>
        )
      })}
    </div>
  )
}
