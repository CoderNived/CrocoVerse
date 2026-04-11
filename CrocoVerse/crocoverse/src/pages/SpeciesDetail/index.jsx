import { useParams, Link } from 'react-router-dom'
import { FEATURED_SPECIES } from '../../constants/species'
import SpeciesHero from './components/SpeciesHero'
import InfoBox from './components/InfoBox'
import TableOfContents from './components/TableOfContents'
import SectionBlock from './components/SectionBlock'
import QuickFactsCard from './components/QuickFactsCard'
import SpeciesGallery from './components/SpeciesGallery'

export default function SpeciesDetailPage() {
  const { id } = useParams()
  const species = FEATURED_SPECIES.find(s => s.id === id)

  if (!species) {
    return (
      <div className="text-center py-24">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Species Not Found</h2>
        <p className="text-gray-500 mb-8">We don't have data for this species yet.</p>
        <Link to="/" className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-500 transition-colors">
          Back to Home
        </Link>
      </div>
    )
  }

  return (
    <div>
      <SpeciesHero species={species} />
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 mt-6">

        <div>
          <SectionBlock id="overview" title="Overview" content={species.overview} />
          <SectionBlock id="habitat" title="Habitat" content={species.habitat} />
          <SectionBlock id="behavior" title="Behavior" content={species.behavior} />
          <SectionBlock id="diet" title="Diet" content={species.diet} />
          <SectionBlock id="conservation" title="Conservation" content={species.conservationDetails} />
          <SectionBlock id="gallery" title="Gallery">
            <SpeciesGallery images={species.images} name={species.commonName} />
          </SectionBlock>
        </div>

        <div>
          <TableOfContents />
          <InfoBox species={species} />
          <QuickFactsCard facts={species.quickFacts} />
        </div>

      </div>
    </div>
  )
}