import { useEffect, useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 py-4 px-6 md:px-12 border-b ${
        scrolled ? 'glass-panel border-white/10' : 'border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 group">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neon-cyan group-hover:rotate-12 transition-transform">
            <path d="M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.46-3.44 6-7 6-3.56 0-7.56-2.54-8.5-6Z"/>
            <path d="M18 12v.5"/>
            <path d="M16 17.93a9.77 9.77 0 0 1 0-11.86"/>
            <path d="M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33"/>
            <path d="M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4"/>
            <path d="m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98"/>
          </svg>
          <span className="text-xl font-bold tracking-widest uppercase">
            Carly<span className="text-neon-cyan neon-text-cyan">UnderWater</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
          <a href="#experiences" className="text-gray-300 hover:text-white transition-colors">Experiencias</a>
          <a href="#gallery" className="text-gray-300 hover:text-white transition-colors">Galería</a>
          <a href="#faq" className="text-gray-300 hover:text-white transition-colors">Preguntas</a>
          <button
            onClick={() => document.getElementById('booking').scrollIntoView()}
            className="glass-panel px-6 py-2 rounded-full border border-neon-cyan/30 text-neon-cyan hover:bg-neon-cyan/10 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all"
          >
            Reservar Buceo
          </button>
        </div>

        <button className="md:hidden text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>
          </svg>
        </button>
      </div>
    </nav>
  )
}
