import { motion } from 'framer-motion'
import type { HistoricalFigure } from '../../data/figures'
import { useT } from '../../utils/i18n'

interface Props {
  figure: HistoricalFigure
}

export default function DefiningMoment({ figure }: Props) {
  const { t } = useT()
  const story = figure.story
  const title = t(story.title, story.titleEn)
  const setting = t(story.setting, story.settingEn)
  const narrative = t(story.narrative, story.narrativeEn)
  const bridge = t(story.bridge, story.bridgeEn)
  const quote = t(figure.quote, figure.quoteEn)

  return (
    <motion.div
      className="mt-8 px-4 max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7, duration: 0.5 }}
    >
      {/* Section header */}
      <div className="text-center mb-4">
        <span className="text-xs font-semibold uppercase tracking-widest text-primary/50">
          {t('★ 决定性瞬间', '★ The Defining Moment')}
        </span>
      </div>

      <div
        className="relative bg-white/60 dark:bg-slate-800/60 backdrop-blur rounded-3xl border border-border overflow-hidden"
      >
        {/* Left accent line */}
        <div
          className="absolute left-0 top-0 bottom-0 w-1"
          style={{
            background: `linear-gradient(180deg, #C53030, #C5303040, transparent)`,
          }}
        />

        <div className="p-6 md:p-8">
          {/* Story title */}
          <h3 className="text-xl md:text-2xl font-bold text-text mb-2">
            「{title}」
          </h3>

          {/* Setting */}
          <p className="text-sm text-text-muted/70 italic mb-5 leading-relaxed">
            {setting}
          </p>

          {/* Divider */}
          <div className="w-12 h-0.5 bg-border mb-5" />

          {/* Narrative */}
          <div className="space-y-4 text-text-muted leading-relaxed text-sm md:text-base font-serif-sc">
            {narrative.split('\n').filter(Boolean).map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          {/* Bridge */}
          <div
            className="mt-6 pl-4 border-l-2 border-primary-lighter/40 py-1"
          >
            <p className="text-sm md:text-base text-text leading-relaxed">
              {bridge}
            </p>
          </div>

          {/* Quote */}
          <div className="mt-6 text-center">
            <div className="inline-block max-w-lg">
              <p
                className="text-lg md:text-xl italic font-serif-sc text-text leading-relaxed"
                style={{ color: '#C53030' }}
              >
                「{quote}」
              </p>
              <p className="mt-2 text-sm text-text-muted">
                —— {t(figure.name, figure.nameEn)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
