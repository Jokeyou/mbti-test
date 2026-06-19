export interface PersonalityType {
  code: string
  name: string
  nameEn: string
  tagline: string
  taglineEn: string
  color: string
  description: string
  descriptionEn: string
  strengths: string[]
  strengthsEn: string[]
  weaknesses: string[]
  weaknessesEn: string[]
  careers: string[]
  careersEn: string[]
}

export const personalityTypes: Record<string, PersonalityType> = {
  INTJ: {
    code: 'INTJ',
    name: '建筑师',
    nameEn: 'Architect',
    tagline: '富有战略眼光的独立思考者',
    taglineEn: 'Imaginative and strategic thinkers with a plan for everything',
    color: '#4C51BF',
    description:
      'INTJ 型人格是战略规划大师。你拥有强大的独立思考能力，善于从复杂信息中提炼出清晰的模式。你不满足于维持现状，总是在寻求改进系统的方法。你对自己和他人都有很高的标准，这份对卓越的追求让你在专业领域往往出类拔萃。',
    descriptionEn:
      'INTJs are strategic masterminds. You possess strong independent thinking skills and excel at distilling clear patterns from complex information. Never content with the status quo, you constantly seek ways to improve systems. Your high standards for yourself and others, combined with your drive for excellence, make you stand out in professional fields.',
    strengths: ['战略思维出众，能一眼看透问题本质', '独立性强，不依赖他人就能推进复杂项目', '高标准，持续自我提升', '理性冷静，危机中保持清醒'],
    strengthsEn: ['Exceptional strategic thinking — see the core of problems instantly', 'Highly independent — advance complex projects without relying on others', 'High standards and continuous self-improvement', 'Calm and rational, especially during crises'],
    weaknesses: ['可能显得过于挑剔和冷漠', '对他人能力期待过高，不易信任', '不擅长表达情感，常被误解', '容易陷入过度分析的旋涡'],
    weaknessesEn: ['May appear overly critical and cold', 'Expect too much from others, hard to trust', 'Struggle to express emotions, often misunderstood', 'Prone to overthinking and analysis paralysis'],
    careers: ['科学家', '管理顾问', '大学教授', '软件工程师', '投资银行家'],
    careersEn: ['Scientist', 'Management Consultant', 'Professor', 'Software Engineer', 'Investment Banker'],
  },
  INTP: {
    code: 'INTP',
    name: '逻辑学家',
    nameEn: 'Logician',
    tagline: '永不停歇的思考者和创新者',
    taglineEn: 'Innovative inventors with an unquenchable thirst for knowledge',
    color: '#6B46C1',
    description:
      'INTP 型人格是知识探索的先锋。你对世界的运行机制充满好奇，享受拆解复杂概念并重新组合的过程。你的思维灵活而深刻，常常能提出别人想不出的创新方案。对你而言，探索真理本身比获得奖励更有意义。',
    descriptionEn:
      'INTPs are pioneers of knowledge exploration. You are endlessly curious about how the world works and enjoy deconstructing complex concepts to reassemble them. Your flexible and profound thinking often leads to innovative solutions others would never consider. For you, the pursuit of truth is more rewarding than any prize.',
    strengths: ['逻辑推理能力极强，善于抽象思考', '开放心态，愿意接受新观点', '创新能力突出，擅长解决复杂问题', '对知识有纯粹的热爱'],
    strengthsEn: ['Exceptional logical reasoning and abstract thinking', 'Open-minded and receptive to new ideas', 'Outstanding creativity in solving complex problems', 'Pure, genuine love for knowledge'],
    weaknesses: ['容易与现实世界脱节，忽略生活细节', '决策时可能过度犹豫不决', '社交场合可能显得疏离', '对日常重复任务缺乏耐心'],
    weaknessesEn: ['May disconnect from reality and overlook daily details', 'Can be overly indecisive', 'May seem detached in social situations', 'Little patience for routine, repetitive tasks'],
    careers: ['程序员', '数学家', '哲学家', 'AI 研究员', '游戏设计师'],
    careersEn: ['Programmer', 'Mathematician', 'Philosopher', 'AI Researcher', 'Game Designer'],
  },
  ENTJ: {
    code: 'ENTJ',
    name: '指挥官',
    nameEn: 'Commander',
    tagline: '天生的领导者，无惧任何挑战',
    taglineEn: 'Bold, imaginative and strong-willed leaders, always finding a way',
    color: '#C53030',
    description:
      'ENTJ 型人格是天生的领导者。你拥有强大的目标感和执行力，不畏惧做出艰难的决定。你善于把复杂的问题分解为可执行的计划，并带领团队一步步达成目标。你的自信和决断力让周围的人自然而然地追随你。',
    descriptionEn:
      'ENTJs are natural-born leaders. You possess a powerful sense of purpose and execution ability, never shying away from tough decisions. You excel at breaking complex problems into actionable plans and leading teams to achieve goals step by step. Your confidence and decisiveness naturally draw others to follow you.',
    strengths: ['领导力出色，能激励团队前进', '决策果断，不怕承担风险', '规划能力极强，目标导向', '沟通能力强，能清晰传达愿景'],
    strengthsEn: ['Outstanding leadership — inspire teams to move forward', 'Decisive and willing to take calculated risks', 'Exceptional planning ability, highly goal-oriented', 'Strong communicator who articulates vision clearly'],
    weaknesses: ['可能显得过于强势和控制', '对他人的情绪敏感度不够', '不耐烦于低效和拖延', '有时为了效率牺牲细节'],
    weaknessesEn: ['May come across as domineering and controlling', 'Low sensitivity to others\' emotions', 'Impatient with inefficiency and procrastination', 'Sometimes sacrifice details for speed'],
    careers: ['CEO/创始人', '政治家', '律师', '军事指挥官', '项目管理总监'],
    careersEn: ['CEO / Founder', 'Politician', 'Lawyer', 'Military Commander', 'Project Director'],
  },
  ENTP: {
    code: 'ENTP',
    name: '辩论家',
    nameEn: 'Debater',
    tagline: '聪明的头脑碰撞出无限可能',
    taglineEn: 'Smart and curious thinkers who cannot resist an intellectual challenge',
    color: '#B83280',
    description:
      'ENTP 型人格是思想的探险家。你享受思维的碰撞和观点的交锋，在辩论中不是为了争输赢，而是为了探索真理。你的大脑似乎永远在高速运转，不断产生新的想法。你不走寻常路的思维方式，常常带来意想不到的突破。',
    descriptionEn:
      'ENTPs are intellectual explorers. You relish the clash of ideas and debates — not to win or lose, but to uncover the truth. Your mind seems to run at full speed, constantly generating new ideas. Your unconventional thinking often leads to unexpected breakthroughs.',
    strengths: ['思维敏捷，善于发现多方可能性', '口才出众，善于辩论和说服', '创新精神强，不墨守成规', '适应力强，能快速应对变化'],
    strengthsEn: ['Quick-witted, skilled at spotting multiple possibilities', 'Eloquent, persuasive debater', 'Strong innovative spirit, never bound by convention', 'Highly adaptable to rapid change'],
    weaknesses: ['容易对已有项目失去兴趣', '有时为了辩论而辩论，激怒他人', '不擅长跟进日常琐事', '可能同时启动过多项目'],
    weaknessesEn: ['Easily lose interest in ongoing projects', 'May argue for the sake of arguing, annoying others', 'Poor at following through on routine details', 'May start too many projects at once'],
    careers: ['企业家', '律师', '创意总监', '风险投资人', '记者'],
    careersEn: ['Entrepreneur', 'Lawyer', 'Creative Director', 'Venture Capitalist', 'Journalist'],
  },
  INFJ: {
    code: 'INFJ',
    name: '提倡者',
    nameEn: 'Advocate',
    tagline: '用理想主义照亮世界的引路人',
    taglineEn: 'Quiet and mystical, yet inspiring and tireless idealists',
    color: '#38A169',
    description:
      'INFJ 型人格是安静而有深远影响力的理想主义者。你拥有非凡的直觉和同理心，能深刻理解他人的内心世界。你心中始终怀着一个让世界变得更美好的愿景，并默默为之努力。你的真诚和深度让身边的人感受到被理解和被关怀。',
    descriptionEn:
      'INFJs are quiet yet deeply influential idealists. With remarkable intuition and empathy, you understand the inner worlds of others deeply. You carry a vision of making the world better and work quietly towards it. Your sincerity and depth make those around you feel truly understood and cared for.',
    strengths: ['洞察力极强，能看到表象下真相', '同理心深厚，善于倾听和陪伴', '有坚定的理想和价值观', '创造力与执行力兼具'],
    strengthsEn: ['Exceptional insight — see truths beneath the surface', 'Deep empathy, excellent listener and companion', 'Firm ideals and strong values', 'Combine creativity with execution ability'],
    weaknesses: ['容易过度内耗，对自己太苛刻', '不善拒绝，容易牺牲自己', '对批评特别敏感', '有时过于理想化，忽略现实限制'],
    weaknessesEn: ['Prone to excessive self-criticism and burnout', 'Difficulty saying no, may sacrifice self for others', 'Highly sensitive to criticism', 'Sometimes too idealistic, overlooking practical constraints'],
    careers: ['心理咨询师', '作家', '教育工作者', '非营利组织负责人', 'UX 研究员'],
    careersEn: ['Counselor', 'Writer', 'Educator', 'Nonprofit Director', 'UX Researcher'],
  },
  INFP: {
    code: 'INFP',
    name: '调停者',
    nameEn: 'Mediator',
    tagline: '内心浪漫的和平追寻者',
    taglineEn: 'Poetic, kind and altruistic people, always eager to help a good cause',
    color: '#DD6B20',
    description:
      'INFP 型人格是理想主义的守护者。你拥有丰富的内心世界和坚定的价值观。对真善美的追求是你生命的动力，你渴望通过创作或帮助他人来表达内心。你温和的外表下，藏着一颗比谁都坚定的心。',
    descriptionEn:
      'INFPs are guardians of idealism. You have a rich inner world and unwavering values. The pursuit of truth, beauty and goodness drives your life, and you long to express your inner self through creativity or helping others. Beneath your gentle exterior lies a heart more determined than anyone realizes.',
    strengths: ['创造力丰富，善于用文字或艺术表达', '同理心和包容力强', '价值观坚定，不为利益妥协', '能深层理解复杂的人类情感'],
    strengthsEn: ['Rich creativity, expresses beautifully through words or art', 'Strong empathy and inclusiveness', 'Firm values, never compromises for self-interest', 'Deep understanding of complex human emotions'],
    weaknesses: ['容易陷入理想化期待，现实感不足', '过于敏感，容易受伤', '逃避冲突，不善于处理分歧', '做事容易缺乏持续力'],
    weaknessesEn: ['May get lost in idealistic expectations, ignoring reality', 'Overly sensitive, easily hurt', 'Avoids conflict, struggles with direct confrontation', 'May lack follow-through on projects'],
    careers: ['作家', '心理治疗师', '插画师', '社工', '人力资源'],
    careersEn: ['Writer', 'Therapist', 'Illustrator', 'Social Worker', 'HR Specialist'],
  },
  ENFJ: {
    code: 'ENFJ',
    name: '主人公',
    nameEn: 'Protagonist',
    tagline: '用热情感染每一个人的天生教育家',
    taglineEn: 'Charismatic and inspiring leaders, able to mesmerize their listeners',
    color: '#D69E2E',
    description:
      'ENFJ 型人格是天生的导师和激励者。你对人的情感有敏锐的捕捉力，总能准确地理解他人的需求和潜力。你享受帮助他人成长的过程，你的热情和真诚能激发出身边人最好的一面。你善于在不同的人群中建立共识和连接。',
    descriptionEn:
      'ENFJs are natural mentors and motivators. With keen emotional perception, you accurately understand others\' needs and potential. You enjoy helping people grow, and your enthusiasm and sincerity bring out the best in everyone around you. You excel at building consensus and connections across diverse groups.',
    strengths: ['人际洞察力极强，能精准理解他人', '沟通能力和说服力出色', '天生的组织者和领导者', '富有感染力，能带动团队情绪'],
    strengthsEn: ['Exceptional interpersonal insight — understands others precisely', 'Outstanding communication and persuasion skills', 'Natural organizer and leader', 'Highly charismatic, lifts team morale effortlessly'],
    weaknesses: ['过度承担他人的情绪负担', '不善于对自己说"不"', '面对冲突时倾向于回避', '对自己要求过高，容易焦虑'],
    weaknessesEn: ['Overly burdened by others\' emotional weight', 'Struggles to say "no" to people', 'Tends to avoid direct conflict', 'Holds self to impossibly high standards, prone to anxiety'],
    careers: ['教师', 'HR/培训师', '政治家', '非营利组织负责人', '市场营销总监'],
    careersEn: ['Teacher', 'HR / Trainer', 'Politician', 'Nonprofit Director', 'Marketing Director'],
  },
  ENFP: {
    code: 'ENFP',
    name: '竞选者',
    nameEn: 'Campaigner',
    tagline: '充满热情的探索者和追梦人',
    taglineEn: 'Enthusiastic, creative and sociable free spirits who can always find a reason to smile',
    color: '#E53E3E',
    description:
      'ENFP 型人格是生活的热情拥护者。你对世界充满无限好奇，总是能在各种人和事中发现可能性。你的热情像磁石一样吸引着周围的人。你不喜欢被条条框框束缚，渴望探索人生的各种可能。对你来说，生活就是一场精彩的冒险。',
    descriptionEn:
      'ENFPs are enthusiastic champions of life. With boundless curiosity about the world, you constantly discover possibilities in people and situations. Your warmth acts like a magnet, drawing others near. You dislike being constrained by rules and yearn to explore all that life offers. To you, life is a grand adventure.',
    strengths: ['热情洋溢，能感染和激励他人', '创造力强，想法层出不穷', '同理心强，能建立深层联系', '适应力强，在新环境中如鱼得水'],
    strengthsEn: ['Bursting with enthusiasm that inspires others', 'Highly creative with endless ideas', 'Strong empathy and deep connections with people', 'Thrives in new environments'],
    weaknesses: ['容易分心，难以专注一件事', '对枯燥的日常任务缺乏耐心', '有时过于理想化', '容易过度承诺'],
    weaknessesEn: ['Easily distracted, hard to focus on one thing', 'Little patience for boring routine tasks', 'Sometimes overly idealistic', 'Prone to over-committing'],
    careers: ['记者', '创业者', '演员', '营销策划', '旅行博主'],
    careersEn: ['Journalist', 'Entrepreneur', 'Actor', 'Marketing Strategist', 'Travel Blogger'],
  },
  ISTJ: {
    code: 'ISTJ',
    name: '物流师',
    nameEn: 'Logistician',
    tagline: '用可靠和务实奠定一切基础的人',
    taglineEn: 'Practical and fact-minded individuals whose reliability cannot be doubted',
    color: '#2F855A',
    description:
      'ISTJ 型人格是秩序的守护者。你稳重、务实、可靠，是团队中最值得信赖的中坚力量。你做事一丝不苟，对承诺极为重视。你不追求虚名，而是用踏实的行动和结果说话。在你的字典里，责任重于一切。',
    descriptionEn:
      'ISTJs are guardians of order. Steady, practical, and reliable, you are the trustworthy backbone of any team. You are meticulous in your work and take commitments seriously. You don\'t chase empty recognition — you let your solid actions and results speak. In your dictionary, duty comes above all else.',
    strengths: ['极度可靠，说到做到', '做事细致严谨，有条不紊', '务实理性，不感情用事', '忍耐力强，能坚持完成任务'],
    strengthsEn: ['Extremely reliable — always delivers on promises', 'Meticulous, thorough and methodical', 'Practical and rational, not swayed by emotion', 'Strong perseverance, sees tasks through to the end'],
    weaknesses: ['可能显得过于保守和顽固', '不善于接受变化和新方法', '表达情感较为困难', '有时过于关注细节而忽略全局'],
    weaknessesEn: ['May appear too conservative and rigid', 'Struggles to embrace change and new methods', 'Difficulty expressing emotions', 'Sometimes too focused on details, miss the big picture'],
    careers: ['会计师', '军人', '法官', '数据分析师', '外科医生'],
    careersEn: ['Accountant', 'Military Officer', 'Judge', 'Data Analyst', 'Surgeon'],
  },
  ISFJ: {
    code: 'ISFJ',
    name: '守卫者',
    nameEn: 'Defender',
    tagline: '默默守护所爱之人的温暖力量',
    taglineEn: 'Very dedicated and warm protectors, always ready to defend their loved ones',
    color: '#276749',
    description:
      'ISFJ 型人格是温暖的守护者。你对身边的人有强烈的保护欲和责任意识。你不追求成为聚光灯下的焦点，而是默默地在幕后付出，确保一切运转顺利。你的细腻和体贴，让身边人时刻感受到安全和被在乎的感觉。',
    descriptionEn:
      'ISFJs are warm protectors. You feel a strong sense of responsibility and protectiveness toward those around you. You don\'t seek the spotlight — instead, you work quietly behind the scenes to ensure everything runs smoothly. Your thoughtfulness and care make others feel safe and valued at all times.',
    strengths: ['细致入微，能注意到他人的需求', '忠诚可靠，值得长期托付', '踏实勤勉，执行力强', '善于营造温暖和谐的氛围'],
    strengthsEn: ['Attentive to detail — notices others\' needs', 'Loyal and reliable, worthy of long-term trust', 'Hardworking and diligent with strong execution', 'Creates warm, harmonious atmospheres'],
    weaknesses: ['过于谦逊，不善为自己争取', '对批评比较敏感', '容易抗拒改变和创新', '有时承担过多责任，不会说"不"'],
    weaknessesEn: ['Overly modest, struggles to advocate for self', 'Sensitive to criticism', 'Resistant to change and new approaches', 'Takes on too much responsibility, can\'t say "no"'],
    careers: ['护士', '教师', '社会工作者', '行政主管', '室内设计师'],
    careersEn: ['Nurse', 'Teacher', 'Social Worker', 'Office Manager', 'Interior Designer'],
  },
  ESTJ: {
    code: 'ESTJ',
    name: '总经理',
    nameEn: 'Executive',
    tagline: '高效务实的组织管理专家',
    taglineEn: 'Excellent administrators, unsurpassed at managing things — or people',
    color: '#C05621',
    description:
      'ESTJ 型人格是秩序和效率的推动者。你相信清晰的规则和制度能让世界变得更好。你拥有极强的执行力，善于把抽象的愿景转化为可落地的具体方案。在你的带领下，团队总能高效地达成目标。你对责任的担当让所有人都能放心地把后背交给你。',
    descriptionEn:
      'ESTJs are drivers of order and efficiency. You believe clear rules and systems make the world better. With powerful execution ability, you excel at turning abstract visions into concrete, actionable plans. Under your leadership, teams reliably achieve their goals. Your accountability earns the full trust of those around you.',
    strengths: ['组织能力和执行力极强', '决策果断，敢于承担责任', '务实高效，不空谈', '原则性强，公平正直'],
    strengthsEn: ['Exceptional organizational and execution skills', 'Decisive, willing to take responsibility', 'Pragmatic and efficient, no empty talk', 'Strong principles, fair and honest'],
    weaknesses: ['可能显得过于强势和固执', '对情感和主观感受不够敏感', '不善于接受非常规的解决方案', '容易给人"说教"的印象'],
    weaknessesEn: ['May appear overbearing and stubborn', 'Insensitive to emotions and subjective feelings', 'Struggles to accept unconventional solutions', 'Can come across as preachy'],
    careers: ['军官', '法官', '企业高管', '项目经理', '工厂总监'],
    careersEn: ['Military Officer', 'Judge', 'Corporate Executive', 'Project Manager', 'Factory Director'],
  },
  ESFJ: {
    code: 'ESFJ',
    name: '执政官',
    nameEn: 'Consul',
    tagline: '用温暖和关怀凝聚团队的护航者',
    taglineEn: 'Extraordinarily caring, social and popular people, always eager to help',
    color: '#B7791F',
    description:
      'ESFJ 型人格是社群的粘合剂。你天生善于照顾他人的需求，是朋友圈和团队中的温暖担当。你重视传统和规范，乐于参与各种集体活动。你希望每个身边的人都能感受到被关注和被重视，你的细心和体贴让人难以抗拒。',
    descriptionEn:
      'ESFJs are the glue of any community. Naturally skilled at caring for others\' needs, you are the warm presence in any friend group or team. You value tradition and norms, and enjoy participating in collective activities. You want everyone around you to feel seen and valued — your attentiveness is irresistible.',
    strengths: ['人际交往能力出众，善于照顾他人', '组织协调能力强', '待人热情真诚', '责任感强，可以依赖'],
    strengthsEn: ['Outstanding interpersonal skills, naturally caring', 'Strong organizational and coordination abilities', 'Warm, sincere and genuine with people', 'Highly responsible and dependable'],
    weaknesses: ['过度在意他人看法', '不擅长接受批评', '对变化和不确定性感到不安', '有时会忽视自己的需求'],
    weaknessesEn: ['Overly concerned with what others think', 'Struggles to accept criticism', 'Uneasy with change and uncertainty', 'Sometimes neglects own needs'],
    careers: ['教师', '医疗护理', '酒店管理', '社区服务', '客户关系经理'],
    careersEn: ['Teacher', 'Healthcare Professional', 'Hotel Manager', 'Community Service', 'Client Relations Manager'],
  },
  ISTP: {
    code: 'ISTP',
    name: '鉴赏家',
    nameEn: 'Virtuoso',
    tagline: '冷静务实的动手实践大师',
    taglineEn: 'Bold and practical experimenters, masters of all kinds of tools',
    color: '#2C7A7B',
    description:
      'ISTP 型人格是动手实践的天才。你对事物"如何运作"有着天然的好奇，喜欢把东西拆开来一探究竟。你冷静、务实、行动力强，在危机时刻总能保持镇定并找到最有效的解决方案。你享受动手解决问题的过程胜过纸上谈兵。',
    descriptionEn:
      'ISTPs are hands-on geniuses. With a natural curiosity about "how things work," you love taking things apart to understand them. Calm, practical, and action-oriented, you stay composed in crises and always find the most efficient solution. You enjoy solving problems with your hands far more than theorizing.',
    strengths: ['动手能力和实际操作能力极强', '危机时刻保持冷静和理智', '善于分析问题并快速找到解决方案', '独立自主，不需要太多指导'],
    strengthsEn: ['Exceptional hands-on and practical skills', 'Stays calm and rational in crisis moments', 'Analyzes problems quickly and finds effective solutions', 'Independent, needs little guidance'],
    weaknesses: ['不善表达，可能显得疏离', '对长期规划缺乏兴趣', '不喜欢被规则和流程束缚', '有时显得过于冒险'],
    weaknessesEn: ['Poor at expressing feelings, may seem detached', 'Little interest in long-term planning', 'Dislikes being constrained by rules and procedures', 'Sometimes takes unnecessary risks'],
    careers: ['飞行员', '工程师', '侦探', '机械师', '外科医生'],
    careersEn: ['Pilot', 'Engineer', 'Detective', 'Mechanic', 'Surgeon'],
  },
  ISFP: {
    code: 'ISFP',
    name: '探险家',
    nameEn: 'Adventurer',
    tagline: '用感官和心灵感受世界之美的艺术家',
    taglineEn: 'Flexible and charming artists, always ready to explore and experience something new',
    color: '#9B2C2C',
    description:
      'ISFP 型人格是生活的艺术家。你用感官和心灵去体验世界的每一个瞬间，对美有着自己独特的感知力。你温和、低调，但内心有着自己坚定的原则和审美。你不喜欢被强加的观点左右，而是更愿意用自己的方式探索和表达。',
    descriptionEn:
      'ISFPs are artists of life. You experience every moment of the world through your senses and heart, with a unique sensitivity to beauty. Gentle and low-key on the outside, you hold firm principles and aesthetic convictions within. You dislike imposed opinions and prefer to explore and express in your own way.',
    strengths: ['审美感受力强，善于发现生活中的美', '温和友善，容易相处', '行动力强于言语', '保持开放心态，容易适应环境'],
    strengthsEn: ['Strong aesthetic sense — finds beauty in everyday life', 'Gentle and friendly, easy to get along with', 'Actions speak louder than words', 'Open-minded and adaptable to new environments'],
    weaknesses: ['过于安静，容易被忽略', '不善于长期规划', '面临冲突时倾向于回避', '可能显得不够坚定和有主见'],
    weaknessesEn: ['Too quiet, may be overlooked', 'Poor at long-term planning', 'Tends to avoid conflict', 'May appear indecisive or lacking conviction'],
    careers: ['艺术家', '摄影师', '兽医', '花艺师', '按摩治疗师'],
    careersEn: ['Artist', 'Photographer', 'Veterinarian', 'Florist', 'Massage Therapist'],
  },
  ESTP: {
    code: 'ESTP',
    name: '企业家',
    nameEn: 'Entrepreneur',
    tagline: '精力充沛的行动派冒险家',
    taglineEn: 'Smart, energetic and highly perceptive people who truly enjoy living on the edge',
    color: '#C53030',
    description:
      'ESTP 型人格是行动至上的实干家。你不喜欢纸上谈兵，而是相信实践出真知。你对周围环境的变化极度敏感，总能比别人更先抓住机会。你的果断和行动力让你在快节奏的环境中如鱼得水。和你在一起，永远不会缺少刺激和乐趣。',
    descriptionEn:
      'ESTPs are action-first doers. You dislike idle theorizing — you believe real knowledge comes from doing. Highly sensitive to changes in your environment, you spot opportunities before anyone else. Your decisiveness and action-orientation help you thrive in fast-paced settings. Life with you is never short on excitement and fun.',
    strengths: ['行动力极强，说干就干', '适应力强，随机应变能力突出', '人际交往老练，善于谈判', '对机会的嗅觉敏锐'],
    strengthsEn: ['Extremely action-driven — jumps right in', 'Highly adaptable and quick on your feet', 'Savvy with people, skilled negotiator', 'Sharp instinct for spotting opportunities'],
    weaknesses: ['容易冲动，考虑不够周全', '对规则和流程缺乏耐心', '可能显得过于冒险和鲁莽', '不擅长长期承诺和规划'],
    weaknessesEn: ['Can be impulsive, not thinking things through', 'Impatient with rules and procedures', 'May come across as reckless', 'Poor at long-term commitment and planning'],
    careers: ['销售总监', '极限运动教练', '急救医生', '演员', '反欺诈调查员'],
    careersEn: ['Sales Director', 'Extreme Sports Coach', 'Emergency Doctor', 'Actor', 'Fraud Investigator'],
  },
  ESFP: {
    code: 'ESFP',
    name: '表演者',
    nameEn: 'Entertainer',
    tagline: '用快乐和活力点亮生活的派对中心',
    taglineEn: 'Spontaneous, energetic and enthusiastic people — life is never boring around them',
    color: '#DD6B20',
    description:
      'ESFP 型人格是快乐的传播者。你的活力像阳光一样感染着身边的每一个人。你享受当下，善于从生活中挖掘乐趣。你对人有着天然的亲和力，无论走到哪里都能迅速融入环境。你相信生活就是要全情投入、放手去体验。',
    descriptionEn:
      'ESFPs are spreaders of joy. Your energy is like sunshine, infecting everyone around you. You live in the moment and have a knack for finding fun in everyday life. With natural charisma and warmth, you blend into any environment effortlessly. You believe life is meant to be lived fully and experienced with abandon.',
    strengths: ['乐观外向，能带动周围气氛', '适应力强，随遇而安', '对他人的情绪感知敏锐', '善于合作和团队协作'],
    strengthsEn: ['Outgoing and optimistic, lifts the mood around you', 'Highly adaptable and easygoing', 'Keenly perceptive of others\' emotions', 'Excellent at collaboration and teamwork'],
    weaknesses: ['容易冲动消费或做决定', '对长远规划缺乏兴趣', '不善于处理批评和负面反馈', '注意力容易被新鲜事物分散'],
    weaknessesEn: ['Prone to impulsive decisions and spending', 'Little interest in long-range planning', 'Struggles with criticism and negative feedback', 'Easily distracted by new and shiny things'],
    careers: ['演员', '销售', '导游', '活动策划', '健身教练'],
    careersEn: ['Actor', 'Salesperson', 'Tour Guide', 'Event Planner', 'Fitness Coach'],
  },
}
