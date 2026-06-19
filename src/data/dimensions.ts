export interface DimensionInfo {
  id: string
  label: string
  labelEn: string
  left: string
  right: string
  leftDesc: string
  leftDescEn: string
  rightDesc: string
  rightDescEn: string
}

export const dimensions: DimensionInfo[] = [
  {
    id: 'EI',
    label: '精力来源',
    labelEn: 'Energy',
    left: 'E 外向',
    right: 'I 内向',
    leftDesc: '从外部世界和社交互动中获取能量',
    leftDescEn: 'Gain energy from the outer world and social interaction',
    rightDesc: '从内心世界和独处思考中获取能量',
    rightDescEn: 'Gain energy from inner reflection and solitude',
  },
  {
    id: 'SN',
    label: '信息获取',
    labelEn: 'Information',
    left: 'S 实感',
    right: 'N 直觉',
    leftDesc: '关注具体、实际的信息和细节',
    leftDescEn: 'Focus on concrete, practical information and details',
    rightDesc: '关注整体模式、联系和可能性',
    rightDescEn: 'Focus on patterns, connections and possibilities',
  },
  {
    id: 'TF',
    label: '决策方式',
    labelEn: 'Decision',
    left: 'T 理性',
    right: 'F 感性',
    leftDesc: '基于逻辑、原则和客观事实做决定',
    leftDescEn: 'Decide based on logic, principles and objective facts',
    rightDesc: '基于价值观、情感和人际和谐做决定',
    rightDescEn: 'Decide based on values, emotions and interpersonal harmony',
  },
  {
    id: 'JP',
    label: '生活态度',
    labelEn: 'Lifestyle',
    left: 'J 判断',
    right: 'P 感知',
    leftDesc: '偏好有计划、有条理的生活方式',
    leftDescEn: 'Prefer planned, organized and structured lifestyle',
    rightDesc: '偏好灵活、随性、开放的生活方式',
    rightDescEn: 'Prefer flexible, spontaneous and open-ended lifestyle',
  },
]
