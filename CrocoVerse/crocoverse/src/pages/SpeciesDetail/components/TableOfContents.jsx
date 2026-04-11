const sections = [
  { id: 'overview',     label: 'Overview' },
  { id: 'habitat',      label: 'Habitat' },
  { id: 'behavior',     label: 'Behavior' },
  { id: 'diet',         label: 'Diet' },
  { id: 'conservation', label: 'Conservation' },
  { id: 'gallery',      label: 'Gallery' },
]

export default function TableOfContents() {
  return (
    <nav className="bg-white border border-gray-200 rounded-xl p-4 sticky top-24">
      <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">Contents</h3>
      <ul className="space-y-1">
        {sections.map(s => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              className="block text-sm text-gray-600 hover:text-green-600 hover:bg-green-50 px-2 py-1.5 rounded-md transition-colors"
            >
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}