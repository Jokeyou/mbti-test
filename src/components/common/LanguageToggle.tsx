import { motion } from 'framer-motion'
import { useTestStore } from '../../store/testStore'
import type { Lang } from '../../utils/i18n'

export default function LanguageToggle() {
  const lang = useTestStore((s) => s.lang)
  const setLang = useTestStore((s) => s.setLang)

  return (
    <div className="flex gap-1 bg-white/80 dark:bg-slate-800/80 backdrop-blur rounded-full p-1 shadow-md border border-border">
      {(['zh', 'en'] as Lang[]).map((l) => {
        const isActive = lang === l
        return (
          <motion.button
            key={l}
            onClick={() => setLang(l)}
            className={`
              relative px-3 py-1.5 text-sm font-semibold rounded-full cursor-pointer
              transition-colors duration-200
              ${isActive ? 'bg-primary text-white' : 'text-text-muted hover:text-text'}
            `}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {l === 'zh' ? '中' : 'EN'}
          </motion.button>
        )
      })}
    </div>
  )
}
