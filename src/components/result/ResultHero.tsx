import { motion } from 'framer-motion'
import TypeAvatar from '../common/TypeAvatar'
import DimensionBars from './DimensionBars'
import type { TestResult } from '../../utils/scoring'
import type { PersonalityType } from '../../data/types'
import { useT } from '../../utils/i18n'

interface Props {
  type: PersonalityType
  result: TestResult
}

export default function ResultHero({ type, result }: Props) {
  const { t } = useT()
  const typeName = t(type.name, type.nameEn)
  const tagline = t(type.tagline, type.taglineEn)

  return (
    <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 px-4 max-w-2xl mx-auto">
      {/* Avatar */}
      <motion.div
        className="flex-shrink-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div
          className="relative p-5 rounded-3xl"
          style={{
            background: `linear-gradient(135deg, ${type.color}18, ${type.color}08)`,
          }}
        >
          <TypeAvatar code={type.code} size={150} />
          <div
            className="absolute inset-0 rounded-3xl pointer-events-none"
            style={{
              border: `2px solid ${type.color}30`,
            }}
          />
        </div>
      </motion.div>

      {/* Info */}
      <div className="flex-1 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <div
            className="inline-block px-4 py-2 rounded-xl text-white text-2xl md:text-3xl font-extrabold tracking-wide shadow-lg"
            style={{ backgroundColor: type.color }}
          >
            {type.code}
          </div>
          <h1 className="mt-3 text-2xl md:text-3xl font-bold text-text">
            {typeName}
          </h1>
          <p className="mt-2 text-text-muted italic">「{tagline}」</p>
        </motion.div>

        {/* Dimension bars */}
        <motion.div
          className="mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <DimensionBars scores={result.scores} />
        </motion.div>
      </div>
    </div>
  )
}
