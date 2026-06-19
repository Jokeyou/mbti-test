import type { Question, Dimension } from '../data/questions'
import type { DimensionInfo } from '../data/dimensions'

export interface DimensionScore {
  dimension: Dimension
  rawScore: number // -14 ~ +14
  percentage: number // 0-100, higher = more toward the first trait
  leftLabel: string
  rightLabel: string
}

export interface TestResult {
  typeCode: string
  scores: DimensionScore[]
}

/**
 * Calculate MBTI test result from user's answers.
 *
 * @param questions - The full question list
 * @param answers - Record of question ID → answer value (-2 to +2)
 * @param dimensionInfos - Dimension metadata from data/dimensions
 * @returns TestResult with type code and dimension scores
 */
export function calculateResult(
  questions: Question[],
  answers: Record<number, number>,
  dimensionInfos: DimensionInfo[],
): TestResult {
  const dimensionMap: Record<Dimension, { sum: number; left: string; right: string }> = {
    EI: { sum: 0, left: '', right: '' },
    SN: { sum: 0, left: '', right: '' },
    TF: { sum: 0, left: '', right: '' },
    JP: { sum: 0, left: '', right: '' },
  }

  // Aggregate scores per dimension
  for (const q of questions) {
    const answer = answers[q.id] ?? 0
    const sign = q.direction === 'forward' ? 1 : -1
    dimensionMap[q.dimension].sum += answer * sign
  }

  // Build dimension scores with percentages
  const scores: DimensionScore[] = dimensionInfos.map((info) => {
    const dim = dimensionMap[info.id as Dimension]
    dim.left = info.left.substring(0, 1)
    dim.right = info.right.substring(0, 1)
    // Raw score range: -14 to +14 (7 questions × 2 max per question)
    const percentage = ((dim.sum + 14) / 28) * 100
    return {
      dimension: info.id as Dimension,
      rawScore: dim.sum,
      percentage: Math.round(percentage),
      leftLabel: info.left,
      rightLabel: info.right,
    }
  })

  // Determine type code
  const typeCode = scores
    .map((s) => {
      if (s.dimension === 'EI') return s.rawScore > 0 ? 'E' : 'I'
      if (s.dimension === 'SN') return s.rawScore > 0 ? 'S' : 'N'
      if (s.dimension === 'TF') return s.rawScore > 0 ? 'T' : 'F'
      if (s.dimension === 'JP') return s.rawScore > 0 ? 'J' : 'P'
      return '?'
    })
    .join('')

  return { typeCode, scores }
}
