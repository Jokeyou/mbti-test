import { useRef, useState, useCallback, type ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
  intensity?: number // default 10
}

export default function Card3D({ children, className = '', intensity = 10 }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [style, setStyle] = useState<Record<string, string>>({})

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      const rx = ((y - centerY) / centerY) * -intensity
      const ry = ((x - centerX) / centerX) * intensity
      setStyle({
        transform: `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) scale3d(1.02, 1.02, 1.02)`,
        transition: 'transform 0.1s ease-out',
      })
    },
    [intensity],
  )

  const handleMouseLeave = useCallback(() => {
    setStyle({
      transform: 'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'transform 0.5s ease-out',
    })
  }, [])

  return (
    <div
      ref={ref}
      className={className}
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  )
}
