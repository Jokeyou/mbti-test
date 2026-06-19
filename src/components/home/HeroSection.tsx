import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useT } from '../../utils/i18n'
import { useTestStore } from '../../store/testStore'
import Button from '../common/Button'

export default function HeroSection() {
  const { lang, t } = useT()
  const setQuestionSet = useTestStore((s) => s.setQuestionSet)
  const navigate = useNavigate()

  const startTest = (mode: 'quick' | 'full') => {
    setQuestionSet(mode)
    navigate('/test')
  }

  return (
    <section className="relative pt-24 pb-16 md:pt-36 md:pb-24 text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {lang === 'zh' ? (
          <h1 className="text-4xl md:text-6xl font-extrabold text-primary tracking-tight leading-tight">
            发现你的真实<br className="md:hidden" />
            <span className="text-primary-lighter">人格类型</span>
          </h1>
        ) : (
          <h1 className="text-4xl md:text-6xl font-extrabold text-primary tracking-tight leading-tight">
            Discover Your True<br className="md:hidden" />
            <span className="text-primary-lighter">Personality Type</span>
          </h1>
        )}
        <p className="mt-6 text-lg md:text-xl text-text-muted max-w-xl mx-auto leading-relaxed">
          {t(
            'MBTI 人格测试 · 28 题快速版 · 约 3 分钟完成',
            'MBTI Personality Test · 28 Questions · ~3 Minutes',
          )}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button size="lg" onClick={() => startTest('quick')}>
            ⚡ {t('快速测试 · 28 题 · 3 分钟', 'Quick Test · 28 Q · 3 min')}
          </Button>
          <Button size="lg" variant="secondary" onClick={() => startTest('full')}>
            🎯 {t('完整测试 · 60 题 · 8 分钟', 'Full Test · 60 Q · 8 min')}
          </Button>
        </div>
        <p className="mt-4 text-sm text-text-muted">
          {t('完全免费 · 无需注册 · 结果实时呈现', 'Free · No sign-up · Instant results')}
        </p>
      </motion.div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[600px] h-[600px] rounded-full bg-primary/3 blur-3xl" />
    </section>
  )
}
