export interface FourSymbol {
  id: string
  name: string
  nameEn: string
  emoji: string
  color: string
  colorLight: string
  direction: string
  element: string
  season: string
  types: string[] // MBTI codes
  description: string
  descriptionEn: string
}

export const fourSymbols: FourSymbol[] = [
  {
    id: 'dragon',
    name: '青龙',
    nameEn: 'Azure Dragon',
    emoji: '🐉',
    color: '#2E7D32',
    colorLight: '#E8F5E9',
    direction: '东',
    element: '木',
    season: '春',
    types: ['INTJ', 'INTP', 'ENTJ', 'ENTP'],
    description: '青龙属木，主生发、智慧与远见。分析家（NT）以思辨为剑、以逻辑为甲，如青龙般洞悉万象，运筹帷幄。',
    descriptionEn: 'The Azure Dragon governs growth, wisdom, and foresight. Analysts (NT) wield reason as their sword and logic as their armor — like the Dragon, they perceive all things and strategize from above.',
  },
  {
    id: 'phoenix',
    name: '朱雀',
    nameEn: 'Vermilion Bird',
    emoji: '🕊️',
    color: '#C62828',
    colorLight: '#FFEBEE',
    direction: '南',
    element: '火',
    season: '夏',
    types: ['INFJ', 'INFP', 'ENFJ', 'ENFP'],
    description: '朱雀属火，主热情、理想与温度。理想家（NF）以心为灯、以情为舟，如朱雀般以赤诚之焰照亮人间。',
    descriptionEn: 'The Vermilion Bird governs passion, ideals, and warmth. Diplomats (NF) carry the heart as their lantern and empathy as their vessel — like the Bird, they illuminate the world with their sincere flame.',
  },
  {
    id: 'tiger',
    name: '白虎',
    nameEn: 'White Tiger',
    emoji: '🐯',
    color: '#6D4C41',
    colorLight: '#EFEBE9',
    direction: '西',
    element: '金',
    season: '秋',
    types: ['ISTJ', 'ISFJ', 'ESTJ', 'ESFJ'],
    description: '白虎属金，主秩序、守护与刚正。守护者（SJ）以责任为重、以忠诚为本，如白虎般守护秩序，巍然不动。',
    descriptionEn: 'The White Tiger governs order, protection, and integrity. Sentinels (SJ) hold duty above all and loyalty as their foundation — like the Tiger, they guard the order with unwavering strength.',
  },
  {
    id: 'tortoise',
    name: '玄武',
    nameEn: 'Black Tortoise',
    emoji: '🐢',
    color: '#1565C0',
    colorLight: '#E3F2FD',
    direction: '北',
    element: '水',
    season: '冬',
    types: ['ISTP', 'ISFP', 'ESTP', 'ESFP'],
    description: '玄武属水，主适应、行动与沉静。探险家（SP）以身为器、以行为言，如玄武般灵活应变，深藏不露。',
    descriptionEn: 'The Black Tortoise governs adaptation, action, and depth. Explorers (SP) make their body their instrument and their actions their words — like the Tortoise, they adapt fluidly, concealing profound depths.',
  },
]

/** Get the Four Symbol for a given MBTI type code */
export function getSymbolForType(mbti: string): FourSymbol | undefined {
  return fourSymbols.find((s) => s.types.includes(mbti))
}
