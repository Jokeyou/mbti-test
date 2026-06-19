interface Props {
  code: string
  name: string
  color: string
}

export default function TypeBadge({ code, name, color }: Props) {
  return (
    <div className="text-center">
      <div
        className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl shadow-lg"
        style={{ backgroundColor: color }}
      >
        <span className="text-3xl md:text-4xl font-extrabold text-white tracking-wide">
          {code}
        </span>
      </div>
      <p className="mt-4 text-xl md:text-2xl font-bold text-text">
        {name}
      </p>
    </div>
  )
}
