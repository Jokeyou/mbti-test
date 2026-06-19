import { figures } from '../data/figures'
import { personalityTypes } from '../data/types'
import FigureAvatar from '../components/common/FigureAvatar'
import TypeAvatar from '../components/common/TypeAvatar'

export default function FigurePreview() {
  const entries = Object.entries(figures)

  return (
    <div className="min-h-screen bg-bg p-8">
      <h1 className="text-2xl font-bold text-center text-primary mb-8">16 位历史名人肖像预览</h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4 max-w-5xl mx-auto">
        {entries.map(([mbti, figure]) => {
          const type = personalityTypes[mbti]
          return (
            <div key={mbti} className="text-center p-3 rounded-xl bg-white/60 dark:bg-slate-800/60 border border-border">
              <div className="flex justify-center gap-2 mb-2">
                <FigureAvatar name={figure.name} size={64} />
              </div>
              <p className="text-xs font-bold text-text">{figure.name}</p>
              <p className="text-[10px] text-text-muted">{figure.nameEn}</p>
              <div className="mt-1 flex items-center justify-center gap-1">
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded" style={{ backgroundColor: type?.color + '20', color: type?.color }}>
                  {mbti}
                </span>
              </div>
            </div>
          )
        })}
      </div>

      {/* Also show the geometric TypeAvatars for comparison */}
      <h2 className="text-xl font-bold text-center text-primary mt-12 mb-6">几何头像（对比）</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4 max-w-5xl mx-auto">
        {entries.map(([mbti, figure]) => {
          const type = personalityTypes[mbti]
          return (
            <div key={`geo-${mbti}`} className="text-center p-3 rounded-xl bg-white/60 dark:bg-slate-800/60 border border-border">
              <div className="flex justify-center mb-2" style={{ color: type?.color }}>
                <TypeAvatar code={mbti} size={48} />
              </div>
              <p className="text-[10px] text-text-muted">{figure.name}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
