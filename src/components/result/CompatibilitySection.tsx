import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getTopCompatible } from '../../data/compatibility'
import { personalityTypes } from '../../data/types'
import { useT } from '../../utils/i18n'
import TypeAvatar from '../common/TypeAvatar'

interface Props {
  typeCode: string
}

export default function CompatibilitySection({ typeCode }: Props) {
  const { t } = useT()
  const matches = getTopCompatible(typeCode, 5)

  return (
    <motion.div
      className="mt-12 px-4 max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.5 }}
    >
      <h2 className="text-xl font-bold text-text text-center mb-2">
        {t('与你最契合的人格', 'Your Best Matches')}
      </h2>
      <p className="text-sm text-text-muted text-center mb-6">
        {t('基于认知功能的兼容性分析', 'Compatibility analysis based on cognitive functions')}
      </p>

      <div className="space-y-3">
        {matches.map((m, i) => {
          const type = personalityTypes[m.type]
          if (!type) return null
          const name = t(type.name, type.nameEn)

          return (
            <motion.div
              key={m.type}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 + i * 0.08, duration: 0.4 }}
            >
              <Link
                to={`/types/${m.type}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/50 dark:bg-slate-800/50 border border-border hover:shadow-md hover:border-primary-lighter/30 transition-all duration-300 group"
              >
                {/* Rank */}
                <span className="text-lg font-bold text-text-muted/30 w-6 text-center">
                  {i + 1}
                </span>

                {/* Avatar */}
                <div style={{ color: type.color }}>
                  <TypeAvatar code={m.type} size={40} />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-text group-hover:text-primary transition-colors text-sm">
                    {name}
                    <span className="ml-2 text-xs font-bold px-1.5 py-0.5 rounded" style={{ backgroundColor: type.color + '15', color: type.color }}>
                      {m.type}
                    </span>
                  </p>
                  <p className="text-xs text-text-muted mt-0.5">
                    {t(m.label, m.labelEn)}
                  </p>
                </div>

                {/* Score bar */}
                <div className="hidden sm:flex items-center gap-2 flex-shrink-0">
                  <div className="w-16 h-1.5 bg-border rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ backgroundColor: type.color }}
                      initial={{ width: 0 }}
                      animate={{ width: `${m.score}%` }}
                      transition={{ delay: 1.1 + i * 0.08, duration: 0.5, ease: 'easeOut' }}
                    />
                  </div>
                  <span className="text-xs font-bold text-text-muted w-7 text-right">
                    {m.score}
                  </span>
                </div>
              </Link>
            </motion.div>
          )
        })}
      </div>
    </motion.div>
  )
}
