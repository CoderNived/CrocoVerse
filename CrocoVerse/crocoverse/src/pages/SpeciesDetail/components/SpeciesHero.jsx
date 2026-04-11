import { Link } from 'react-router-dom'

export default function SpeciesHero({ species }) {
  return (
    <div className="mb-8">
      <nav className="text-sm text-gray-500 mb-4 flex items-center gap-2">
        <Link to="/" className="hover:text-green-600">Home</Link>
        <span>›</span>
        <Link to="/species" className="hover:text-green-600">Species</Link>
        <span>›</span>
        <span className="text-gray-800">{species.commonName}</span>
      </nav>
      <h1 className="text-4xl font-bold mb-1">{species.commonName}</h1>
      <p className="text-lg italic text-gray-400 mb-6">{species.scientificName}</p>
      <img
        src={species.imageUrl}
        alt={species.commonName}
        className="w-full h-72 object-cover rounded-xl"
      />
    </div>
  )
}