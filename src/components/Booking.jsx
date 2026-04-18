import { useEffect, useRef } from 'react'

export default function Booking() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('active'); obs.unobserve(el) } },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="booking" className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-deep-900 via-ocean-900/30 to-deep-900" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-neon-cyan/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div ref={ref} className="max-w-4xl mx-auto relative z-10 reveal">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 uppercase tracking-wide">Asegura Tu Descenso</h2>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg mb-8 sm:mb-12 px-4">¿Listo para vivir la experiencia? Descubre nuestras opciones y prepárate para bucear en el Sistema Arrecifal Veracruzano.</p>
          
          <button
            onClick={() => document.getElementById('experiences').scrollIntoView({ behavior: 'smooth' })}
            className="group relative inline-flex items-center justify-center px-8 sm:px-12 md:px-16 py-5 sm:py-6 md:py-8 text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-deep-900 bg-neon-cyan rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_0_60px_rgba(34,211,238,0.6)] shadow-2xl mx-4"
          >
            <span className="absolute w-0 h-0 transition-all duration-700 ease-out bg-white rounded-full group-hover:w-[400px] group-hover:h-[400px] opacity-20" />
            <span className="relative flex items-center gap-3 sm:gap-4">
              VER EXPERIENCIAS
              <svg xmlns="http://www.w3.org/2000/svg" width="24" sm:width="28" md:width="32" height="24" sm:height="28" md:height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-2">
                <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
              </svg>
            </span>
          </button>
          
          <p className="text-gray-500 text-xs sm:text-sm mt-6 sm:mt-8">Selecciona la experiencia ideal para ti</p>
        </div>
      </div>
    </section>
  )
}
