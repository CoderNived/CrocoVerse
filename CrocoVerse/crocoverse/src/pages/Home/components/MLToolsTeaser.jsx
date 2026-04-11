import { Link } from 'react-router-dom'

export default function MLToolsTeaser() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-green-600 font-semibold text-sm uppercase tracking-wide">ML Powered</span>
          <h2 className="text-3xl font-bold mt-2 mb-4">Science Meets Machine Learning</h2>
          <p className="text-gray-600 mb-4">Our ML models are trained on real crocodilian research data. Predict body weight from length measurements, or classify age group from physical traits.</p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-center gap-2 text-gray-700">
              <span className="text-green-500 font-bold">✓</span> Weight Predictor Model
            </li>
            <li className="flex items-center gap-2 text-gray-700">
              <span className="text-green-500 font-bold">✓</span> Age Classifier Model
            </li>
          </ul>
          <Link to="/ml-tools" className="bg-gray-900 hover:bg-gray-700 text-white font-semibold px-6 py-3 rounded-lg inline-block transition-colors">
            Try the Tools
          </Link>
        </div>
        <div className="bg-gray-900 rounded-xl p-6 text-white font-mono text-sm">
          <div className="text-green-400 mb-4">// Weight Predictor</div>
          <div className="text-gray-400">Input: length = <span className="text-white">4.2m</span></div>
          <div className="text-gray-400">Species: <span className="text-white">C. porosus</span></div>
          <div className="mt-4 pt-4 border-t border-gray-700 text-green-400">
            Predicted weight: <span className="text-white font-bold">320 kg</span>
          </div>
        </div>
      </div>
    </section>
  )
}