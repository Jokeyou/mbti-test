import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { personalityTypes } from '../data/types'
import { useT } from '../utils/i18n'
import AnimatedPage from '../components/common/AnimatedPage'
import Button from '../components/common/Button'
import Card3D from '../components/common/Card3D'
import TypeAvatar from '../components/common/TypeAvatar'

const typeOrder = Object.keys(personalityTypes)

export default function TypesPage() {
  const { t, tArr } = useT()
  const [expanded, setExpanded] = useState<string | null>(null)

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
            const isOpen = expanded === code
            const typeName = t(type.name, type.nameEn)
            const typeTagline = t(type.tagline, type.taglineEn)
            const typeDesc = t(type.description, type.descriptionEn)
            const strengths = tArr(type.strengths, type.strengthsEn)
            const careers = tArr(type.careers, type.careersEn)

            return (
              <motion.div
                key={code}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04, duration: 0.5 }}
              >
                <Card3D intensity={8}>
                  <motion.div
                    className={`
                      rounded-2xl cursor-pointer overflow-hidden
                      bg-white
                      transition-all duration-500
                      ${isOpen
                        ? 'shadow-xl'
                        : 'shadow-sm hover:shadow-lg'
                      }
                    `}
                    style={{
                      border: isOpen
                        ? `2px solid ${type.color}60`
                        : '2px solid transparent',
                    }}
                    onClick={() => setExpanded(isOpen ? null : code)}
                    whileHover={{
                      borderColor: isOpen ? `${type.color}60` : `${type.color}30`,
                    }}
                    layout
                  >
                    <div className="p-5 flex items-center gap-4">
                      <div
                        className="flex-shrink-0"
                        style={{ color: type.color }}
                      >
                        <TypeAvatar code={code} size={48} />
                      </div>
                      <div>
                        <h3 className="font-bold text-text">{typeName}</h3>
                        <p className="text-xs text-text-muted mt-0.5">
                          {typeTagline}
                        </p>
                      </div>
                    </div>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-5 space-y-4 border-t border-border pt-4">
                            <p className="text-sm text-text-muted leading-relaxed">
                              {typeDesc.slice(0, 150)}...
                            </p>
                            <div>
                              <h4 className="text-xs font-semibold text-primary uppercase tracking-wide mb-1.5">
                                {t('优势', 'Strengths')}
                              </h4>
                              <ul className="space-y-0.5">
                                {strengths.slice(0, 2).map((s) => (
                                  <li key={s} className="text-xs text-text-muted">
                                    · {s}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="flex flex-wrap gap-1">
                              {careers.map((c) => (
                                <span
                                  key={c}
                                  className="px-2 py-0.5 bg-primary/5 text-primary text-xs rounded-full"
                                >
                                  {c}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </Card3D>
              </motion.div>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="secondary"
            size="md"
            onClick={() => (window.location.href = '/test')}
          >
            {t('测测我是哪种？', 'Which one am I?')}
          </Button>
        </div>
      </div>
    </AnimatedPage>
  )
}
