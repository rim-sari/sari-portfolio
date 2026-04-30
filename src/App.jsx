import { useState } from 'react'
import Cursor from './components/Cursor'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'

export default function App() {
  const [theme, setTheme] = useState('dark')

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.setAttribute('data-theme', next)
  }

  return (
    <>
      <Cursor />
      <Nav theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <Marquee />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <footer>
        <p>Designed &amp; built by <span>Sari Rim</span></p>
        <p>made in 2026</p>
      </footer>
    </>
  )
}