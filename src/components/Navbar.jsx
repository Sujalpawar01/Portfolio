import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => { const fn = () => setScrolled(window.scrollY > 20); window.addEventListener('scroll', fn); return () => window.removeEventListener('scroll', fn) }, [])
  const scrollTo = (href) => { const el = document.querySelector(href); if (el) el.scrollIntoView({ behavior: 'smooth' }) }
  return (
    <motion.nav initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-[999] flex items-center justify-between px-6 py-4 transition-all duration-300 ${scrolled ? 'glass-strong border-b border-white/5' : ''}`}>
      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="text-white text-sm font-semibold tracking-tight hover:text-white/70 transition-colors">
        sujal<span className="text-white/30">.</span>dev
      </button>
      <div className="hidden md:flex items-center gap-1">
        {links.map(l => (
          <button key={l.label} onClick={() => scrollTo(l.href)}
            className="px-3 py-1.5 text-sm text-white/50 hover:text-white/90 transition-colors rounded-lg hover:bg-white/5">
            {l.label}
          </button>
        ))}
      </div>
      <a href="mailto:sujalpawar0804@gmail.com"
        className="text-xs font-medium px-4 py-2 rounded-lg border border-white/10 text-white/60 hover:text-white hover:border-white/25 transition-all duration-200">
        Hire me
      </a>
    </motion.nav>
  )
}
