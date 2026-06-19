import { motion } from 'framer-motion'
import type { HistoricalFigure } from '../../data/figures'
import { useT } from '../../utils/i18n'
import SealAvatar from '../common/SealAvatar'

interface Props {
  figure: HistoricalFigure
}

export default function FigureCard({ figure }: Props) {
  const { t } = useT()
  const name = t(figure.name, figure.nameEn)
  const title = t(figure.title, figure.titleEn)
  const era = t(figure.era, figure.eraEn)
  const description = t(figure.description, figure.descriptionEn)
  const trait = t(figure.trait, figure.traitEn)

  return (
    <motion.div
      className="mt-10 px-4 max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.5 }}
    >
      <div className="text-center mb-2">
        <span className="text-xs font-semibold uppercase tracking-widest text-primary/60">
          {t('历史同型人物', 'Historical Counterpart')}
        </span>
      </div>

      <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur rounded-3xl border border-border p-6 md:p-8">
        <div className="flex flex-col sm:flex-row items-center gap-5">
          {/* Seal avatar */}
          <div className="flex-shrink-0">
            <SealAvatar name={figure.name} size={80} />
          </div>

          {/* Info */}
          <div className="flex-1 text-center sm:text-left">
            <h3 className="text-xl md:text-2xl font-extrabold text-text">
              {name}
            </h3>
            <p className="text-sm text-text-muted mt-0.5">{title}</p>
            <p className="text-xs text-text-muted/70 mt-0.5">{era}</p>
            {/* Trait badge */}
            <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary/5 dark:bg-primary/15 rounded-full">
              <span className="text-lg">🏮</span>
              <span className="text-sm font-medium text-primary">{trait}</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="mt-5 text-sm md:text-base text-text-muted leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  )
}
