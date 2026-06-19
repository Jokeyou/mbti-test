import { useRef, useState, useCallback } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useTest } from '../hooks/useTest'
import { useT } from '../utils/i18n'
import { personalityTypes } from '../data/types'
import { downloadPoster, sharePoster } from '../utils/poster'
import AnimatedPage from '../components/common/AnimatedPage'
import Button from '../components/common/Button'
import ResultHero from '../components/result/ResultHero'
import TypeDetail from '../components/result/TypeDetail'
import FigureCard from '../components/result/FigureCard'
import DefiningMoment from '../components/result/DefiningMoment'
import SharePoster from '../components/result/SharePoster'
import FeedbackSection from '../components/result/FeedbackSection'
import CompatibilitySection from '../components/result/CompatibilitySection'
import RevealOverlay from '../components/result/RevealOverlay'
import FloatingParticles from '../components/result/FloatingParticles'
import { figures } from '../data/figures'

export default function ResultPage() {
  const navigate = useNavigate()
  const { t } = useT()
  const { result, reset } = useTest()
  const posterRef = useRef<HTMLDivElement>(null)
  const [revealDone, setRevealDone] = useState(false)

  const handleDownload = useCallback(async () => {
    if (!posterRef.current || !result) return
    await downloadPoster(posterRef.current, `mbti-${result.typeCode}.png`)
  }, [result])

  const handleShare = useCallback(async () => {
    if (!posterRef.current || !result) return
    await sharePoster(posterRef.current, `mbti-${result.typeCode}.png`)
  }, [result])

  const handleRetake = useCallback(() => {
    reset()
    navigate('/test')
  }, [reset, navigate])

  if (!result) {
    return (
      <AnimatedPage className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-text-muted mb-4">
            {t('还没有测试结果', 'No test results yet')}
          </p>
          <Link to="/test">
            <Button>{t('开始测试', 'Take the Test')}</Button>
          </Link>
        </div>
      </AnimatedPage>
    )
  }

  const type = personalityTypes[result.typeCode]
  if (!type) {
    return (
      <AnimatedPage className="min-h-screen flex items-center justify-center">
        <p className="text-text-muted">
          {t('未知的人格类型', 'Unknown personality type')}
        </p>
      </AnimatedPage>
    )
  }

  // Create a softer gradient from the type color
  const bgGradient = `linear-gradient(180deg, ${type.color}12 0%, ${type.color}04 50%, transparent 100%)`

  return (
    <AnimatedPage className="min-h-screen pb-16 relative">
      {/* Dramatic reveal */}
      {!revealDone && (
        <RevealOverlay result={result} onComplete={() => setRevealDone(true)} />
      )}

      {/* Floating particles background */}
      <FloatingParticles color={type.color} />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{ background: bgGradient }}
      />

      {/* Content */}
      <div className="relative z-10 pt-8 md:pt-16">
        <ResultHero type={type} result={result} />

        {/* Actions */}
        <motion.div
          className="flex items-center justify-center gap-3 mt-10 flex-wrap"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.4 }}
        >
          <Button variant="ghost" size="sm" onClick={handleRetake}>
            ↻ {t('重新测试', 'Retake')}
          </Button>
          <Button variant="secondary" size="sm" onClick={handleDownload}>
            ↓ {t('下载海报', 'Save Poster')}
          </Button>
          <Button variant="secondary" size="sm" onClick={handleShare}>
            ↗ {t('分享结果', 'Share')}
          </Button>
          <Link to="/types" className="no-underline">
            <Button variant="ghost" size="sm">
              {t('查看全部类型 →', 'All Types →')}
            </Button>
          </Link>
        </motion.div>

        {/* Historical figure */}
        {figures[result.typeCode] && (
          <>
            <FigureCard figure={figures[result.typeCode]} />
            <DefiningMoment figure={figures[result.typeCode]} />
          </>
        )}

        {/* Compatibility */}
        <CompatibilitySection typeCode={result.typeCode} />

        {/* Type detail */}
        <TypeDetail type={type} />

        {/* Feedback */}
        <FeedbackSection />
      </div>

      {/* Hidden poster for image generation */}
      <div className="fixed left-[-9999px] top-0" aria-hidden="true">
        <SharePoster ref={posterRef} result={result} />
      </div>
    </AnimatedPage>
  )
}
