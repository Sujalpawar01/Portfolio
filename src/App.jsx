import { useState, useEffect } from 'react'
import './index.css'
import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import ScrollProgress from './components/ScrollProgress'
import LoadingScreen from './components/LoadingScreen'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Timeline from './sections/Timeline'
import Contact from './sections/Contact'

export default function App() {
  const [loading, setLoading] = useState(true)
  useEffect(() => { const t = setTimeout(() => setLoading(false), 2000); return () => clearTimeout(t) }, [])
  return (
    <>
      <LoadingScreen loading={loading} />
      {!loading && (
        <div className="relative min-h-screen bg-[#08090A] overflow-x-hidden">
          <div className="noise-overlay" />
          <Cursor />
          <ScrollProgress />
          <Navbar />
          <main>
            <Hero /><About /><Skills /><Projects /><Timeline /><Contact />
          </main>
          <Footer />
        </div>
      )}
    </>
  )
}
