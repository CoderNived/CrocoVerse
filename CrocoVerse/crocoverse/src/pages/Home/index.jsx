import HeroSection from './components/HeroSection'
import StatsBar from './components/StatsBar'
import FeaturedSpecies from './components/FeaturedSpecies'
import MLToolsTeaser from './components/MLToolsTeaser'
import CallToAction from './components/CallToAction'

export default function HomePage() {
  return (
    <div className="-mx-6 -my-10">
      <HeroSection />
      <StatsBar />
      <FeaturedSpecies />
      <MLToolsTeaser />
      <CallToAction />
    </div>
  )
}