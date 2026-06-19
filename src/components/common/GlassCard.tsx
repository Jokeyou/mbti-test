import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
  as?: 'div' | 'section'
}

export default function GlassCard({ children, className = '', as: Tag = 'div' }: Props) {
  return (
    <Tag
      className={`
        bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl
        border border-white/40 dark:border-slate-700/40
        shadow-lg shadow-black/5 dark:shadow-black/20
        rounded-2xl
        ${className}
      `}
    >
      {children}
    </Tag>
  )
}
