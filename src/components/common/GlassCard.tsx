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
        bg-white/70 backdrop-blur-xl
        border border-white/40
        shadow-lg shadow-black/5
        rounded-2xl
        ${className}
      `}
    >
      {children}
    </Tag>
  )
}
