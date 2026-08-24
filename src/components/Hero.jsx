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
    <header className="relative min-h-[100dvh] flex items-end md:items-center overflow-hidden">
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
          className="absolute inset-0 w-full h-full object-cover object-[70%_center]"
          style={{ opacity: 0.82 }}
        >
          <source src="/assets/videos/mantas.webm" type="video/webm" />
          <source src="/assets/videos/mantas.mp4" type="video/mp4" />
        </video>

        {/* Lectura a la izquierda; el video respira a la derecha */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-deep-900 via-deep-900/75 to-deep-900/15" />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-deep-900 via-transparent to-deep-900/40" />

        <div ref={bubblesRef} className="absolute inset-0 overflow-hidden pointer-events-none z-20" />
      </div>

      <div className="relative z-30 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pt-24 pb-16 md:py-0">
        <div className="max-w-xl md:max-w-[34rem] text-left">
          <div className="glass-panel px-4 py-1.5 rounded-full text-xs font-mono tracking-[0.2em] text-neon-cyan mb-6 inline-flex items-center">
            BUCEA CONMIGO
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.08]">
            Enamórate del{' '}
            <em className="not-italic font-semibold text-neon-cyan">mar</em>
            {' '}conmigo
          </h1>

          <p className="text-base sm:text-lg text-gray-300 mb-8 max-w-[42ch] font-light leading-relaxed">
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
      </div>
    </header>
  )
}
