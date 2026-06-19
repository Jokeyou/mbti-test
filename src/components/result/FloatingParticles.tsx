import { useMemo } from 'react'

interface Props {
  count?: number
  color: string
}

interface Particle {
  id: number
  x: number
  y: number
  size: number
  delay: number
  duration: number
  opacity: number
  shape: 'circle' | 'diamond'
}

export default function FloatingParticles({ count = 25, color }: Props) {
  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 4 + Math.random() * 12,
      delay: Math.random() * 8,
      duration: 6 + Math.random() * 10,
      opacity: 0.08 + Math.random() * 0.15,
      shape: Math.random() > 0.5 ? 'circle' : 'diamond',
    }))
  }, [count])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute animate-float"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            backgroundColor: color,
            opacity: p.opacity,
            borderRadius: p.shape === 'circle' ? '50%' : '2px',
            transform: p.shape === 'diamond' ? 'rotate(45deg)' : undefined,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
      <style>{`
        @keyframes float-particle {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(30px, -40px) scale(1.3);
          }
          50% {
            transform: translate(-20px, -70px) scale(0.8);
          }
          75% {
            transform: translate(-40px, -20px) scale(1.2);
          }
        }
        .animate-float {
          animation: float-particle linear infinite;
        }
      `}</style>
    </div>
  )
}
