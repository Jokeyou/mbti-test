import { motion } from 'framer-motion'
import { useTestStore, type ThemeMode } from '../../store/testStore'

export default function ThemeToggle() {
  const theme = useTestStore((s) => s.theme)
  const setTheme = useTestStore((s) => s.setTheme)

  const modes: { key: ThemeMode; icon: string; label: string }[] = [
    { key: 'system', icon: '💻', label: 'System' },
    { key: 'light', icon: '☀️', label: 'Light' },
    { key: 'dark', icon: '🌙', label: 'Dark' },
  ]

  const currentIndex = modes.findIndex((m) => m.key === theme)
  const next = modes[(currentIndex + 1) % modes.length]

  return (
    <motion.button
      onClick={() => setTheme(next.key)}
      className="px-2.5 py-1.5 text-sm rounded-full cursor-pointer bg-white/80 dark:bg-slate-800/80 backdrop-blur border border-border hover:shadow-sm transition-all"
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      title={`Theme: ${theme}`}
    >
      {modes[currentIndex].icon}
    </motion.button>
  )
}
