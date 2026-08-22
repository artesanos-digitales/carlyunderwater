import { useEffect, useRef } from 'react'
import { ArrowDown } from '@phosphor-icons/react'

export default function Hero() {
  const bubblesRef = useRef(null)

  useEffect(() => {
    const container = bubblesRef.current
    if (!container) return
    const fragment = document.createDocumentFragment()
    for (let i = 0; i < 16; i++) {
      const bubble = document.createElement('div')
      bubble.classList.add('bubble')
      const size = Math.random() * 7 + 2
      bubble.style.width = `${size}px`
      bubble.style.height = `${size}px`
      bubble.style.left = `${Math.random() * 100}%`
      bubble.style.animationDuration = `${Math.random() * 10 + 8}s`
      bubble.style.animationDelay = `${Math.random() * 10}s`
      fragment.appendChild(bubble)
    }
    container.appendChild(fragment)
    return () => { container.replaceChildren() }
  }, [])

  return (
    <header className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Background layer: video de mantarrayas con imagen de respaldo */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/gallery/IMG_1643.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/assets/gallery/IMG_1643.jpg"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.75 }}
        >
          <source src="/assets/videos/mantas.webm" type="video/webm" />
          <source src="/assets/videos/mantas.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-b from-deep-900/50 via-ocean-900/60 to-deep-900 z-10" />
        <div className="absolute inset-0 bg-ocean-900/20 mix-blend-multiply z-10" />

        <div ref={bubblesRef} className="absolute inset-0 overflow-hidden pointer-events-none z-20" />
      </div>

      {/* Foreground: pill, headline, subtext, CTA. Nada más. */}
      <div className="relative z-30 text-center px-4 sm:px-6 max-w-4xl mx-auto flex flex-col items-center pt-20">
        <div className="glass-panel px-4 py-1.5 rounded-full text-xs font-mono tracking-[0.2em] text-neon-cyan mb-6 inline-flex items-center">
          BUCEA CONMIGO
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.05] px-2">
          Enamórate del<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neon-cyan to-white">
            mar conmigo
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-10 max-w-[52ch] mx-auto font-light leading-relaxed px-2">
          Es hora de aprender a volar bajo el agua. Descubre conmigo el Sistema Arrecifal Veracruzano.
        </p>

        <button
          onClick={() => document.getElementById('experiences').scrollIntoView({ behavior: 'smooth' })}
          className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-semibold text-deep-900 bg-neon-cyan rounded-full transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
        >
          Ver experiencias
          <ArrowDown size={18} weight="bold" className="transition-transform duration-300 group-hover:translate-y-0.5" />
        </button>
      </div>
    </header>
  )
}
