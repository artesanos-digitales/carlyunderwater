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
    <section id="booking" className="py-20 sm:py-28 md:py-36 px-4 sm:px-6 md:px-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-deep-900 via-ocean-900/30 to-deep-900" />

      <div ref={ref} className="max-w-3xl mx-auto relative z-10 reveal text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-5">
          Asegura tu descenso
        </h2>
        <p className="text-gray-400 text-base md:text-lg mb-10 max-w-[52ch] mx-auto">
          ¿Listo para vivir la experiencia? Elige tu opción y bucea en el Sistema Arrecifal Veracruzano.
        </p>

        <button
          onClick={() => onReserve('Experiencia de buceo', '', 'Cuéntame qué experiencia te interesa')}
          className="inline-flex items-center justify-center gap-3 px-10 sm:px-14 py-4 sm:py-5 text-lg sm:text-xl font-bold text-deep-900 bg-neon-cyan rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all"
        >
          Reservar mi buceo
        </button>

        <p className="text-gray-500 text-xs sm:text-sm mt-6">Anticipo del 25% por transferencia. Fechas sujetas a disponibilidad.</p>
      </div>
    </section>
  )
}
