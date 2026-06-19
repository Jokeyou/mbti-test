import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { personalityTypes } from '../data/types'
import { useT } from '../utils/i18n'
import AnimatedPage from '../components/common/AnimatedPage'
import Button from '../components/common/Button'
import Card3D from '../components/common/Card3D'
import TypeAvatar from '../components/common/TypeAvatar'

const typeOrder = Object.keys(personalityTypes)

export default function TypesPage() {
  const { t } = useT()

  return (
    <AnimatedPage className="min-h-screen pb-16">
      <div className="max-w-5xl mx-auto pt-8 md:pt-16 px-4">
        <h1 className="text-3xl md:text-4xl font-extrabold text-center text-primary mb-2">
          {t('16 种人格类型', '16 Personality Types')}
        </h1>
        <p className="text-center text-text-muted mb-10">
          {t('点击卡片查看详情', 'Click a card to learn more')}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {typeOrder.map((code, i) => {
            const type = personalityTypes[code]
            const typeName = t(type.name, type.nameEn)
            const typeTagline = t(type.tagline, type.taglineEn)

            return (
              <motion.div
                key={code}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04, duration: 0.5 }}
              >
                <Card3D intensity={8}>
                  <Link
                    to={`/types/${code}`}
                    className="block rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition-all duration-500 group"
                    style={{ border: '2px solid transparent' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = `${type.color}30`
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'transparent'
                    }}
                  >
                    <div className="p-5 flex items-center gap-4">
                      <div
                        className="flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                        style={{ color: type.color }}
                      >
                        <TypeAvatar code={code} size={48} />
                      </div>
                      <div>
                        <h3 className="font-bold text-text group-hover:text-primary transition-colors">
                          {typeName}
                        </h3>
                        <p className="text-xs text-text-muted mt-0.5">
                          {typeTagline}
                        </p>
                      </div>
                    </div>
                  </Link>
                </Card3D>
              </motion.div>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Link to="/test">
            <Button variant="secondary" size="md">
              {t('测测我是哪种？', 'Which one am I?')}
            </Button>
          </Link>
        </div>
      </div>
    </AnimatedPage>
  )
}
