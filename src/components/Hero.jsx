import { useEffect, useRef } from 'react'

export default function Hero() {
  const bubblesRef = useRef(null)

  useEffect(() => {
    const container = bubblesRef.current
    if (!container) return
    for (let i = 0; i < 30; i++) {
      const bubble = document.createElement('div')
      bubble.classList.add('bubble')
      const size = Math.random() * 8 + 2
      bubble.style.width = `${size}px`
      bubble.style.height = `${size}px`
      bubble.style.left = `${Math.random() * 100}%`
      bubble.style.animationDuration = `${Math.random() * 10 + 5}s`
      bubble.style.animationDelay = `${Math.random() * 10}s`
      container.appendChild(bubble)
    }
    return () => { container.innerHTML = '' }
  }, [])

  return (
    <header className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* ── Background layer ── */}
      <div className="absolute inset-0 z-0">

        {/* Video — mantarrayas reales */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.75 }}
        >
          <source src="/assets/videos/mantas.webm" type="video/webm" />
          <source src="/assets/videos/mantas.mp4" type="video/mp4" />
        </video>

        {/* Fallback image while video loads */}
        <img
          src="https://images.unsplash.com/photo-1682687982501-1e58ea813494?q=80&w=2070&auto=format&fit=crop"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />

        {/* Dark overlay — keeps text legible */}
        <div className="absolute inset-0 bg-gradient-to-b from-deep-900/50 via-ocean-900/60 to-deep-900 z-10" />

        {/* Subtle color tint to enhance the underwater feel */}
        <div className="absolute inset-0 bg-ocean-900/20 mix-blend-multiply z-10" />

        {/* Bubbles */}
        <div ref={bubblesRef} className="absolute inset-0 overflow-hidden pointer-events-none z-20" />
      </div>

      {/* ── Foreground content ── */}
      <div className="relative z-30 text-center px-4 sm:px-6 max-w-4xl mx-auto flex flex-col items-center">
        <div className="glass-panel px-3 sm:px-4 py-1 rounded-full text-[10px] sm:text-xs font-mono tracking-[0.2em] text-neon-cyan mb-4 sm:mb-6 inline-flex items-center gap-2 animate-float">
          <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan animate-pulse" />
          BUCEA CONMIGO
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold tracking-tight mb-4 sm:mb-6 leading-tight px-2">
          Enamórate del<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neon-cyan to-white neon-text-cyan">
            mar conmigo
          </span>
        </h1>

        <p className="text-sm sm:text-base md:text-xl text-gray-300 mb-4 sm:mb-6 max-w-2xl mx-auto font-light leading-relaxed px-2">
          Es hora de aprender a volar bajo el agua. Descubre conmigo el Sistema Arrecifal Veracruzano.
        </p>
        
        <p className="text-sm sm:text-base md:text-xl text-neon-cyan mb-6 sm:mb-10 max-w-2xl mx-auto font-semibold px-2">
          ¿Qué opción es para ti?
        </p>

        <button
          onClick={() => document.getElementById('experiences').scrollIntoView({ behavior: 'smooth' })}
          className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-deep-900 bg-neon-cyan rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]"
        >
          <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10" />
          <span className="relative flex items-center gap-2">
            RESERVA TU DESCENSO
            <svg xmlns="http://www.w3.org/2000/svg" width="16" sm:width="20" height="16" sm:height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-y-1">
              <path d="M12 5v14"/><path d="m19 12-7 7-7-7"/>
            </svg>
          </span>
        </button>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce opacity-50 z-30">
        <span className="text-xs font-mono tracking-widest text-white mb-2">DESCENDER</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14"/><path d="m19 12-7 7-7-7"/>
        </svg>
      </div>
    </header>
  )
}
