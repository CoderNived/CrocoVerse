import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <div className="relative min-h-[560px] flex items-center justify-center text-white"
      style={{ backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Crocodylus_porosus_2.jpg/1200px-Crocodylus_porosus_2.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="absolute inset-0 bg-black/65" />
      <div className="relative z-10 text-center max-w-3xl px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          The World's Most Complete Crocodilian Intelligence Platform
        </h1>
        <p className="text-lg text-gray-200 mb-8 max-w-xl mx-auto">
          Explore every species, run ML models, and dive deep into crocodile science.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link to="/species" className="bg-green-500 hover:bg-green-400 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
            Explore Species
          </Link>
          <Link to="/ml-tools" className="border border-white hover:bg-white hover:text-gray-900 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
            Try ML Tools
          </Link>
        </div>
      </div>
    </div>
  )
}