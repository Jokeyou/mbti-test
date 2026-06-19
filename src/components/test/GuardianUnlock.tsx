import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { Guardian } from './GuardianShelves'
import { useT } from '../../utils/i18n'

interface Props {
  guardian: Guardian | null
  onDone: () => void
}

export default function GuardianUnlock({ guardian, onDone }: Props) {
  const { t } = useT()
  const [stage, setStage] = useState<'enter' | 'celebrate' | 'exit'>('enter')

  useEffect(() => {
    if (!guardian) return
    setStage('enter')
    const t1 = setTimeout(() => setStage('celebrate'), 500)
    const t2 = setTimeout(() => setStage('exit'), 3200)
    const t3 = setTimeout(onDone, 3800)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [guardian, onDone])

  return (
    <AnimatePresence>
      {guardian && stage !== 'exit' && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
          exit={{ opacity: 0 }}
        >
          {/* Dim overlay */}
          <motion.div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />

          {/* Big guardian */}
          <motion.div
            className="relative z-10 text-center"
            initial={{ scale: 0, rotate: -180, opacity: 0 }}
            animate={
              stage === 'enter'
                ? { scale: 1, rotate: 0, opacity: 1 }
                : stage === 'celebrate'
                ? { scale: [1, 1.15, 1], rotate: [0, -8, 8, 0] }
                : { scale: 0.3, y: 200, x: -150, opacity: 0, rotate: 360 }
            }
            transition={
              stage === 'enter'
                ? { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }
                : stage === 'celebrate'
                ? { duration: 1.2, ease: 'easeInOut' }
                : { duration: 0.5, ease: 'easeIn' }
            }
          >
            <motion.span
              className="block text-8xl md:text-9xl"
              animate={
                stage === 'celebrate'
                  ? { y: [0, -12, 0, -6, 0], scale: [1, 1.05, 1, 1.03, 1] }
                  : {}
              }
              transition={{ duration: 0.8, repeat: stage === 'celebrate' ? 1 : 0 }}
            >
              {guardian.emoji}
            </motion.span>

            {/* Name */}
            <motion.p
              className="mt-3 text-2xl md:text-3xl font-bold text-white drop-shadow-lg"
              style={{ textShadow: `0 0 20px ${guardian.color}` }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              {t(guardian.name, guardian.nameEn)}
            </motion.p>

            {/* Mini confetti burst */}
            {stage === 'celebrate' && (
              <div className="absolute inset-0 pointer-events-none">
                {Array.from({ length: 30 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute left-1/2 top-1/2 rounded-full"
                    style={{
                      width: 4 + Math.random() * 6,
                      height: 4 + Math.random() * 6,
                      backgroundColor: [guardian.color, '#FFD700', '#FF6B6B', '#fff'][Math.floor(Math.random() * 4)],
                    }}
                    initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                    animate={{
                      opacity: [0, 0.8, 0],
                      scale: [0, 1, 0],
                      x: (Math.random() - 0.5) * 200,
                      y: (Math.random() - 0.5) * 200 - 30,
                    }}
                    transition={{ duration: 1 + Math.random() * 0.5, delay: Math.random() * 0.3 }}
                  />
                ))}
              </div>
            )}

            {/* Subtitle */}
            <motion.p
              className="mt-2 text-base text-white/70 font-medium"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: [0, 1, 1, 1, 0.5, 1], scale: [0.9, 1.05, 1] }}
              transition={{ delay: 0.5, duration: 1.5 }}
            >
              {t('新守护兽已加入！', 'A new guardian has joined!')}
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
