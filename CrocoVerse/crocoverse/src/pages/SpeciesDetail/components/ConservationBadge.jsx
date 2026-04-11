const STATUS_COLORS = {
  'Least Concern':        'bg-green-100 text-green-800',
  'Near Threatened':      'bg-lime-100 text-lime-800',
  'Vulnerable':           'bg-yellow-100 text-yellow-800',
  'Endangered':           'bg-orange-100 text-orange-800',
  'Critically Endangered':'bg-red-100 text-red-800',
  'Extinct in Wild':      'bg-rose-200 text-rose-900',
  'Extinct':              'bg-gray-800 text-white',
}

export default function ConservationBadge({ status }) {
  const colorClass = STATUS_COLORS[status] || 'bg-gray-100 text-gray-700'
  return (
    <span className={`text-xs font-semibold px-2 py-1 rounded-full ${colorClass}`}>
      {status}
    </span>
  )
}