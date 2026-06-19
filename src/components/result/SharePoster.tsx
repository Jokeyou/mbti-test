import { forwardRef } from 'react'
import type { TestResult } from '../../utils/scoring'
import { personalityTypes } from '../../data/types'
import { dimensions } from '../../data/dimensions'
import { useTestStore } from '../../store/testStore'
import { t } from '../../utils/i18n'
import TypeAvatar from '../common/TypeAvatar'

interface Props {
  result: TestResult
}

const SharePoster = forwardRef<HTMLDivElement, Props>(function SharePoster(
  { result },
  ref,
) {
  const lang = useTestStore((s) => s.lang)
  const type = personalityTypes[result.typeCode]
  if (!type) return null

  const typeName = t(lang, type.name, type.nameEn)
  const typeTagline = t(lang, type.tagline, type.taglineEn)

  return (
    <div
      ref={ref}
      className="w-[420px] bg-white p-8 rounded-2xl shadow-xl"
      style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
    >
      {/* Avatar + Type badge */}
      <div className="text-center mb-6">
        <div className="flex justify-center mb-4" style={{ color: type.color }}>
          <TypeAvatar code={type.code} size={100} />
        </div>
        <div
          className="inline-block px-5 py-3 rounded-xl text-white text-3xl font-extrabold tracking-wide shadow-md"
          style={{ backgroundColor: type.color }}
        >
          {type.code}
        </div>
        <p className="mt-3 text-xl font-bold text-gray-900">{typeName}</p>
        <p className="mt-1 text-sm text-gray-500">「{typeTagline}」</p>
      </div>

      {/* Dimension bars */}
      <div className="space-y-3 mb-6">
        {result.scores.map((s) => {
          const dim = dimensions.find((d) => d.id === s.dimension)!
          const dimLabel = t(lang, dim.label, dim.labelEn)
          return (
            <div key={s.dimension}>
              <div className="flex justify-between text-xs font-medium text-gray-600 mb-0.5">
                <span>
                  {dimLabel} · {s.leftLabel.replace(/[^A-Z]/g, '')}
                </span>
                <span>
                  {s.rightLabel.replace(/[^A-Z]/g, '')} · {dimLabel}
                </span>
              </div>
              <div className="h-2.5 bg-gray-100 rounded-full flex overflow-hidden">
                <div
                  className="h-full rounded-l-full"
                  style={{
                    width: `${s.percentage}%`,
                    backgroundColor: type.color,
                  }}
                />
                <div className="h-full bg-gray-100 rounded-r-full flex-1" />
              </div>
              <div className="flex justify-between text-xs text-gray-400 mt-0.5">
                <span>{s.percentage}%</span>
                <span>{100 - s.percentage}%</span>
              </div>
            </div>
          )
        })}
      </div>

      {/* Footer */}
      <div className="text-center pt-4 border-t border-gray-100">
        <p className="text-xs text-gray-400">
          {t(lang, '扫码测测你的 MBTI 人格类型', 'Take the MBTI test to discover your personality type')}
        </p>
      </div>
    </div>
  )
})

export default SharePoster
