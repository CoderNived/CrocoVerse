import { Link } from 'react-router-dom'
import { FEATURED_SPECIES } from '../../../constants/species'

export default function FeaturedSpecies() {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-2">Featured Species</h2>
      <p className="text-gray-500 mb-10">Explore the most studied crocodilians in our database.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {FEATURED_SPECIES.map(sp => (
          <div key={sp.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-green-400 hover:shadow-md transition-all">
            <img src={sp.imageUrl} alt={sp.commonName} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-bold text-lg">{sp.commonName}</h3>
              <p className="text-sm italic text-gray-400 mb-2">{sp.scientificName}</p>
              <p className="text-sm text-gray-600 mb-4">{sp.description}</p>
              <Link to={"/species/"+sp.id} className="text-green-600 font-medium text-sm hover:text-green-500">
                Learn More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}