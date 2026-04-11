const stats = [
  { value: '27', label: 'Species Documented' },
  { value: '6', label: 'Continents Covered' },
  { value: '2', label: 'ML Models Available' },
  { value: '500+', label: 'Data Points' },
]

export default function StatsBar() {
  return (
    <div className="bg-gray-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map(s => (
          <div key={s.label}>
            <div className="text-3xl font-bold text-green-400">{s.value}</div>
            <div className="text-sm text-gray-400 mt-1">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}