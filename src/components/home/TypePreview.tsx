import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { personalityTypes } from '../../data/types'
import { useT } from '../../utils/i18n'
import { getSymbolForType } from '../../data/fourSymbols'
import TypeAvatar from '../common/TypeAvatar'

const typeOrder = Object.keys(personalityTypes)

export default function TypePreview() {
  const { t } = useT()

  return (
    <section className="px-4 pb-20 max-w-5xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-primary mb-10">
        {t('16 种人格类型', '16 Personality Types')}
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-3">
        {typeOrder.map((code, i) => {
          const type = personalityTypes[code]
          const typeName = t(type.name, type.nameEn)
          const symbol = getSymbolForType(code)
          return (
            <motion.div
              key={code}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.04,
                duration: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <Link
                to={`/types/${code}`}
                className="block text-center p-4 rounded-2xl hover:bg-bg-off dark:hover:bg-slate-800/50 transition-all duration-300 group hover:shadow-md hover:-translate-y-1"
              >
                <div
                  className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg"
                  style={{
                    color: type.color,
                    background: `linear-gradient(135deg, ${type.color}12, ${type.color}06)`,
                  }}
                >
                  <TypeAvatar code={code} size={56} />
                </div>
                <p className="mt-2.5 text-xs font-medium text-text-muted group-hover:text-text transition-colors">
                  {symbol && <span className="mr-1">{symbol.emoji}</span>}
                  {typeName}
                </p>
              </Link>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
