interface Props {
  code: string
  size?: number
}

export default function TypeAvatar({ code, size = 80 }: Props) {
  const s = size
  const half = s / 2
  const q = s / 4

  return (
    <svg
      width={s}
      height={s}
      viewBox={`0 0 ${s} ${s}`}
      xmlns="http://www.w3.org/2000/svg"
      className="flex-shrink-0"
      aria-label={`${code} avatar`}
    >
      <defs>
        <filter id={`glow-${code}`}>
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {renderAvatar(code, s, half, q)}
    </svg>
  )
}

function renderAvatar(code: string, s: number, half: number, q: number) {
  switch (code) {
    // ── Analysts ──
    case 'INTJ':
      return (
        <g>
          <rect x={q * 0.5} y={q * 0.5} width={s - q} height={s - q} rx={4} fill="none" stroke="currentColor" strokeWidth={3} opacity={0.4} />
          <rect x={q} y={q} width={s - q * 2} height={s - q * 2} rx={4} fill="none" stroke="currentColor" strokeWidth={3} opacity={0.7} />
          <rect x={q * 1.5} y={q * 1.5} width={s - q * 3} height={s - q * 3} rx={4} fill="currentColor" opacity={0.9} />
          <line x1={q * 1.5} y1={q * 1.5} x2={s - q * 1.5} y2={s - q * 1.5} stroke="white" strokeWidth={2} opacity={0.6} />
        </g>
      )
    case 'INTP':
      return (
        <g>
          <circle cx={half} cy={half} r={q * 1.4} fill="none" stroke="currentColor" strokeWidth={3} opacity={0.8} />
          <circle cx={half} cy={half} r={q * 0.6} fill="currentColor" opacity={0.5} />
          {[0, 60, 120, 180, 240, 300].map((deg) => (
            <line
              key={deg}
              x1={half + Math.cos((deg * Math.PI) / 180) * q * 0.7}
              y1={half + Math.sin((deg * Math.PI) / 180) * q * 0.7}
              x2={half + Math.cos((deg * Math.PI) / 180) * q * 1.3}
              y2={half + Math.sin((deg * Math.PI) / 180) * q * 1.3}
              stroke="currentColor"
              strokeWidth={2}
              opacity={0.6}
            />
          ))}
        </g>
      )
    case 'ENTJ':
      return (
        <g>
          <polygon points={`${half},${q * 0.4} ${s - q * 0.6},${s - q} ${q * 0.6},${s - q}`} fill="currentColor" opacity={0.85} />
          <polygon points={`${half},${q * 1.2} ${s - q * 1.2},${s - q * 0.8} ${q * 1.2},${s - q * 0.8}`} fill="white" opacity={0.7} />
          <rect x={q * 1.2} y={s - q * 0.7} width={q * 1.6} height={q * 0.4} rx={2} fill="currentColor" opacity={0.6} />
        </g>
      )
    case 'ENTP':
      return (
        <g>
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
            <line
              key={deg}
              x1={half}
              y1={half}
              x2={half + Math.cos((deg * Math.PI) / 180) * q * 1.6}
              y2={half + Math.sin((deg * Math.PI) / 180) * q * 1.6}
              stroke="currentColor"
              strokeWidth={2.5}
              opacity={0.5}
            />
          ))}
          <circle cx={half} cy={half} r={q * 0.7} fill="currentColor" opacity={0.9} />
          <circle cx={half + q * 0.5} cy={half - q * 0.8} r={q * 0.25} fill="currentColor" opacity={0.7} />
          <circle cx={half - q * 0.6} cy={half + q * 0.6} r={q * 0.2} fill="currentColor" opacity={0.6} />
          <circle cx={half + q * 0.8} cy={half + q * 0.4} r={q * 0.3} fill="currentColor" opacity={0.5} />
        </g>
      )

    // ── Diplomats ──
    case 'INFJ':
      return (
        <g>
          <circle cx={half} cy={half} r={q * 1.5} fill="none" stroke="currentColor" strokeWidth={2} opacity={0.3} />
          <circle cx={half} cy={half} r={q} fill="none" stroke="currentColor" strokeWidth={2.5} opacity={0.6} />
          <polygon
            points={starPoints(half, half, q * 0.7, q * 0.3, 6)}
            fill="currentColor"
            opacity={0.9}
          />
        </g>
      )
    case 'INFP':
      return (
        <g>
          {[0, 72, 144, 216, 288].map((deg, i) => (
            <ellipse
              key={deg}
              cx={half + Math.cos((deg * Math.PI) / 180) * q * 0.5}
              cy={half + Math.sin((deg * Math.PI) / 180) * q * 0.5}
              rx={q * 0.5}
              ry={q}
              transform={`rotate(${deg} ${half + Math.cos((deg * Math.PI) / 180) * q * 0.5} ${half + Math.sin((deg * Math.PI) / 180) * q * 0.5})`}
              fill="currentColor"
              opacity={0.25 + i * 0.12}
            />
          ))}
          <circle cx={half} cy={half} r={q * 0.4} fill="currentColor" opacity={0.8} />
        </g>
      )
    case 'ENFJ':
      return (
        <g>
          <path
            d={`M${half},${q * 1.8} C${half - q * 1.5},${q * 0.3} ${half},${q * 0.2} ${half},${q * 0.5} C${half},${q * 0.2} ${half + q * 1.5},${q * 0.3} ${half},${q * 1.8}`}
            fill="currentColor"
            opacity={0.8}
          />
          <circle cx={half - q * 0.5} cy={q * 0.8} r={q * 0.15} fill="white" opacity={0.8} />
          <circle cx={half + q * 0.5} cy={q * 0.8} r={q * 0.15} fill="white" opacity={0.8} />
          <circle cx={half} cy={q * 1.3} r={q * 0.12} fill="white" opacity={0.6} />
        </g>
      )
    case 'ENFP':
      return (
        <g>
          <path
            d={`M${half},${q * 0.3} Q${s - q * 0.3},${half} ${half},${s - q * 0.3} Q${q * 0.3},${half} ${half},${q * 0.3}`}
            fill="currentColor"
            opacity={0.7}
          />
          {[
            { x: q * 0.8, y: half - q * 0.4 },
            { x: s - q * 0.9, y: q * 1.1 },
            { x: q * 1.2, y: s - q * 0.9 },
            { x: s - q, y: half + q * 0.3 },
          ].map((p, i) => (
            <circle key={i} cx={p.x} cy={p.y} r={q * 0.3} fill="currentColor" opacity={0.45 + i * 0.1} />
          ))}
        </g>
      )

    // ── Sentinels ──
    case 'ISTJ':
      return (
        <g>
          {[0, 1, 2].map((row) =>
            [0, 1, 2].map((col) => (
              <rect
                key={`${row}-${col}`}
                x={q * 0.6 + col * q * 1.1}
                y={q * 0.6 + row * q * 1.1}
                width={q * 0.85}
                height={q * 0.85}
                rx={3}
                fill="currentColor"
                opacity={row === 1 && col === 1 ? 0.9 : 0.35}
              />
            )),
          )}
        </g>
      )
    case 'ISFJ':
      return (
        <g>
          <path
            d={`M${half},${q * 0.4} L${s - q * 0.8},${q * 1.2} Q${s - q * 0.3},${half} ${s - q * 0.8},${s - q * 1.2} L${half},${s - q * 0.4} L${q * 0.8},${s - q * 1.2} Q${q * 0.3},${half} ${q * 0.8},${q * 1.2} Z`}
            fill="currentColor"
            opacity={0.75}
          />
          <circle cx={half} cy={half - q * 0.2} r={q * 0.35} fill="white" opacity={0.7} />
        </g>
      )
    case 'ESTJ':
      return (
        <g>
          <polygon points={`${half},${q * 0.3} ${s - q * 0.5},${s - q * 0.6} ${q * 0.5},${s - q * 0.6}`} fill="currentColor" opacity={0.8} />
          <rect x={q * 0.8} y={s - q * 0.5} width={q * 0.5} height={q * 0.5} rx={2} fill="currentColor" opacity={0.5} />
          <rect x={half + q * 0.1} y={s - q * 0.5} width={q * 0.5} height={q * 0.5} rx={2} fill="currentColor" opacity={0.5} />
        </g>
      )
    case 'ESFJ':
      return (
        <g>
          <circle cx={half - q * 0.4} cy={half - q * 0.3} r={q * 0.9} fill="none" stroke="currentColor" strokeWidth={3} opacity={0.5} />
          <circle cx={half + q * 0.4} cy={half + q * 0.3} r={q * 0.9} fill="none" stroke="currentColor" strokeWidth={3} opacity={0.5} />
          <circle cx={half} cy={half} r={q * 0.5} fill="currentColor" opacity={0.8} />
          <line x1={half - q * 0.3} y1={half} x2={half + q * 0.3} y2={half} stroke="white" strokeWidth={2} opacity={0.6} />
          <line x1={half} y1={half - q * 0.3} x2={half} y2={half + q * 0.3} stroke="white" strokeWidth={2} opacity={0.6} />
        </g>
      )

    // ── Explorers ──
    case 'ISTP':
      return (
        <g>
          <line x1={half} y1={q * 0.6} x2={s - q * 0.6} y2={s - q * 0.6} stroke="currentColor" strokeWidth={4} opacity={0.6} />
          <line x1={q * 0.6} y1={half} x2={s - q * 0.6} y2={half} stroke="currentColor" strokeWidth={4} opacity={0.4} />
          <circle cx={s - q * 1.2} cy={s - q * 1.2} r={q * 0.55} fill="currentColor" opacity={0.85} />
          <line x1={q * 0.6} y1={half} x2={half} y2={q * 0.6} stroke="currentColor" strokeWidth={3} opacity={0.5} />
        </g>
      )
    case 'ISFP':
      return (
        <g>
          <ellipse cx={half - q * 0.3} cy={half + q * 0.2} rx={q * 0.6} ry={q * 1.3} transform={`rotate(-30 ${half - q * 0.3} ${half + q * 0.2})`} fill="currentColor" opacity={0.35} />
          <ellipse cx={half + q * 0.3} cy={half - q * 0.3} rx={q * 0.45} ry={q * 1.4} transform={`rotate(20 ${half + q * 0.3} ${half - q * 0.3})`} fill="currentColor" opacity={0.6} />
          <circle cx={half} cy={half} r={q * 0.3} fill="currentColor" opacity={0.85} />
        </g>
      )
    case 'ESTP':
      return (
        <g>
          <polygon points={`${half},${q * 0.3} ${s - q * 0.6},${half} ${q * 0.6},${half}`} fill="currentColor" opacity={0.8} />
          <polygon points={`${q * 0.6},${half} ${s - q * 0.6},${half} ${half},${s - q * 0.3}`} fill="currentColor" opacity={0.4} />
          <line x1={half} y1={half - q * 0.3} x2={half - q * 0.5} y2={half + q * 1.2} stroke="currentColor" strokeWidth={3} opacity={0.7} />
          <line x1={half} y1={half - q * 0.3} x2={half + q * 0.5} y2={half + q * 1.2} stroke="currentColor" strokeWidth={3} opacity={0.7} />
        </g>
      )
    case 'ESFP':
      return (
        <g>
          <circle cx={half} cy={half} r={q * 0.6} fill="currentColor" opacity={0.8} />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
            <line
              key={deg}
              x1={half + Math.cos((deg * Math.PI) / 180) * q * 0.65}
              y1={half + Math.sin((deg * Math.PI) / 180) * q * 0.65}
              x2={half + Math.cos((deg * Math.PI) / 180) * q * 1.6}
              y2={half + Math.sin((deg * Math.PI) / 180) * q * 1.6}
              stroke="currentColor"
              strokeWidth={3}
              strokeLinecap="round"
              opacity={0.6}
            />
          ))}
        </g>
      )
    default:
      return <circle cx={half} cy={half} r={q * 1.2} fill="currentColor" opacity={0.6} />
  }
}

/** Generate star polygon points */
function starPoints(cx: number, cy: number, outerR: number, innerR: number, points: number): string {
  const result: string[] = []
  for (let i = 0; i < points * 2; i++) {
    const r = i % 2 === 0 ? outerR : innerR
    const angle = (i * Math.PI) / points - Math.PI / 2
    result.push(`${cx + Math.cos(angle) * r},${cy + Math.sin(angle) * r}`)
  }
  return result.join(' ')
}
