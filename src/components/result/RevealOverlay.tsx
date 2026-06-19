import { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { TestResult } from '../../utils/scoring'
import { personalityTypes } from '../../data/types'
import { useT } from '../../utils/i18n'

interface Props {
  result: TestResult
  onComplete: () => void
}

interface ConfettiPiece {
  id: number
  x: number
  y: number
  size: number
  color: string
  angle: number
  distance: number
  rotation: number
  delay: number
  shape: 'circle' | 'rect' | 'star'
}

const CONFETTI_COLORS = [
  '#FF6B6B', '#FFD93D', '#6BCB77', '#4D96FF',
  '#FF6FB5', '#C084FC', '#F97316', '#06B6D4',
  '#EF4444', '#EAB308', '#22C55E', '#3B82F6',
]

const TOTAL_CONFETTI = 120

export default function RevealOverlay({ result, onComplete }: Props) {
  const { t } = useT()
  const [stage, setStage] = useState<'gather' | 'reveal' | 'burst' | 'glow' | 'fade'>('gather')
  const type = personalityTypes[result.typeCode]
  const color = type?.color || '#1a365d'
  const letters = result.typeCode.split('')
  const revealEnd = 600 + letters.length * 200

  // Pre-generate confetti with stable random values
  const confetti = useMemo<ConfettiPiece[]>(() => {
    return Array.from({ length: TOTAL_CONFETTI }, (_, i) => ({
      id: i,
      x: 40 + Math.random() * 20, // start near center
      y: 45 + Math.random() * 10,
      size: 4 + Math.random() * 8,
      color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
      angle: Math.random() * 360,
      distance: 20 + Math.random() * 60, // how far it flies
      rotation: Math.random() * 720 - 360,
      delay: Math.random() * 0.8,
      shape: Math.random() > 0.7 ? 'star' : Math.random() > 0.3 ? 'rect' : 'circle',
    }))
  }, [])

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage('reveal'), 600),
      setTimeout(() => setStage('burst'), revealEnd),
      setTimeout(() => setStage('glow'), revealEnd + 1800),
      setTimeout(() => setStage('fade'), revealEnd + 3500),
      setTimeout(onComplete, revealEnd + 4300),
    ]
    return () => timers.forEach(clearTimeout)
  }, [revealEnd, onComplete])

  return (
    <AnimatePresence>
      {stage !== 'fade' ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
          style={{
            background:
              stage === 'gather'
                ? '#020617'
                : stage === 'burst'
                ? '#020617'
                : `radial-gradient(circle at center, ${color}15 0%, #020617 100%)`,
            transition: 'background 0.6s ease',
          }}
          exit={{ opacity: 0, transition: { duration: 0.8 } }}
        >
          {/* Screen flash on burst */}
          {stage === 'burst' && (
            <motion.div
              className="absolute inset-0 bg-white pointer-events-none"
              initial={{ opacity: 0.7 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
          )}

          {/* Floating particles */}
          {stage !== 'gather' && (
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {Array.from({ length: 50 }).map((_, i) => (
                <motion.div
                  key={`particle-${i}`}
                  className="absolute rounded-full"
                  style={{
                    width: 2 + Math.random() * 4,
                    height: 2 + Math.random() * 4,
                    backgroundColor: ['gold', color, '#ffffff'][Math.floor(Math.random() * 3)],
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    opacity: [0, 0.5, 0],
                    scale: [0, 1.5, 0],
                    x: [0, (Math.random() - 0.5) * 100],
                    y: [0, (Math.random() - 0.5) * 100],
                  }}
                  transition={{
                    duration: 2 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 1.5,
                  }}
                />
              ))}
            </div>
          )}

          {/* CONFETTI BURST */}
          {stage === 'burst' && (
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {confetti.map((c) => {
                const rad = (c.angle * Math.PI) / 180
                const tx = Math.cos(rad) * c.distance
                const ty = Math.sin(rad) * c.distance

                return (
                  <motion.div
                    key={`confetti-${c.id}`}
                    className="absolute"
                    style={{
                      left: `${c.x}%`,
                      top: `${c.y}%`,
                      width: c.size,
                      height: c.shape === 'rect' ? c.size * 0.6 : c.size,
                      backgroundColor: c.color,
                      borderRadius: c.shape === 'circle' ? '50%' : c.shape === 'star' ? '1px' : '2px',
                      transform: c.shape === 'star' ? 'rotate(45deg)' : undefined,
                    }}
                    initial={{ opacity: 0, scale: 0, x: 0, y: 0, rotate: 0 }}
                    animate={{
                      opacity: [0, 1, 0.8, 0],
                      scale: [0, 1.5, 1, 0.5],
                      x: [0, tx * 0.5, tx, tx * 1.1],
                      y: [0, ty * 0.5 - 10, ty, ty + 20],
                      rotate: c.rotation,
                    }}
                    transition={{
                      duration: 2.5 + c.delay,
                      ease: [0.15, 0.35, 0.45, 1],
                      delay: c.delay,
                    }}
                  />
                )
              })}
            </div>
          )}

          {/* Golden sparkle ring */}
          {stage === 'burst' && (
            <motion.div
              className="absolute rounded-full pointer-events-none"
              style={{
                width: 300,
                height: 300,
                border: '2px solid rgba(255, 215, 0, 0.4)',
                boxShadow: '0 0 60px rgba(255, 215, 0, 0.2), 0 0 120px rgba(255, 215, 0, 0.1)',
              }}
              initial={{ scale: 0, opacity: 0.8 }}
              animate={{ scale: 3, opacity: 0 }}
              transition={{ duration: 2.2, ease: 'easeOut' }}
            />
          )}

          {/* Type letters + screen shake on burst */}
          <motion.div
            className="flex items-center gap-3 md:gap-5 relative z-10"
            animate={
              stage === 'burst'
                ? { scale: [1, 1.08, 1.02, 1], x: [0, -3, 3, -2, 0] }
                : { scale: 1 }
            }
            transition={stage === 'burst' ? { duration: 0.5, ease: 'easeOut' } : {}}
          >
            {letters.map((letter, i) => (
              <motion.div
                key={letter + i}
                initial={{ opacity: 0, scale: 0.3, y: 40 }}
                animate={
                  stage === 'gather'
                    ? { opacity: 0, scale: 0.3, y: 40 }
                    : stage === 'reveal'
                    ? {
                        opacity: 1,
                        scale: [0.3, 1.15, 0.95, 1],
                        y: 0,
                      }
                    : stage === 'burst'
                    ? {
                        opacity: 1,
                        scale: [1, 1.3, 1.05, 1],
                        y: 0,
                      }
                    : {
                        opacity: 1,
                        scale: 1,
                        y: 0,
                      }
                }
                transition={{
                  delay: stage === 'reveal' ? i * 0.2 : stage === 'burst' ? i * 0.05 : 0,
                  duration: stage === 'burst' ? 0.5 : 0.5,
                  ease: [0.34, 1.56, 0.64, 1],
                }}
                className="text-6xl md:text-8xl font-extrabold tracking-wider"
                style={{
                  color,
                  textShadow:
                    stage === 'glow' || stage === 'burst'
                      ? `0 0 40px ${color}, 0 0 80px ${color}50, 0 0 150px ${color}30, 0 0 250px ${color}15`
                      : 'none',
                  filter:
                    stage === 'burst'
                      ? `brightness(1.3) drop-shadow(0 0 20px gold)`
                      : 'none',
                  transition: 'text-shadow 0.5s ease, filter 0.5s ease',
                }}
              >
                {letter}
              </motion.div>
            ))}
          </motion.div>

          {/* Type name + crown emoji */}
          {(stage === 'burst' || stage === 'glow') && (
            <motion.div
              className="absolute text-center"
              style={{ marginTop: '10rem' }}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: stage === 'burst' ? 0.4 : 0, duration: 0.6 }}
            >
              <motion.span
                className="block text-4xl md:text-5xl mb-2"
                animate={{ scale: [1, 1.2, 1], rotate: [0, -10, 10, 0] }}
                transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
              >
                👑
              </motion.span>
              <p className="text-xl md:text-2xl font-serif-sc text-white/70 tracking-widest">
                {type ? t(type.name, type.nameEn) : ''}
              </p>
              <p className="text-xs md:text-sm text-white/30 mt-1 font-serif-sc">
                {t('这就是你的人格类型', 'This is your personality type')}
              </p>
            </motion.div>
          )}

          {/* Bottom hint */}
          <motion.p
            className="absolute bottom-12 text-sm text-white/15"
            initial={{ opacity: 0 }}
            animate={{ opacity: stage === 'glow' ? 0.3 : 0 }}
            transition={{ delay: 1 }}
          >
            MBTI Personality Test
          </motion.p>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
