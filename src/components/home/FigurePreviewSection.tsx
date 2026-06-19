import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { figures } from '../../data/figures'
import { personalityTypes } from '../../data/types'
import { useT } from '../../utils/i18n'
import FigureAvatar from '../common/FigureAvatar'

const figureEntries = Object.entries(figures)

export default function FigurePreviewSection() {
  const { t } = useT()

  return (
    <section className="px-4 pb-20 max-w-6xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-primary mb-2">
        {t('历史同型人物', 'Historical Counterparts')}
      </h2>
      <p className="text-center text-text-muted text-sm mb-10">
        {t('16 位传奇人物，16 种人格类型', '16 legendary figures, 16 personality types')}
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-3">
        {figureEntries.map(([mbti, figure], i) => {
          const type = personalityTypes[mbti]
          const name = t(figure.name, figure.nameEn)
          const nameEn = t(figure.nameEn, figure.name)

          return (
            <motion.div
              key={mbti}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.4 }}
            >
              <Link
                to={`/types/${mbti}`}
                className="block text-center p-3 rounded-2xl hover:bg-bg-off dark:hover:bg-slate-800/50 transition-all duration-300 group hover:shadow-md hover:-translate-y-1"
              >
                <div className="w-16 h-16 mx-auto flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <FigureAvatar name={figure.name} size={64} />
                </div>
                <p className="mt-2 text-xs font-bold text-text group-hover:text-primary transition-colors">
                  {name}
                </p>
                <p className="text-[10px] text-text-muted/60">
                  {nameEn}
                </p>
                {type && (
                  <span
                    className="inline-block mt-1 text-[10px] font-bold px-1.5 py-0.5 rounded"
                    style={{ backgroundColor: type.color + '15', color: type.color }}
                  >
                    {mbti}
                  </span>
                )}
              </Link>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
