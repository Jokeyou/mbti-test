import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useT } from '../../utils/i18n'
import Button from '../common/Button'

export default function HeroSection() {
  const { lang, t } = useT()

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
        <div className="mt-10">
          <Link to="/test">
            <Button size="lg">
              {t('开始测试 · 3 分钟', 'Start Test · 3 min')}
            </Button>
          </Link>
        </div>
        <p className="mt-4 text-sm text-text-muted">
          {t('完全免费 · 无需注册 · 结果实时呈现', 'Free · No sign-up · Instant results')}
        </p>
      </motion.div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[600px] h-[600px] rounded-full bg-primary/3 blur-3xl" />
    </section>
  )
}
