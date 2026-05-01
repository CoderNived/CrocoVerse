import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'

import PageWrapper from './components/layout/PageWrapper'
import HomePage from './pages/Home'
import SpeciesDetailPage from './pages/SpeciesDetail'
import MLToolsPage from './pages/MLTools'
import DashboardPage from './pages/Dashboard'

export default function App() {
  // 🔹 CORS test
  useEffect(() => {
    fetch('http://localhost:5000/api/health')
      .then((res) => res.json())
      .then((data) => {
        console.log('✅ API Response:', data)
      })
      .catch((err) => {
        console.error('❌ CORS / Network Error:', err)
      })
  }, [])

  return (
    <PageWrapper>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/species/:id" element={<SpeciesDetailPage />} />
        <Route path="/ml-tools" element={<MLToolsPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </PageWrapper>
  )
}