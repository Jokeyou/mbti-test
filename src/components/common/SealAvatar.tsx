interface Props {
  name: string
  size?: number
}

// Get 1-2 key characters from a Chinese name for the seal
function getSealChars(name: string): string {
  if (name.length <= 2) return name
  // For 3-character names like "诸葛亮", use first and last char
  if (name.length === 3) return name[0] + name[2]
  return name.slice(0, 2)
}

export default function SealAvatar({ name, size = 80 }: Props) {
  const chars = getSealChars(name)
  const h = size
  const pad = h * 0.12

  return (
    <svg
      width={h}
      height={h}
      viewBox={`0 0 ${h} ${h}`}
      xmlns="http://www.w3.org/2000/svg"
      className="flex-shrink-0"
      aria-label={`${name} 印章`}
    >
      {/* Outer border */}
      <rect
        x={pad * 0.6}
        y={pad * 0.6}
        width={h - pad * 1.2}
        height={h - pad * 1.2}
        rx={h * 0.08}
        fill="#C53030"
        opacity={0.95}
      />
      {/* Inner border */}
      <rect
        x={pad}
        y={pad}
        width={h - pad * 2}
        height={h - pad * 2}
        rx={h * 0.04}
        fill="none"
        stroke="rgba(255,255,255,0.4)"
        strokeWidth={1.5}
      />
      {/* Outer decorative border */}
      <rect
        x={pad * 1.3}
        y={pad * 1.3}
        width={h - pad * 2.6}
        height={h - pad * 2.6}
        rx={h * 0.03}
        fill="none"
        stroke="rgba(255,255,255,0.25)"
        strokeWidth={0.8}
      />
      {/* Text */}
      <text
        x={h / 2}
        y={h / 2}
        textAnchor="middle"
        dominantBaseline="central"
        fill="white"
        fontSize={chars.length <= 2 ? h * 0.38 : h * 0.3}
        fontWeight={700}
        fontFamily="serif"
        letterSpacing={chars.length <= 2 ? '0.05em' : '0.02em'}
      >
        {chars}
      </text>
    </svg>
  )
}
