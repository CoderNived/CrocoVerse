import { Link } from 'react-router-dom'

export default function CallToAction() {
  return (
    <section className="bg-green-600 text-white py-20 text-center px-6">
      <h2 className="text-3xl font-bold mb-4">Ready to dive deep into crocodile science?</h2>
      <p className="text-green-100 mb-8 text-lg">27 species. Real data. Powerful tools.</p>
      <Link to="/species" className="bg-white text-green-700 font-bold px-8 py-3 rounded-lg hover:bg-green-50 transition-colors inline-block">
        Start Exploring
      </Link>
    </section>
  )
}