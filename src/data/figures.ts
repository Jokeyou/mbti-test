export interface HistoricalFigure {
  mbti: string
  name: string
  nameEn: string
  title: string
  titleEn: string
  era: string
  eraEn: string
  description: string
  descriptionEn: string
  trait: string
  traitEn: string
}

export const figures: Record<string, HistoricalFigure> = {
  INTJ: {
    mbti: 'INTJ',
    name: '诸葛亮',
    nameEn: 'Zhuge Liang',
    title: '卧龙先生 · 三国丞相',
    titleEn: 'The Sleeping Dragon · Chancellor of Shu Han',
    era: '三国 · 181-234',
    eraEn: 'Three Kingdoms · 181-234 CE',
    description:
      '诸葛亮是 INTJ「建筑师」人格最完美的注脚。隐居隆中时，他已洞悉天下大势，一篇《隆中对》为刘备规划了三分天下的战略蓝图。出山后运筹帷幄、革新制度、北伐中原，一生「鞠躬尽瘁，死而后已」。他的远见、周密与对理想的执着，让「卧龙」二字成为智慧的代名词。',
    descriptionEn:
      'Zhuge Liang is the perfect embodiment of the INTJ "Architect." While living in seclusion, he had already mapped out the geopolitical future of China — his "Longzhong Plan" charted the course for the Three Kingdoms era. After joining Liu Bei, he revolutionized governance, engineered military campaigns, and pursued his vision with the motto "give one\'s all until death." His foresight, meticulousness, and devotion to his ideals made "Sleeping Dragon" synonymous with strategic genius.',
    trait: '运筹帷幄 · 远见卓识',
    traitEn: 'Strategic foresight · Meticulous planning',
  },
  INTP: {
    mbti: 'INTP',
    name: '老子',
    nameEn: 'Laozi',
    title: '道家创始人 ·《道德经》作者',
    titleEn: 'Founder of Daoism · Author of Tao Te Ching',
    era: '春秋 · 约前6世纪',
    eraEn: 'Spring and Autumn · c. 6th century BCE',
    description:
      '老子是 INTP「逻辑学家」的远古原型。他骑青牛出函谷关前，留下五千言《道德经》，构建了一个以「道」为核心的抽象哲学体系——「道可道，非常道」。他退隐于世、独立思考，用最简洁的语言探讨宇宙本源、认知边界和治理哲学。两千年后，他的思想仍在全球引发思考和辩论。',
    descriptionEn:
      'Laozi is the ancient archetype of the INTP "Logician." Before riding his water buffalo beyond the pass, he left behind the five-thousand-character Tao Te Ching — building an abstract philosophical system centered on the concept of "Tao." He retreated from society to think independently, using the most concise language to explore the nature of the universe, the limits of knowledge, and the philosophy of governance. Two millennia later, his ideas still provoke thought and debate worldwide.',
    trait: '深邃思辨 · 大道至简',
    traitEn: 'Profound inquiry · Profound simplicity',
  },
  ENTJ: {
    mbti: 'ENTJ',
    name: '秦始皇',
    nameEn: 'Qin Shi Huang',
    title: '千古一帝 · 中国首位皇帝',
    titleEn: 'The First Emperor · Unifier of China',
    era: '秦 · 前259-前210',
    eraEn: 'Qin Dynasty · 259-210 BCE',
    description:
      '秦始皇是 ENTJ「指挥官」的极致体现。他终结了五百年的战国纷争，首次统一中国，推行书同文、车同轨、统一度量衡。他修建长城、开凿灵渠、设立郡县——每一项都是千年尺度的系统工程。他的果断、雄心和执行力，塑造了此后两千年的中国政治版图。',
    descriptionEn:
      'Qin Shi Huang is the ultimate expression of the ENTJ "Commander." He ended five centuries of warring states, unified China for the first time, standardized writing, currency, and measurements. He built the Great Wall, dug canals, established prefectures — each a systems-engineering feat on a millennial scale. His decisiveness, ambition, and execution shaped the political landscape of China for the next two thousand years.',
    trait: '雄才大略 · 一统天下',
    traitEn: 'Bold vision · Unrivaled execution',
  },
  ENTP: {
    mbti: 'ENTP',
    name: '庄子',
    nameEn: 'Zhuangzi',
    title: '逍遥哲学家 ·《庄子》作者',
    titleEn: 'Philosopher of Freedom · Author of Zhuangzi',
    era: '战国 · 约前369-前286',
    eraEn: 'Warring States · c. 369-286 BCE',
    description:
      '庄子是 ENTP「辩论家」的最高境界。他梦蝶不知谁是庄周谁是蝴蝶，与惠施辩论「子非鱼安知鱼之乐」，在妻子去世时鼓盆而歌。他用寓言和悖论挑战一切既定的思维框架，思想天马行空却自洽深刻。他不是为赢而辩，而是为揭示真理的千面而辩。',
    descriptionEn:
      'Zhuangzi is the highest expression of the ENTP "Debater." He dreamed he was a butterfly, debated "how do you know the fish are happy" with Hui Shi, and sang while drumming on a pot after his wife\'s death. He used parables and paradoxes to challenge every established framework of thought — his mind soared boundlessly yet remained profoundly coherent. He debated not to win, but to reveal the many facets of truth.',
    trait: '逍遥游心 · 妙辩无穷',
    traitEn: 'Boundless wit · Infinite curiosity',
  },
  INFJ: {
    mbti: 'INFJ',
    name: '孔子',
    nameEn: 'Confucius',
    title: '万世师表 · 儒家创始人',
    titleEn: 'The Supreme Teacher · Founder of Confucianism',
    era: '春秋 · 前551-前479',
    eraEn: 'Spring and Autumn · 551-479 BCE',
    description:
      '孔子是 INFJ「提倡者」的理想化身。他怀揣「天下大同」的理想，周游列国十四年传播仁政思想。他因材施教，有教无类，门下三千弟子、七十二贤人。生前未被重用，但他的思想深刻影响了东亚文明两千年。他用一生的坚持证明：理想主义者的影响力可以穿越时空。',
    descriptionEn:
      'Confucius is the ideal embodiment of the INFJ "Advocate." Carrying the vision of a harmonious world, he traveled through the states for fourteen years spreading his philosophy of benevolent governance. He taught according to each student\'s aptitude, regardless of their background — three thousand disciples, seventy-two sages. Unrecognized in his lifetime, his ideas have shaped East Asian civilization for two millennia. His life proves that an idealist\'s influence can transcend time and space.',
    trait: '仁者爱人 · 万世师表',
    traitEn: 'Compassionate vision · Timeless wisdom',
  },
  INFP: {
    mbti: 'INFP',
    name: '陶渊明',
    nameEn: 'Tao Yuanming',
    title: '田园诗人之祖 ·《桃花源记》作者',
    titleEn: 'Father of Pastoral Poetry · Author of Peach Blossom Spring',
    era: '东晋 · 365-427',
    eraEn: 'Eastern Jin · 365-427 CE',
    description:
      '陶渊明是 INFP「调停者」的文学化身。他「不为五斗米折腰」，辞官归隐，在东篱下采菊、在南山前种豆。他写下《桃花源记》，描绘了一个与世隔绝的理想国度——「芳草鲜美，落英缤纷」。他的内心世界丰富而坚定，用诗意对抗功利，用田园安放纯粹。',
    descriptionEn:
      'Tao Yuanming is the literary incarnation of the INFP "Mediator." Refusing to "bow for five measures of rice," he resigned from office and returned to a life of picking chrysanthemums by the eastern fence and planting beans beneath the southern mountain. He wrote "Peach Blossom Spring," depicting an idyllic utopia hidden from the world — "fragrant grass fresh and beautiful, fallen petals in profusion." His inner world was rich and unwavering, using poetry to resist功利主义, finding purity in pastoral simplicity.',
    trait: '守拙归真 · 诗意栖居',
    traitEn: 'Authentic idealism · Poetic soul',
  },
  ENFJ: {
    mbti: 'ENFJ',
    name: '玄奘',
    nameEn: 'Xuanzang',
    title: '大唐高僧 · 佛教翻译家',
    titleEn: 'Great Tang Monk · Buddhist Scholar & Translator',
    era: '唐 · 602-664',
    eraEn: 'Tang Dynasty · 602-664 CE',
    description:
      '玄奘是 ENFJ「主人公」的信仰践行者。他孤身西行五万里，历经十七年、一百一十国，从印度取回佛经六百五十七部。回国后他拒绝高官厚禄，在慈恩寺专心译经十九年，共译出七十五部。他教化众生、传播智慧，以一己之力架起了中印文化的桥梁。孙悟空、猪八戒护送的，就是这位现实中的理想主义者。',
    descriptionEn:
      'Xuanzang is the faith-driven exemplar of the ENFJ "Protagonist." He journeyed alone for 50,000 li across 110 kingdoms over 17 years, bringing back 657 Buddhist scriptures from India. Returning home, he declined high office and spent 19 years translating 75 works at Ci\'en Temple. He taught, inspired, and single-handedly built a cultural bridge between China and India. The Monkey King and Pigsy in Journey to the West were escorting this real-life idealist.',
    trait: '普度众生 · 信念如磐',
    traitEn: 'Inspiring guide · Unshakeable faith',
  },
  ENFP: {
    mbti: 'ENFP',
    name: '李白',
    nameEn: 'Li Bai',
    title: '诗仙 · 盛唐浪漫之魂',
    titleEn: 'The Immortal Poet · Soul of Tang Romanticism',
    era: '唐 · 701-762',
    eraEn: 'Tang Dynasty · 701-762 CE',
    description:
      '李白是 ENFP「竞选者」的人格代表。他「天生我材必有用，千金散尽还复来」，骑白鹿访名山、斗酒诗百篇。他的想象力像大鹏一样扶摇直上九万里，热情和浪漫感染了同时代的所有诗人。他不被规则束缚，追求极致的自由——这样的灵魂，在任何时代都是最耀眼的光。',
    descriptionEn:
      'Li Bai is the personality representative of the ENFP "Campaigner." "Heaven has made us talents — we\'re not made in vain. A thousand gold coins spent, more will come again." He rode white deer through famous mountains, produced a hundred poems per gallon of wine. His imagination soared like a giant roc for ninety thousand miles, his warmth and romance infecting every poet of his era. Unrestrained by rules, pursuing ultimate freedom — a soul this bright shines in any age.',
    trait: '天生我才 · 纵情浪漫',
    traitEn: 'Boundless passion · Creative genius',
  },
  ISTJ: {
    mbti: 'ISTJ',
    name: '包拯',
    nameEn: 'Bao Zheng',
    title: '包青天 · 北宋铁面判官',
    titleEn: 'Justice Bao · Incorruptible Judge of Northern Song',
    era: '北宋 · 999-1062',
    eraEn: 'Northern Song · 999-1062 CE',
    description:
      '包拯是 ISTJ「物流师」的完美标尺。他铁面无私、执法如山，连皇亲国戚也照判不误。他为官二十六载，从知县做到枢密副使，始终一丝不苟、秉公执法。「关节不到，有阎罗包老」——百姓相信，只要有包拯在，秩序和正义就不会缺席。',
    descriptionEn:
      'Bao Zheng is the perfect standard of the ISTJ "Logistician." Impartial and unwavering, he applied the law equally to all — even imperial relatives. Over 26 years of public service, from county magistrate to vice minister, he remained meticulous and incorruptible. "Where connections fail, there is Old Bao the Judge of Hell" — the people believed that as long as Bao Zheng was there, order and justice would never be absent.',
    trait: '铁面无私 · 执法如山',
    traitEn: 'Incorruptible integrity · Steadfast duty',
  },
  ISFJ: {
    mbti: 'ISFJ',
    name: '花木兰',
    nameEn: 'Hua Mulan',
    title: '巾帼英雄 · 代父从军',
    titleEn: 'Heroine of the People · She Took Her Father\'s Place in Battle',
    era: '南北朝 · 约4-6世纪',
    eraEn: 'Northern Dynasties · c. 4th-6th century CE',
    description:
      '花木兰是 ISFJ「守卫者」的英雄写照。她「愿为市鞍马，从此替爷征」，不是出于野心，而是对家人的守护与奉献。十二年的金戈铁马之后，她不要封赏、只求还乡，「脱我战时袍，着我旧时裳」。她以最温柔的心做最刚强的事——守护所爱之人。',
    descriptionEn:
      'Hua Mulan is the heroic portrait of the ISFJ "Defender." She went to war not out of ambition, but out of devotion and protection for her aging father. After twelve years of battle, she asked for no reward — only to return home. "I take off my battle robe and put on my old dress." With the gentlest heart, she did the strongest thing: protect those she loved.',
    trait: '温柔刚强 · 守护家人',
    traitEn: 'Gentle strength · Quiet devotion',
  },
  ESTJ: {
    mbti: 'ESTJ',
    name: '武则天',
    nameEn: 'Wu Zetian',
    title: '则天大帝 · 中国唯一女皇帝',
    titleEn: 'Emperor Zetian · China\'s Only Female Emperor',
    era: '唐 · 624-705',
    eraEn: 'Tang Dynasty · 624-705 CE',
    description:
      '武则天是 ESTJ「总经理」的顶级实践者。从才人到皇后再到皇帝，她用了三十五年时间，一步步打破所有制度的束缚。她创立殿试、发展科举、提拔寒门，治理期间国泰民安。她留下的无字碑——功过任人评说——恰恰展现了她的务实和自信。',
    descriptionEn:
      'Wu Zetian is the ultimate practitioner of the ESTJ "Executive." From concubine to empress to emperor, she spent 35 years systematically breaking every institutional barrier. She created the imperial examination\'s palace interview, promoted talent regardless of birth, and governed a peaceful and prosperous realm. The blank stele she left behind — "let future generations judge my deeds" — perfectly captures her pragmatism and confidence.',
    trait: '铁腕革新 · 务实高效',
    traitEn: 'Decisive reform · Pragmatic leadership',
  },
  ESFJ: {
    mbti: 'ESFJ',
    name: '苏轼',
    nameEn: 'Su Shi',
    title: '东坡居士 · 千古第一文人',
    titleEn: 'Dongpo · China\'s Most Beloved Literary Figure',
    era: '北宋 · 1037-1101',
    eraEn: 'Northern Song · 1037-1101 CE',
    description:
      '苏轼是 ESFJ「执政官」的温暖典范。他一生坎坷、屡遭贬谪，但每到一个地方都修水利、办学堂、交朋友。他发明了东坡肉、写下「但愿人长久，千里共婵娟」，把苦难活成了诗意。他关怀身边的每一个人——从皇帝到农夫——用最朴实的方式凝聚人心。',
    descriptionEn:
      'Su Shi is the warm exemplar of the ESFJ "Consul." Despite a life of repeated political exile, everywhere he went he built irrigation works, opened schools, and made friends. He invented Dongpo Pork and wrote "May we all be blessed with longevity, sharing the moon a thousand miles apart" — transforming hardship into poetry. He cared for everyone around him, from emperor to farmer, bringing people together in the most genuine way.',
    trait: '乐天知命 · 温暖众心',
    traitEn: 'Warm-hearted · Community builder',
  },
  ISTP: {
    mbti: 'ISTP',
    name: '鲁班',
    nameEn: 'Lu Ban',
    title: '百工之祖 · 古代发明家',
    titleEn: 'Father of Craftsmen · Ancient Chinese Inventor',
    era: '春秋 · 约前507-前444',
    eraEn: 'Spring and Autumn · c. 507-444 BCE',
    description:
      '鲁班是 ISTP「鉴赏家」的原型人物。他发明了锯子、墨斗、曲尺、云梯和多种木工工具，每一件都是从实践中解决的问题。他用手思考、以行动探索，从不纸上谈兵。两千年后，建筑工人依然尊他为「鲁班祖师」，这是动手实干者最崇高的荣誉。',
    descriptionEn:
      'Lu Ban is the archetypal ISTP "Virtuoso." He invented the saw, the ink line, the carpenter\'s square, the siege ladder, and countless woodworking tools — each one a real problem solved through hands-on experimentation. He thought with his hands and explored through action, never wasting time on empty theory. Two millennia later, builders still honor him as "Master Lu Ban" — the highest honor for a hands-on problem solver.',
    trait: '匠心独运 · 巧夺天工',
    traitEn: 'Master craftsman · Hands-on genius',
  },
  ISFP: {
    mbti: 'ISFP',
    name: '王羲之',
    nameEn: 'Wang Xizhi',
    title: '书圣 · 兰亭集序之魂',
    titleEn: 'The Sage of Calligraphy · Soul of the Orchid Pavilion',
    era: '东晋 · 303-361',
    eraEn: 'Eastern Jin · 303-361 CE',
    description:
      '王羲之是 ISFP「探险家」的艺术极致。他的《兰亭集序》被尊为「天下第一行书」——三百二十四个字，每一笔都有微妙的情绪和节奏。传说他临池学书，池水尽墨。他不善言辞、不逐权力，只是安静地用笔墨探索美的边界，却成了中国书法无人超越的巅峰。',
    descriptionEn:
      'Wang Xizhi is the artistic pinnacle of the ISFP "Adventurer." His "Preface to the Orchid Pavilion" is revered as the greatest piece of calligraphy in history — 324 characters, each stroke carrying subtle emotion and rhythm. Legend says he practiced by a pond until the water turned black with ink. He was not eloquent, nor did he seek power. He simply explored the boundaries of beauty with brush and ink, quietly becoming the unsurpassed peak of Chinese calligraphy.',
    trait: '笔墨传神 · 艺通千古',
    traitEn: 'Quiet artistry · Timeless beauty',
  },
  ESTP: {
    mbti: 'ESTP',
    name: '关羽',
    nameEn: 'Guan Yu',
    title: '武圣 · 忠义千秋',
    titleEn: 'God of War · Paragon of Loyalty and Valor',
    era: '三国 · 160-220',
    eraEn: 'Three Kingdoms · 160-220 CE',
    description:
      '关羽是 ESTP「企业家」的传奇化身。他单刀赴会、过五关斩六将、温酒斩华雄——每一个故事都是行动派的教科书。他在战场上反应如电、魄力惊人，面对强敌从不退缩。他被后世尊为「关圣帝君」，商人拜他求财、武者拜他求胜——因为他是行动、果断和忠义的最高象征。',
    descriptionEn:
      'Guan Yu is the legendary embodiment of the ESTP "Entrepreneur." He attended a meeting alone with only his blade, fought through five passes and slew six generals, defeated Hua Xiong while his wine was still warm — every story a masterclass in decisive action. On the battlefield he was lightning-fast and fearless, never backing down from any enemy. Later generations deified him as "Saint Guan" — merchants pray to him for success, warriors for victory — because he represents action, decisiveness, and unwavering loyalty.',
    trait: '忠肝义胆 · 行动如电',
    traitEn: 'Fearless action · Unwavering loyalty',
  },
  ESFP: {
    mbti: 'ESFP',
    name: '唐寅',
    nameEn: 'Tang Yin',
    title: '江南第一风流才子',
    titleEn: 'The Foremost Romantic Genius of Jiangnan',
    era: '明 · 1470-1524',
    eraEn: 'Ming Dynasty · 1470-1524 CE',
    description:
      '唐寅（唐伯虎）是 ESFP「表演者」的完美演绎。他诗书画三绝，走到哪里都是人群的中心。他「别人笑我太疯癫，我笑他人看不穿」，即便仕途受挫，依然活得潇洒自在。他画画、喝酒、交友，用快乐对抗命运的起伏——这正是 ESFP 把每个当下都活成盛典的天赋。',
    descriptionEn:
      'Tang Yin (Tang Bohu) is the perfect expression of the ESFP "Entertainer." A master of poetry, painting, and calligraphy, he was the center of attention wherever he went. "Others laugh at me for being too crazy — I laugh at them for not seeing through it all." Even after his official career was shattered, he lived freely and joyfully. He painted, drank, and surrounded himself with friends, meeting fate\'s ups and downs with sheer delight — the ESFP gift of turning every moment into a celebration.',
    trait: '诗酒风流 · 洒脱人生',
    traitEn: 'Effervescent joy · Life as celebration',
  },
}
