import { useEffect, useRef } from 'react'
import { ArrowRight } from '@phosphor-icons/react'

const photos = [
  { src: '/assets/gallery/IMG_1643.jpg', alt: 'Inmersión en el Sistema Arrecifal Veracruzano' },
  { src: '/assets/gallery/IMG_1680.jpg', alt: 'Exploración submarina entre arrecifes' },
  { src: '/assets/gallery/IMG_1681.jpg', alt: 'Buceo bajo el agua con Carly' },
  { src: '/assets/gallery/IMG_1683.jpg', alt: 'Aventura acuática en Veracruz' },
  null, /* Tarjeta de reserva */
  { src: '/assets/gallery/IMG_1684.jpg', alt: 'Buzo en acción durante una inmersión' },
  { src: '/assets/gallery/IMG_1688.jpg', alt: 'Vida marina del arrecife' },
  { src: '/assets/gallery/IMG_1689.jpg', alt: 'Sesión de buceo privada' },
  { src: '/assets/gallery/P4150335.jpg', alt: 'Experiencias únicas bajo el agua' },
  { src: '/assets/gallery/P4170538.jpg', alt: 'Momentos memorables de buceo' },
]

export default function Gallery({ onReserve }) {
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
    <section id="gallery" className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 md:px-12 bg-deep-800/30 relative">
      <div ref={ref} className="max-w-7xl mx-auto reveal">
        <div className="mb-10 sm:mb-14 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            ¿Quién soy?
          </h2>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-[60ch]">
            Soy Carly, tu instructora. Bióloga y estudiante de un Doctorado en Ciencias Marinas. Soy buza desde hace 10 años y como podrás notarlo… amo el mar <span className="text-red-400" aria-hidden="true">❤</span><span className="sr-only">corazón</span>. Me encanta enseñar, soy paciente y muy amable.
          </p>
        </div>

        <div className="glass-panel p-4 sm:p-6 rounded-2xl border border-white/10 mb-10 sm:mb-14 max-w-3xl">
          <h3 className="text-base sm:text-lg md:text-xl font-bold text-neon-cyan mb-4">¿Por qué elegir SNSI?</h3>
          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-3">
            Scuba and Nitrox Safety International (SNSI) es una organización avalada por WRSTC, que cumple con todos los estándares ISO para la formación de buzos.
          </p>
          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-3">
            Te enseñamos a sentirte cómodo y seguro bajo el agua. Al final del curso serás un buzo responsable y con el máximo control de tu flotabilidad.
          </p>
          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
            Tu certificación es válida en cualquier parte del mundo.
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-6 space-y-4 sm:space-y-6">
          {photos.map((photo, i) =>
            photo === null ? (
              <div key="cta" className="group relative break-inside-avoid rounded-xl overflow-hidden p-6 sm:p-8 glass-panel flex flex-col justify-center items-center text-center aspect-square">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3">¿Quieres ver más?</h3>
                <p className="text-gray-400 text-xs sm:text-sm mb-6 max-w-[32ch]">Únete a nuestras inmersiones y forma parte de la galería.</p>
                <button
                  onClick={() => onReserve('Experiencia de buceo', '', 'Cuéntame qué experiencia te interesa')}
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-neon-cyan text-deep-900 rounded-full font-semibold text-sm sm:text-base hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  Reservar
                  <ArrowRight size={16} weight="bold" />
                </button>
              </div>
            ) : (
              <figure key={i} className="group relative break-inside-avoid rounded-xl overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </figure>
            )
          )}
        </div>
      </div>
    </section>
  )
}
