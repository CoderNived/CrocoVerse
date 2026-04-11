export default function QuickFactsCard({ facts }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 mt-4">
      <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">Quick Facts</h3>
      <div className="grid grid-cols-2 gap-3">
        {facts.map(fact => (
          <div key={fact.label} className="bg-gray-50 rounded-lg p-3 text-center">
            <div className="text-2xl mb-1">{fact.icon}</div>
            <div className="font-bold text-gray-800 text-sm">{fact.value}</div>
            <div className="text-xs text-gray-500 mt-0.5">{fact.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}