import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { personalityTypes } from '../data/types'
import { dimensions } from '../data/dimensions'
import { useT } from '../utils/i18n'
import AnimatedPage from '../components/common/AnimatedPage'
import Button from '../components/common/Button'
import TypeAvatar from '../components/common/TypeAvatar'
import FigureCard from '../components/result/FigureCard'
import { figures } from '../data/figures'

export default function TypeDetailPage() {
  const { code } = useParams<{ code: string }>()
  const { t, tArr } = useT()

  const type = code ? personalityTypes[code] : undefined

  if (!type) {
    return (
      <AnimatedPage className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-text-muted mb-4">
            {t('未找到该人格类型', 'Personality type not found')} — {code}
          </p>
          <Link to="/types">
            <Button>{t('查看全部类型', 'Browse All Types')}</Button>
          </Link>
        </div>
      </AnimatedPage>
    )
  }

  const typeName = t(type.name, type.nameEn)
  const tagline = t(type.tagline, type.taglineEn)
  const description = t(type.description, type.descriptionEn)
  const strengths = tArr(type.strengths, type.strengthsEn)
  const weaknesses = tArr(type.weaknesses, type.weaknessesEn)
  const careers = tArr(type.careers, type.careersEn)

  const pageTitle = `${type.code} ${typeName} — ${tagline} | MBTI`
  const pageDesc = description.slice(0, 160)

  return (
    <AnimatedPage className="min-h-screen pb-16">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDesc} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={`https://mbti-test-five-pi.vercel.app/types/${type.code}`} />
      </Helmet>

      {/* Type-specific gradient background */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: `linear-gradient(180deg, ${type.color}10 0%, transparent 40%)`,
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto pt-8 md:pt-16 px-4">
        {/* Hero */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-center mb-5" style={{ color: type.color }}>
            <TypeAvatar code={type.code} size={120} />
          </div>
          <div
            className="inline-block px-5 py-3 rounded-xl text-white text-3xl font-extrabold tracking-wide shadow-lg"
            style={{ backgroundColor: type.color }}
          >
            {type.code}
          </div>
          <h1 className="mt-4 text-3xl md:text-4xl font-extrabold text-text">
            {typeName}
          </h1>
          <p className="mt-3 text-lg text-text-muted italic">
            「{tagline}」
          </p>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <p className="text-text-muted leading-relaxed text-lg">
            {description}
          </p>
        </motion.div>

        {/* Dimension traits */}
        <motion.div
          className="mt-10 grid grid-cols-2 gap-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.4 }}
        >
          {dimensions.map((dim) => {
            const letter = type.code[['EI', 'SN', 'TF', 'JP'].indexOf(dim.id)]
            const letterFromLeft = dim.left.startsWith(letter)
            const desc = letterFromLeft
              ? t(dim.leftDesc, dim.leftDescEn)
              : t(dim.rightDesc, dim.rightDescEn)
            const label = letterFromLeft
              ? dim.left
              : dim.right

            return (
              <div
                key={dim.id}
                className="p-4 rounded-2xl bg-white/60 dark:bg-slate-800/60 border border-border"
              >
                <div className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">
                  {t(dim.label, dim.labelEn)}
                </div>
                <div className="font-bold text-text mb-1">{label}</div>
                <p className="text-sm text-text-muted">{desc}</p>
              </div>
            )
          })}
        </motion.div>

        {/* Strengths */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.4 }}
        >
          <h2 className="text-xl font-bold text-text mb-4">
            {t('优势', 'Strengths')}
          </h2>
          <ul className="space-y-3">
            {strengths.map((s) => (
              <li
                key={s}
                className="flex items-start gap-3 p-3 rounded-xl bg-green-50 dark:bg-green-900/20"
              >
                <span className="text-green-500 mt-0.5 flex-shrink-0 text-lg">✓</span>
                <span className="text-text-muted">{s}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Weaknesses */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.4 }}
        >
          <h2 className="text-xl font-bold text-text mb-4">
            {t('可能需要注意', 'Areas to Watch')}
          </h2>
          <ul className="space-y-3">
            {weaknesses.map((w) => (
              <li
                key={w}
                className="flex items-start gap-3 p-3 rounded-xl bg-orange-50 dark:bg-orange-900/20"
              >
                <span className="text-orange-400 mt-0.5 flex-shrink-0 text-lg">△</span>
                <span className="text-text-muted">{w}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Careers */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.4 }}
        >
          <h2 className="text-xl font-bold text-text mb-4">
            {t('适合的职业方向', 'Career Paths')}
          </h2>
          <div className="flex flex-wrap gap-2">
            {careers.map((c) => (
              <span
                key={c}
                className="px-4 py-2 bg-primary/10 dark:bg-primary/15 text-primary text-sm rounded-full font-medium"
              >
                {c}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Historical figure */}
        {type.code && figures[type.code] && (
          <FigureCard figure={figures[type.code]} />
        )}

        {/* CTA */}
        <motion.div
          className="mt-12 text-center space-y-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85, duration: 0.4 }}
        >
          <Link to="/test">
            <Button size="lg">
              {t('测测我是不是这个人格 →', 'Discover Yours →')}
            </Button>
          </Link>
          <p className="text-sm text-text-muted">
            {t('28 题 · 3 分钟 · 免费', '28 questions · 3 min · Free')}
          </p>
          <div className="pt-4">
            <Link to="/types" className="text-sm text-primary-lighter hover:underline">
              {t('← 查看全部 16 种人格类型', '← Browse all 16 personality types')}
            </Link>
          </div>
        </motion.div>
      </div>
    </AnimatedPage>
  )
}
