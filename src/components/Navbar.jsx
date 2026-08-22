import { useEffect, useRef, useState } from 'react'
import { Fish, List, X } from '@phosphor-icons/react'

const links = [
  { href: '#experiences', label: 'Experiencias' },
  { href: '#gallery', label: 'Galería' },
  { href: '#faq', label: 'Preguntas' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const sentinelRef = useRef(null)

  useEffect(() => {
    // No window scroll listener: a one-shot observer on a top sentinel drives the state.
    const el = sentinelRef.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => setScrolled(!entry.isIntersecting), {
      rootMargin: '-60px 0px 0px 0px',
    })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <div ref={sentinelRef} aria-hidden="true" className="absolute top-0 left-0 w-full h-px pointer-events-none" />
      <nav
        className={`fixed w-full z-50 transition-all duration-300 py-4 px-6 md:px-12 border-b ${
          scrolled || menuOpen ? 'glass-panel border-white/10' : 'border-transparent'
        }`}
        aria-label="Principal"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a href="#" className="flex items-center gap-2 group" aria-label="Carly UnderWater, inicio">
            <Fish size={32} weight="duotone" className="text-neon-cyan transition-transform duration-300 group-hover:rotate-12" />
            <span className="text-xl font-bold tracking-widest uppercase">
              Carly<span className="text-neon-cyan">UnderWater</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-gray-300 hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
            <button
              onClick={() => document.getElementById('booking').scrollIntoView({ behavior: 'smooth' })}
              className="glass-panel px-6 py-2 rounded-full border border-neon-cyan/30 text-neon-cyan hover:bg-neon-cyan/10 active:scale-[0.98] transition-all"
            >
              Reservar Buceo
            </button>
          </div>

          <button
            className="md:hidden text-white p-2 -mr-2"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X size={24} /> : <List size={24} />}
          </button>
        </div>

        <div
          id="mobile-menu"
          className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}
        >
          <div className="flex flex-col gap-1 pt-4 pb-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-gray-300 hover:text-white hover:bg-white/5 rounded-lg px-4 py-3 text-base font-medium transition-colors"
              >
                {l.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMenuOpen(false)
                document.getElementById('booking').scrollIntoView({ behavior: 'smooth' })
              }}
              className="text-neon-cyan border border-neon-cyan/30 rounded-lg px-4 py-3 text-base font-medium hover:bg-neon-cyan/10 active:scale-[0.98] transition-all mt-2"
            >
              Reservar Buceo
            </button>
          </div>
        </div>
      </nav>
    </>
  )
}
