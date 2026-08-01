import { useEffect, useState } from 'react'
import { useLenis } from './hooks/useLenis'
import Loader from './components/Loader'
import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Timeline from './components/Timeline'
import Contact from './components/Contact'
import Connect from './components/Connect'
import Footer from './components/Footer'

export default function App() {
  const [loading, setLoading] = useState(true)
  useLenis()

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1200)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="font-body min-h-screen selection:bg-saffron">
      <div className="noise" />
      <Cursor />
      <Loader show={loading} />
      <Navbar/>
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Connect />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
