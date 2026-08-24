import { useEffect, useRef } from 'react'

export default function Booking({ onReserve }) {
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
    <section id="booking" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/assets/gallery/IMG_1688.jpg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-deep-900/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-deep-900 via-deep-900/70 to-deep-900/40" />
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-24 sm:py-28 md:py-36 reveal">
        <div className="max-w-xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-5">
            Asegura tu descenso
          </h2>
          <p className="text-gray-300 text-base md:text-lg mb-8 max-w-[48ch]">
            ¿Listo para vivir la experiencia? Elige tu opción y bucea en el Sistema Arrecifal Veracruzano.
          </p>
          <button
            onClick={() => onReserve('Experiencia de buceo', '', 'Cuéntame qué experiencia te interesa')}
            className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-deep-900 bg-neon-cyan rounded-full hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            Reservar
          </button>
          <p className="text-gray-400 text-xs sm:text-sm mt-5">Anticipo del 25% por transferencia. Fechas sujetas a disponibilidad.</p>
        </div>
      </div>
    </section>
  )
}
