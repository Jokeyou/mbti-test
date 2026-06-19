import type { PersonalityType } from '../../data/types'
import { useT } from '../../utils/i18n'

interface Props {
  type: PersonalityType
}

export default function TypeDetail({ type }: Props) {
  const { t, tArr } = useT()
  const tagline = t(type.tagline, type.taglineEn)
  const description = t(type.description, type.descriptionEn)
  const strengths = tArr(type.strengths, type.strengthsEn)
  const weaknesses = tArr(type.weaknesses, type.weaknessesEn)
  const careers = tArr(type.careers, type.careersEn)

  return (
    <div className="max-w-2xl mx-auto mt-12 space-y-8 px-4">
      {/* Tagline */}
      <p className="text-lg text-center text-text-muted italic">
        「{tagline}」
      </p>

      {/* Description */}
      <div>
        <h3 className="text-lg font-semibold text-primary mb-3">
          {t('人格概述', 'Overview')}
        </h3>
        <p className="text-text-muted leading-relaxed">{description}</p>
      </div>

      {/* Strengths */}
      <div>
        <h3 className="text-lg font-semibold text-primary mb-3">
          {t('你的优势', 'Strengths')}
        </h3>
        <ul className="space-y-2">
          {strengths.map((s) => (
            <li key={s} className="flex items-start gap-2 text-text-muted">
              <span className="text-green-500 mt-1 flex-shrink-0">✓</span>
              {s}
            </li>
          ))}
        </ul>
      </div>

      {/* Weaknesses */}
      <div>
        <h3 className="text-lg font-semibold text-primary mb-3">
          {t('可能需要注意', 'Areas to Watch')}
        </h3>
        <ul className="space-y-2">
          {weaknesses.map((w) => (
            <li key={w} className="flex items-start gap-2 text-text-muted">
              <span className="text-orange-400 mt-1 flex-shrink-0">△</span>
              {w}
            </li>
          ))}
        </ul>
      </div>

      {/* Careers */}
      <div>
        <h3 className="text-lg font-semibold text-primary mb-3">
          {t('适合的职业方向', 'Career Paths')}
        </h3>
        <div className="flex flex-wrap gap-2">
          {careers.map((c) => (
            <span
              key={c}
              className="px-3 py-1.5 bg-primary/10 dark:bg-primary/15 text-primary text-sm rounded-full"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
