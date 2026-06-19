import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Toast {
  id: number
  emoji: string
  message: string
}

// Random surprise pool
const surprises: { emoji: string; messages: string[]; enMessages: string[] }[] = [
  { emoji: '🔥', messages: ['你太棒了，继续冲！'], enMessages: ['You\'re on fire, keep going!'] },
  { emoji: '🌟', messages: ['这个回答很有深度！'], enMessages: ['That answer has depth!'] },
  { emoji: '🦔', messages: ['一只小刺猬滚过...'], enMessages: ['A hedgehog rolls by...'] },
  { emoji: '💎', messages: ['你发现了隐藏彩蛋！'], enMessages: ['You found a hidden gem!'] },
  { emoji: '🎈', messages: ['保持专注，快到了！'], enMessages: ['Stay focused, almost there!'] },
  { emoji: '🌸', messages: ['你的直觉很棒！'], enMessages: ['Great intuition!'] },
]

let toastId = 0

interface Props {
  trigger: number // incrementing number to trigger a surprise
  lang: 'zh' | 'en'
}

export default function SurpriseToast({ trigger, lang }: Props) {
  const [toasts, setToasts] = useState<Toast[]>([])

  useEffect(() => {
    if (trigger === 0) return

    // 15% chance
    if (Math.random() > 0.15) return

    const surprise = surprises[Math.floor(Math.random() * surprises.length)]
    const msgList = lang === 'zh' ? surprise.messages : surprise.enMessages
    const id = ++toastId
    const toast: Toast = {
      id,
      emoji: surprise.emoji,
      message: msgList[Math.floor(Math.random() * msgList.length)],
    }

    setToasts((prev) => [...prev, toast])

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id))
    }, 2000)
  }, [trigger, lang])

  return (
    <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-40 pointer-events-none">
      <AnimatePresence>
        {toasts.map((t) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.9 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="flex items-center gap-2 px-4 py-2 bg-white/90 dark:bg-slate-800/90 backdrop-blur rounded-full shadow-lg border border-border text-sm font-medium text-text mb-2"
          >
            <span className="text-lg">{t.emoji}</span>
            <span>{t.message}</span>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

export { surprises }
