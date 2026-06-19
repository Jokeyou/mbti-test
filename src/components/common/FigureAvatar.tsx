interface Props {
  name: string
  size?: number
}

export default function FigureAvatar({ name, size = 80 }: Props) {
  const s = size

  return (
    <svg width={s} height={s} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0" aria-label={`${name} portrait`}>
      {renderFigure(name)}
    </svg>
  )
}

function renderFigure(name: string) {
  switch (name) {
    // ── Strategist, feathered fan, headband ──
    case '诸葛亮':
      return (
        <g>
          {/* Head */}
          <ellipse cx={50} cy={55} rx={24} ry={28} fill="#F5D0A9" />
          {/* Headband 纶巾 */}
          <rect x={26} y={30} width={48} height={8} rx={3} fill="#2C3E50" />
          <rect x={24} y={28} width={52} height={6} rx={2} fill="#34495E" />
          {/* Eyes - calm, knowing */}
          <ellipse cx={42} cy={52} rx={4} ry={2.5} fill="#2C3E50" />
          <ellipse cx={58} cy={52} rx={4} ry={2.5} fill="#2C3E50" />
          <circle cx={44} cy={51.5} r={1} fill="white" />
          <circle cx={60} cy={51.5} r={1} fill="white" />
          {/* Eyebrows */}
          <path d="M36 46 Q42 43 47 47" stroke="#2C3E50" strokeWidth={2} fill="none" />
          <path d="M64 46 Q58 43 53 47" stroke="#2C3E50" strokeWidth={2} fill="none" />
          {/* Long beard */}
          <path d="M38 70 Q50 95 62 70" fill="#1A1A2E" opacity={0.9} />
          <ellipse cx={50} cy={78} rx={10} ry={12} fill="#1A1A2E" />
          {/* Feathered fan 羽扇 (held at side) */}
          <ellipse cx={82} cy={40} rx={14} ry={22} fill="#F5F0E0" opacity={0.9} transform="rotate(15 82 40)" />
          <line x1={82} y1={62} x2={78} y2={78} stroke="#8B7355" strokeWidth={2.5} />
          {/* Subtle fan lines */}
          {[0, 1, 2, 3].map((i) => (
            <line key={i} x1={72 + i * 5} y1={30 + i * 7} x2={88 + i * 5} y2={30 + i * 7} stroke="#D4C5A9" strokeWidth={1} opacity={0.5} />
          ))}
        </g>
      )

    // ── Sage, white beard, simple robe ──
    case '老子':
      return (
        <g>
          {/* Body/robe */}
          <ellipse cx={50} cy={65} rx={30} ry={28} fill="#E8E0D5" />
          {/* Head - bald top, wisdom */}
          <ellipse cx={50} cy={40} rx={22} ry={20} fill="#F5D0A9" />
          <ellipse cx={50} cy={28} rx={18} ry={8} fill="#F5D0A9" />
          {/* Eyes - closed in meditation */}
          <path d="M38 42 Q42 45 46 42" stroke="#333" strokeWidth={2} fill="none" />
          <path d="M54 42 Q58 45 62 42" stroke="#333" strokeWidth={2} fill="none" />
          {/* Long white beard */}
          <path d="M35 52 Q50 88 65 52" fill="white" />
          <rect x={38} y={52} width={24} height={2} rx={1} fill="white" />
          {/* Eyebrows - long, white */}
          <path d="M32 36 Q42 32 48 36" stroke="white" strokeWidth={3} fill="none" />
          <path d="M68 36 Q58 32 52 36" stroke="white" strokeWidth={3} fill="none" />
          {/* Staff */}
          <line x1={78} y1={64} x2={85} y2={20} stroke="#8B7355" strokeWidth={3} />
        </g>
      )

    // ── Imperial crown with tassels ──
    case '秦始皇':
      return (
        <g>
          <ellipse cx={50} cy={55} rx={24} ry={26} fill="#E8C99B" />
          {/* Imperial crown 冕旒 */}
          <rect x={26} y={20} width={48} height={14} rx={4} fill="#1A1A2E" />
          <rect x={30} y={18} width={40} height={5} rx={2} fill="#2C3E50" />
          {/* Tassels hanging from crown */}
          {[32, 40, 48, 56, 64].map((x, i) => (
            <line key={i} x1={x} y1={34} x2={x + (i - 2) * 3} y2={48} stroke="#C53030" strokeWidth={1.5} opacity={0.8} />
          ))}
          {/* Eyes - sharp, commanding */}
          <ellipse cx={42} cy={50} rx={3.5} ry={2} fill="#1A1A2E" />
          <ellipse cx={58} cy={50} rx={3.5} ry={2} fill="#1A1A2E" />
          {/* Eyebrows - angled up */}
          <path d="M37 46 L46 49" stroke="#1A1A2E" strokeWidth={2.5} />
          <path d="M63 46 L54 49" stroke="#1A1A2E" strokeWidth={2.5} />
          {/* Mustache */}
          <path d="M40 60 Q45 56 50 60" stroke="#1A1A2E" strokeWidth={1.5} fill="none" />
          <path d="M50 60 Q55 56 60 60" stroke="#1A1A2E" strokeWidth={1.5} fill="none" />
        </g>
      )

    // ── Butterfly, relaxed, playful ──
    case '庄子':
      return (
        <g>
          <ellipse cx={50} cy={52} rx={22} ry={24} fill="#F5D0A9" />
          {/* Messy hair */}
          <ellipse cx={50} cy={32} rx={22} ry={14} fill="#3D2B1F" />
          <path d="M28 30 Q22 20 30 28" fill="#3D2B1F" />
          {/* Eyes - half closed, dreamy */}
          <path d="M38 50 Q42 47 46 50" stroke="#333" strokeWidth={2} fill="none" />
          <path d="M54 50 Q58 47 62 50" stroke="#333" strokeWidth={2} fill="none" />
          {/* Gentle smile */}
          <path d="M44 56 Q50 61 56 56" stroke="#333" strokeWidth={1.5} fill="none" />
          {/* Butterfly */}
          <ellipse cx={78} cy={28} rx={7} ry={5} fill="#E8A0BF" opacity={0.7} transform="rotate(-20 78 28)" />
          <ellipse cx={72} cy={26} rx={7} ry={5} fill="#E8A0BF" opacity={0.7} transform="rotate(20 72 26)" />
          <circle cx={75} cy={27} r={1.5} fill="#333" />
        </g>
      )

    // ── Square hat (儒冠), teaching hands ──
    case '孔子':
      return (
        <g>
          <ellipse cx={50} cy={55} rx={22} ry={26} fill="#F5D0A9" />
          {/* Square scholar hat */}
          <rect x={30} y={22} width={40} height={8} rx={2} fill="#2C3E50" />
          <rect x={34} y={16} width={32} height={8} rx={2} fill="#34495E" />
          {/* Eyes - kind, wise */}
          <ellipse cx={42} cy={50} rx={3.5} ry={2.5} fill="#2C3E50" />
          <ellipse cx={58} cy={50} rx={3.5} ry={2.5} fill="#2C3E50" />
          {/* Kind smile */}
          <path d="M44 58 Q50 62 56 58" stroke="#2C3E50" strokeWidth={1.5} fill="none" />
          {/* Grey beard */}
          <path d="M37 68 Q50 92 63 68" fill="#A0A0A0" opacity={0.8} />
          {/* Hands clasped */}
          <ellipse cx={50} cy={74} rx={12} ry={6} fill="#F5D0A9" opacity={0.8} />
        </g>
      )

    // ── Straw hat, chrysanthemum, peaceful ──
    case '陶渊明':
      return (
        <g>
          <ellipse cx={50} cy={52} rx={22} ry={24} fill="#F5D0A9" />
          {/* Straw hat 斗笠 */}
          <ellipse cx={50} cy={22} rx={32} ry={10} fill="#D4A76A" />
          <ellipse cx={50} cy={20} rx={28} ry={8} fill="#C4955A" opacity={0.5} />
          <path d="M20 22 Q35 28 50 22 Q65 28 80 22" stroke="#B8894A" strokeWidth={2} fill="none" />
          {/* Eyes - looking down, calm */}
          <path d="M38 48 L46 50" stroke="#333" strokeWidth={2} />
          <path d="M62 48 L54 50" stroke="#333" strokeWidth={2} />
          {/* Gentle smile */}
          <path d="M44 54 Q50 57 56 54" stroke="#333" strokeWidth={1.5} fill="none" />
          {/* Chrysanthemum 菊花 */}
          <circle cx={78} cy={68} r={8} fill="#FFD700" opacity={0.8} />
          <circle cx={78} cy={68} r={3} fill="#DAA520" />
          {/* Simple robe */}
          <ellipse cx={50} cy={68} rx={28} ry={24} fill="#9B8E7A" opacity={0.5} />
        </g>
      )

    // ── Monk robe, bald, pilgrim staff ──
    case '玄奘':
      return (
        <g>
          {/* Monk robe */}
          <ellipse cx={50} cy={68} rx={30} ry={26} fill="#8B4513" opacity={0.7} />
          <rect x={32} y={54} width={36} height={20} rx={4} fill="#A0522D" opacity={0.6} />
          {/* Bald head */}
          <ellipse cx={50} cy={40} rx={22} ry={20} fill="#F5D0A9" />
          <ellipse cx={50} cy={28} rx={20} ry={10} fill="#F5D0A9" />
          {/* Eyes - serene */}
          <ellipse cx={43} cy={42} rx={3} ry={2} fill="#333" />
          <ellipse cx={57} cy={42} rx={3} ry={2} fill="#333" />
          {/* Gentle smile */}
          <path d="M45 50 Q50 53 55 50" stroke="#333" strokeWidth={1.5} fill="none" />
          {/* Monk staff 禅杖 (left side) */}
          <line x1={18} y1={74} x2={14} y2={16} stroke="#8B7355" strokeWidth={3} />
          <circle cx={14} cy={16} r={5} fill="none" stroke="#DAA520" strokeWidth={2} />
          <circle cx={14} cy={28} r={4} fill="none" stroke="#DAA520" strokeWidth={1.5} />
        </g>
      )

    // ── Drunken poet, raised cup, wild hair ──
    case '李白':
      return (
        <g>
          <ellipse cx={50} cy={52} rx={22} ry={24} fill="#F5D0A9" />
          {/* Wild flowing hair */}
          <path d="M28 38 Q22 20 35 28 Q40 15 50 22 Q60 15 65 28 Q78 20 72 38" fill="#1A1A2E" />
          {/* Eyes - bright, slightly squinted */}
          <path d="M38 50 Q42 47 46 50" stroke="#333" strokeWidth={2} fill="none" />
          <path d="M54 50 Q58 47 62 50" stroke="#333" strokeWidth={2} fill="none" />
          {/* Happy mouth */}
          <path d="M44 57 Q50 62 56 57" stroke="#333" strokeWidth={1.5} fill="none" />
          {/* Wine cup raised */}
          <path d="M72 48 L68 42 L76 42 Z" fill="#C53030" opacity={0.7} />
          <rect x={67} y={42} width={10} height={6} rx={2} fill="#E8C99B" />
          {/* Robe */}
          <ellipse cx={50} cy={70} rx={26} ry={22} fill="#E8E0D5" opacity={0.6} />
        </g>
      )

    // ── Judge hat, stern face, crescent moon ──
    case '包拯':
      return (
        <g>
          <ellipse cx={50} cy={52} rx={22} ry={24} fill="#5C4033" />
          {/* Judge's hat 乌纱帽 */}
          <rect x={28} y={18} width={44} height={12} rx={3} fill="#1A1A2E" />
          <rect x={24} y={30} width={52} height={4} rx={2} fill="#1A1A2E" />
          {/* Hat wings */}
          <ellipse cx={14} cy={30} rx={12} ry={3} fill="#1A1A2E" />
          <ellipse cx={86} cy={30} rx={12} ry={3} fill="#1A1A2E" />
          {/* Crescent moon on forehead */}
          <path d="M50 36 Q44 32 46 40 Q48 34 50 36" fill="#FFD700" />
          {/* Fierce eyes */}
          <ellipse cx={42} cy={48} rx={3.5} ry={2.5} fill="white" />
          <ellipse cx={58} cy={48} rx={3.5} ry={2.5} fill="white" />
          <circle cx={43} cy={48} r={1.5} fill="#1A1A2E" />
          <circle cx={57} cy={48} r={1.5} fill="#1A1A2E" />
          {/* Stern brows */}
          <path d="M36 44 L46 46" stroke="#1A1A2E" strokeWidth={3} />
          <path d="M64 44 L54 46" stroke="#1A1A2E" strokeWidth={3} />
          {/* Beard */}
          <path d="M38 68 Q50 90 62 68" fill="#1A1A2E" opacity={0.85} />
        </g>
      )

    // ── Armor helmet, gentle eyes, female warrior ──
    case '花木兰':
      return (
        <g>
          {/* Armor shoulders */}
          <ellipse cx={50} cy={68} rx={32} ry={22} fill="#6B7B8D" opacity={0.5} />
          <ellipse cx={50} cy={68} rx={30} ry={20} fill="#7B8D9E" opacity={0.4} />
          <ellipse cx={50} cy={52} rx={22} ry={24} fill="#F5D0A9" />
          {/* Helmet */}
          <path d="M26 44 Q26 18 50 20 Q74 18 74 44" fill="#5C6B7A" />
          <rect x={28} y={16} width={44} height={4} rx={2} fill="#4A5A6A" />
          {/* Red plume on helmet */}
          <path d="M50 16 Q55 4 60 8 Q58 12 55 14" fill="#C53030" />
          {/* Soft eyes */}
          <ellipse cx={42} cy={50} rx={3.5} ry={2.5} fill="#2C3E50" />
          <ellipse cx={58} cy={50} rx={3.5} ry={2.5} fill="#2C3E50" />
          <circle cx={44} cy={49.5} r={1} fill="white" />
          <circle cx={60} cy={49.5} r={1} fill="white" />
          {/* Determined small mouth */}
          <path d="M46 57 L54 57" stroke="#C53030" strokeWidth={1.5} />
        </g>
      )

    // ── Phoenix crown, commanding expression ──
    case '武则天':
      return (
        <g>
          <ellipse cx={50} cy={55} rx={22} ry={26} fill="#F5D0A9" />
          {/* Phoenix crown 凤冠 */}
          <path d="M28 30 Q22 10 35 20 Q40 8 50 16 Q60 8 65 20 Q78 10 72 30" fill="#C53030" />
          <path d="M32 30 Q35 14 42 22 Q48 12 50 18 Q52 12 58 22 Q65 14 68 30" fill="#DC143C" />
          {/* Gold details on crown */}
          <circle cx={35} cy={18} r={3} fill="#FFD700" />
          <circle cx={50} cy={12} r={3} fill="#FFD700" />
          <circle cx={65} cy={18} r={3} fill="#FFD700" />
          {/* Sharp, confident eyes */}
          <ellipse cx={42} cy={50} rx={3.5} ry={2} fill="#1A1A2E" />
          <ellipse cx={58} cy={50} rx={3.5} ry={2} fill="#1A1A2E" />
          {/* Eyeliner effect */}
          <path d="M36 48 Q42 46 46 49" stroke="#1A1A2E" strokeWidth={2} />
          <path d="M64 48 Q58 46 54 49" stroke="#1A1A2E" strokeWidth={2} />
          {/* Composed small mouth */}
          <ellipse cx={50} cy={58} rx={3} ry={1.5} fill="#C53030" />
          {/* Imperial collar */}
          <path d="M30 62 L50 78 L70 62" fill="#FFD700" opacity={0.4} />
        </g>
      )

    // ── Scholar hat, warm smile, raising cup ──
    case '苏轼':
      return (
        <g>
          <ellipse cx={50} cy={55} rx={22} ry={26} fill="#F5D0A9" />
          {/* Scholar hat 东坡巾 */}
          <rect x={28} y={22} width={44} height={12} rx={4} fill="#2C3E50" />
          <rect x={32} y={18} width={36} height={6} rx={3} fill="#34495E" />
          {/* Kind, warm eyes */}
          <ellipse cx={42} cy={52} rx={3} ry={2} fill="#2C3E50" />
          <ellipse cx={58} cy={52} rx={3} ry={2} fill="#2C3E50" />
          <circle cx={43} cy={51.5} r={0.8} fill="white" />
          <circle cx={59} cy={51.5} r={0.8} fill="white" />
          {/* Warm smile */}
          <path d="M42 62 Q50 68 58 62" stroke="#2C3E50" strokeWidth={1.5} fill="none" />
          {/* Beard */}
          <path d="M38 68 Q50 86 62 68" fill="#3D2B1F" opacity={0.7} />
          {/* Wine cup */}
          <rect x={74} y={56} width={10} height={8} rx={3} fill="#E8C99B" />
          <ellipse cx={79} cy={56} rx={5} ry={2} fill="white" opacity={0.3} />
        </g>
      )

    // ── Craftsman, rolled sleeves, holding tool ──
    case '鲁班':
      return (
        <g>
          <ellipse cx={50} cy={50} rx={22} ry={24} fill="#D4A574" />
          {/* Short, practical hair */}
          <ellipse cx={50} cy={30} rx={22} ry={12} fill="#2C1810" />
          {/* Focused eyes */}
          <ellipse cx={43} cy={48} rx={3} ry={2} fill="#333" />
          <ellipse cx={57} cy={48} rx={3} ry={2} fill="#333" />
          <circle cx={44} cy={47.5} r={0.8} fill="white" />
          <circle cx={58} cy={47.5} r={0.8} fill="white" />
          {/* Determined expression */}
          <path d="M46 55 L54 55" stroke="#333" strokeWidth={1.5} />
          {/* Saw tool */}
          <rect x={72} y={22} width={6} height={30} rx={2} fill="#8B7355" transform="rotate(20 75 37)" />
          <rect x={70} y={18} width={10} height={6} rx={2} fill="#6B5B45" />
          {/* Rough hands holding it */}
          <ellipse cx={72} cy={52} rx={6} ry={4} fill="#D4A574" />
          {/* Worker's top */}
          <ellipse cx={50} cy={64} rx={28} ry={24} fill="#8B7355" opacity={0.5} />
        </g>
      )

    // ── Scholar, brush in hand, elegant ──
    case '王羲之':
      return (
        <g>
          <ellipse cx={50} cy={52} rx={22} ry={24} fill="#F5D0A9" />
          {/* Scholar hair bun */}
          <ellipse cx={50} cy={30} rx={20} ry={14} fill="#1A1A2E" />
          <circle cx={50} cy={18} r={6} fill="#2C3E50" />
          {/* Elegant, refined eyes */}
          <ellipse cx={42} cy={48} rx={3} ry={2} fill="#2C3E50" />
          <ellipse cx={58} cy={48} rx={3} ry={2} fill="#2C3E50" />
          {/* Slight smile */}
          <path d="M45 56 Q50 59 55 56" stroke="#2C3E50" strokeWidth={1.2} fill="none" />
          {/* Holding brush */}
          <line x1={76} y1={32} x2={82} y2={72} stroke="#8B7355" strokeWidth={3} />
          <ellipse cx={82} cy={72} rx={4} ry={2} fill="#1A1A2E" />
          {/* Brush tip */}
          <path d="M82 72 L86 80 L82 82 L78 80 Z" fill="#1A1A2E" opacity={0.7} />
        </g>
      )

    // ── Red face, long black beard, green blade ──
    case '关羽':
      return (
        <g>
          {/* Red face */}
          <ellipse cx={50} cy={52} rx={22} ry={26} fill="#C0392B" />
          {/* Green headscarf */}
          <rect x={30} y={28} width={40} height={10} rx={4} fill="#27AE60" />
          {/* Fierce phoenix eyes 丹凤眼 */}
          <path d="M35 46 L42 50 L49 46" stroke="#1A1A2E" strokeWidth={2.5} fill="none" />
          <path d="M65 46 L58 50 L51 46" stroke="#1A1A2E" strokeWidth={2.5} fill="none" />
          <circle cx={42} cy={49} r={2} fill="white" />
          <circle cx={58} cy={49} r={2} fill="white" />
          <circle cx={43} cy={49} r={1} fill="#1A1A2E" />
          <circle cx={57} cy={49} r={1} fill="#1A1A2E" />
          {/* Eyebrows like sleeping silkworms */}
          <path d="M33 42 Q42 38 49 42" stroke="#1A1A2E" strokeWidth={3} fill="none" />
          <path d="M67 42 Q58 38 51 42" stroke="#1A1A2E" strokeWidth={3} fill="none" />
          {/* Epic black beard */}
          <path d="M34 68 Q50 98 66 68" fill="#0A0A0A" />
          <rect x={38} y={66} width={24} height={3} rx={1} fill="#0A0A0A" />
          {/* Green Dragon Blade 青龙偃月刀 */}
          <line x1={82} y1={20} x2={72} y2={78} stroke="#8B7355" strokeWidth={3} />
          <path d="M82 20 L92 10 L96 18 L86 26 Z" fill="#27AE60" opacity={0.8} />
          <path d="M82 20 Q88 14 94 12" stroke="#27AE60" strokeWidth={2} fill="none" />
        </g>
      )

    // ── Flowy hair, romantic, playful ──
    case '唐寅':
    case '唐伯虎':
      return (
        <g>
          <ellipse cx={50} cy={52} rx={22} ry={24} fill="#F5D0A9" />
          {/* Flowing scholar hair */}
          <path d="M28 40 Q24 24 34 22 Q30 10 46 18 Q50 8 54 18 Q70 10 66 22 Q76 24 72 40" fill="#2C1810" />
          {/* Playful eyes */}
          <ellipse cx={42} cy={50} rx={3.5} ry={2.5} fill="#2C3E50" />
          <ellipse cx={58} cy={50} rx={3.5} ry={2.5} fill="#2C3E50" />
          <circle cx={44} cy={49.5} r={1} fill="white" />
          <circle cx={60} cy={49.5} r={1} fill="white" />
          {/* Charming smile */}
          <path d="M42 58 Q50 65 58 58" stroke="#2C3E50" strokeWidth={1.5} fill="none" />
          {/* Folding fan 折扇 */}
          <path d="M74 38 L88 24 L92 30 L78 44 Z" fill="#FFE4B5" opacity={0.8} />
          <path d="M74 38 L92 30" stroke="#8B7355" strokeWidth={1} />
          <line x1={76} y1={40} x2={88} y2={31} stroke="#D4A76A" strokeWidth={0.5} />
        </g>
      )

    // ── Fallback seal avatar ──
    default:
      return (
        <g>
          <rect x={15} y={15} width={70} height={70} rx={8} fill="#C53030" opacity={0.9} />
          <text x={50} y={62} textAnchor="middle" fill="white" fontSize={28} fontWeight={700} fontFamily="serif">
            {name.length > 2 ? name[0] + name[2] : name}
          </text>
        </g>
      )
  }
}
