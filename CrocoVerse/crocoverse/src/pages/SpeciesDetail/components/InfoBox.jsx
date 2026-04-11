import ConservationBadge from './ConservationBadge'

export default function InfoBox({ species }) {
  const rows = [
    { label: 'Kingdom',  value: species.kingdom },
    { label: 'Class',    value: species.classType },
    { label: 'Order',    value: species.order },
    { label: 'Family',   value: species.family },
    { label: 'Length',   value: species.length },
    { label: 'Weight',   value: species.weight },
    { label: 'Lifespan', value: species.lifespan },
    { label: 'Regions',  value: species.regions?.join(', ') },
  ]

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
      <img src={species.imageUrl} alt={species.commonName} className="w-full h-44 object-cover" />
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-gray-800">Classification</h3>
          <ConservationBadge status={species.conservation} />
        </div>
        <dl>
          {rows.map(row => (
            <div key={row.label} className="flex justify-between py-1.5 border-b border-gray-100 last:border-0">
              <dt className="text-sm text-gray-500">{row.label}</dt>
              <dd className="text-sm font-medium text-gray-800 text-right max-w-[55%]">{row.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}