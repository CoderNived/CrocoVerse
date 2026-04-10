import Navbar from './Navbar'
import Footer from './Footer'

export default function PageWrapper({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow max-w-6xl mx-auto w-full px-6 py-10">
        {children}
      </main>
      <Footer />
    </div>
  )
}