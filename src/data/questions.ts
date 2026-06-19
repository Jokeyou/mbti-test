export type Dimension = 'EI' | 'SN' | 'TF' | 'JP'

export interface Question {
  id: number
  text: string
  textEn: string
  dimension: Dimension
  /** 'forward' = agree → first trait (E/S/T/J), 'reverse' = agree → second trait (I/N/F/P) */
  direction: 'forward' | 'reverse'
}

export const questions: Question[] = [
  // ========== E/I 维度 (7题) ==========
  { id: 1, text: '在社交聚会中，和很多人交流让我感到充满能量。', textEn: 'Socializing with many people at a party energizes me.', dimension: 'EI', direction: 'forward' },
  { id: 2, text: '比起和一群人相处，我更喜欢独自阅读或思考。', textEn: 'I prefer reading or thinking alone rather than being in a group.', dimension: 'EI', direction: 'reverse' },
  { id: 3, text: '在团队中讨论问题比独自思考更能激发我的灵感。', textEn: 'Discussing ideas in a team sparks my creativity more than thinking alone.', dimension: 'EI', direction: 'forward' },
  { id: 4, text: '长时间独处对我来说是一种享受，而不是煎熬。', textEn: 'Long periods of solitude feel enjoyable to me, not lonely.', dimension: 'EI', direction: 'reverse' },
  { id: 5, text: '我很容易和新认识的人展开对话。', textEn: 'I find it easy to start a conversation with someone I just met.', dimension: 'EI', direction: 'forward' },
  { id: 6, text: '经历一整天社交活动后，我需要独处来恢复精力。', textEn: 'After a full day of social activities, I need alone time to recharge.', dimension: 'EI', direction: 'reverse' },
  { id: 7, text: '我倾向于先开口在群体中表达自己的想法。', textEn: 'I tend to speak up first and share my thoughts in a group.', dimension: 'EI', direction: 'forward' },

  // ========== S/N 维度 (7题) ==========
  { id: 8, text: '我更信任具体的、可以验证的事实，而非直觉。', textEn: 'I trust concrete, verifiable facts more than gut feelings.', dimension: 'SN', direction: 'forward' },
  { id: 9, text: '我经常沉浸在各种想象和假设性的脑洞中。', textEn: 'I often get lost in imaginative scenarios and "what if" thoughts.', dimension: 'SN', direction: 'reverse' },
  { id: 10, text: '在处理事务时，我专注于眼前的细节而非未来的可能性。', textEn: 'When handling tasks, I focus on present details rather than future possibilities.', dimension: 'SN', direction: 'forward' },
  { id: 11, text: '我喜欢探索抽象的概念和理论，而不是停留在具体操作层面。', textEn: 'I enjoy exploring abstract concepts and theories more than hands-on details.', dimension: 'SN', direction: 'reverse' },
  { id: 12, text: '我更愿意遵循已有的、经过验证的方法来完成任务。', textEn: 'I prefer following established, proven methods to get things done.', dimension: 'SN', direction: 'forward' },
  { id: 13, text: '比起关注实用性，我对事物背后的意义和联系更感兴趣。', textEn: 'I care more about the meaning and connections behind things than their practical use.', dimension: 'SN', direction: 'reverse' },
  { id: 14, text: '我更习惯于按步骤、按流程做事，不喜欢天马行空。', textEn: 'I prefer step-by-step processes and dislike unstructured brainstorming.', dimension: 'SN', direction: 'forward' },

  // ========== T/F 维度 (7题) ==========
  { id: 15, text: '在做决定时，逻辑分析比个人感受更重要。', textEn: 'When making decisions, logical analysis matters more than personal feelings.', dimension: 'TF', direction: 'forward' },
  { id: 16, text: '当朋友情绪低落时，我首先做的是理解他的感受，而非提供解决方案。', textEn: 'When a friend is upset, I first try to understand their feelings rather than offer solutions.', dimension: 'TF', direction: 'reverse' },
  { id: 17, text: '我认为原则和公平比和谐的气氛更重要。', textEn: 'I believe principles and fairness are more important than maintaining harmony.', dimension: 'TF', direction: 'forward' },
  { id: 18, text: '看到他人遇到困难时，我的同理心往往先于理性分析。', textEn: 'When I see someone struggling, my empathy kicks in before my analytical side.', dimension: 'TF', direction: 'reverse' },
  { id: 19, text: '我更看重一个人做事的效率，而不是他是否讨人喜欢。', textEn: 'I value a person\'s efficiency more than how likable they are.', dimension: 'TF', direction: 'forward' },
  { id: 20, text: '我很容易被他人的情绪感染，感同身受。', textEn: 'I easily pick up on other people\'s emotions and feel them deeply.', dimension: 'TF', direction: 'reverse' },
  { id: 21, text: '面对批评，我更希望对方直接指出问题所在，而不是委婉表达。', textEn: 'When receiving criticism, I prefer direct feedback over sugar-coated words.', dimension: 'TF', direction: 'forward' },

  // ========== J/P 维度 (7题) ==========
  { id: 22, text: '我喜欢制定详细的计划并严格执行。', textEn: 'I like making detailed plans and following them strictly.', dimension: 'JP', direction: 'forward' },
  { id: 23, text: '我习惯保持选择的开放性，不喜欢过早确定所有细节。', textEn: 'I prefer keeping my options open rather than locking in details early.', dimension: 'JP', direction: 'reverse' },
  { id: 24, text: '在旅行前，我会做好详细的攻略和行程安排。', textEn: 'Before a trip, I plan a detailed itinerary and schedule.', dimension: 'JP', direction: 'forward' },
  { id: 25, text: '我经常在截止日期临近时临时爆发，效率反而更高。', textEn: 'I often work best under pressure when a deadline is approaching.', dimension: 'JP', direction: 'reverse' },
  { id: 26, text: '完成一件事后打勾的成就感让我非常满足。', textEn: 'Checking off a completed task gives me deep satisfaction.', dimension: 'JP', direction: 'forward' },
  { id: 27, text: '生活中有一定的灵活性和意外，比一切都按计划进行更有趣。', textEn: 'A bit of spontaneity and surprise makes life more interesting than a rigid plan.', dimension: 'JP', direction: 'reverse' },
  { id: 28, text: '我的桌面和工作区通常保持整洁有序。', textEn: 'My desk and workspace are usually neat and organized.', dimension: 'JP', direction: 'forward' },
]
