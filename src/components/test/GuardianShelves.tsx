import { motion } from 'framer-motion'
import type { Dimension } from '../../data/questions'

export interface Guardian {
  dim: Dimension
  name: string
  nameEn: string
  emoji: string
  color: string
  idle: Record<string, any>
}

export const guardians: Guardian[] = [
  {
    dim: 'EI',
    name: '灵狐',
    nameEn: 'Spirit Fox',
    emoji: '🦊',
    color: '#F97316',
    idle: { rotate: [0, 3, -3, 0], y: [0, -2, 0] },
  },
  {
    dim: 'SN',
    name: '夜枭',
    nameEn: 'Night Owl',
    emoji: '🦉',
    color: '#6B46C1',
    idle: { rotate: [0, -3, 3, 0], scale: [1, 1.03, 1] },
  },
  {
    dim: 'TF',
    name: '石象',
    nameEn: 'Stone Elephant',
    emoji: '🐘',
    color: '#2B6CB0',
    idle: { y: [0, -1.5, 0], x: [0, 1, -1, 0] },
  },
  {
    dim: 'JP',
    name: '玄龟',
    nameEn: 'Mystic Turtle',
    emoji: '🐢',
    color: '#38A169',
    idle: { rotate: [0, 2, -2, 0], y: [0, -1, 0] },
  },
]

interface Props {
  unlocked: Dimension[]
  onSurprise?: (guardian: Guardian) => void
}

export default function GuardianShelves({ unlocked }: Props) {
  return (
    <div className="fixed bottom-4 left-4 z-40 flex items-center gap-1.5">
      {guardians.map((g) => (
        <motion.div
          key={g.dim}
          className={`
            w-11 h-11 rounded-xl flex items-center justify-center
            ${unlocked.includes(g.dim)
              ? 'bg-white/70 dark:bg-slate-800/70 backdrop-blur border border-white/40 shadow-md'
              : 'bg-white/30 dark:bg-slate-800/30 border-2 border-dashed border-border/40'
            }
          `}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          {unlocked.includes(g.dim) ? (
            <motion.span
              className="text-lg select-none"
              animate={g.idle}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: Math.random() * 1.5,
              }}
            >
              {g.emoji}
            </motion.span>
          ) : (
            <span className="text-xs text-text-muted/40 font-mono">?</span>
          )}
        </motion.div>
      ))}
    </div>
  )
}
