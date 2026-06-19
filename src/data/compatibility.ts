/**
 * MBTI compatibility scoring.
 * Based on: middle letters (S/N, T/F) drive communication style;
 * opposite outer letters (E/I, J/P) create natural balance.
 *
 * - 95: Golden pair (match SN+TF, opposite EI+JP)
 * - 85: Excellent (match SN+TF)
 * - 70: Good (match SN or TF)
 * - 50: Growth opportunity (no match but opposite outer)
 * - 40: Challenging
 * - 80: Same type
 */

export interface CompatibilityEntry {
  type: string
  score: number
  label: string
  labelEn: string
}

const typeOrder = [
  'INTJ', 'INTP', 'ENTJ', 'ENTP',
  'INFJ', 'INFP', 'ENFJ', 'ENFP',
  'ISTJ', 'ISFJ', 'ESTJ', 'ESFJ',
  'ISTP', 'ISFP', 'ESTP', 'ESFP',
]

function computeScore(a: string, b: string): number {
  if (a === b) return 80

  const snMatch = a[1] === b[1]
  const tfMatch = a[2] === b[2]
  const eiMatch = a[0] === b[0]
  const jpMatch = a[3] === b[3]

  const midMatch = (snMatch ? 1 : 0) + (tfMatch ? 1 : 0)
  const outerOpposite = !eiMatch && !jpMatch

  if (midMatch === 2 && outerOpposite) return 95 // golden pair
  if (midMatch === 2) return 85 // excellent communication
  if (midMatch === 1 && outerOpposite) return 70 // good with balance
  if (midMatch === 1) return 65 // decent
  if (outerOpposite) return 50 // fascinating opposites
  return 42 // challenging
}

function scoreLabel(score: number): { zh: string; en: string } {
  if (score >= 90) return { zh: '天作之合', en: 'Golden Pair' }
  if (score >= 80) return { zh: '心有灵犀', en: 'Kindred Spirit' }
  if (score >= 65) return { zh: '志趣相投', en: 'Great Match' }
  if (score >= 50) return { zh: '和而不同', en: 'Harmonious Difference' }
  return { zh: '互为镜像', en: 'Mutual Growth' }
}

// Pre-compute full matrix
const matrix: Map<string, Map<string, number>> = new Map()
for (const a of typeOrder) {
  const row = new Map<string, number>()
  for (const b of typeOrder) {
    row.set(b, computeScore(a, b))
  }
  matrix.set(a, row)
}

/** Get compatibility score between two types */
export function getCompatibilityScore(a: string, b: string): number {
  return matrix.get(a)?.get(b) ?? 50
}

/** Get top N most compatible types for a given type, excluding itself */
export function getTopCompatible(type: string, n = 5): CompatibilityEntry[] {
  const scores: CompatibilityEntry[] = []
  for (const other of typeOrder) {
    if (other === type) continue
    const score = getCompatibilityScore(type, other)
    const label = scoreLabel(score)
    scores.push({ type: other, score, label: label.zh, labelEn: label.en })
  }
  return scores.sort((a, b) => b.score - a.score).slice(0, n)
}
