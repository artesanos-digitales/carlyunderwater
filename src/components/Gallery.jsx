import { useEffect, useRef } from 'react'

const PhotoIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
    <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
    <circle cx="9" cy="9" r="2"/>
    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
  </svg>
)

const WaveIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
    <path d="M2 12a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V7h-5a8 8 0 0 0-5 2 8 8 0 0 0-5-2H2Z"/>
  </svg>
)

const photos = [
  { src: '/assets/gallery/IMG_1643.jpg', alt: 'Buceo en el mar', icon: <PhotoIcon /> },
  { src: '/assets/gallery/IMG_1680.jpg', alt: 'Exploración submarina', icon: <PhotoIcon /> },
  { src: '/assets/gallery/IMG_1681.jpg', alt: 'Bajo el agua', icon: <PhotoIcon /> },
  { src: '/assets/gallery/IMG_1683.jpg', alt: 'Aventuras acuáticas', icon: <PhotoIcon /> },
  null, // CTA card
  { src: '/assets/gallery/IMG_1684.jpg', alt: 'Buzo en acción', icon: <PhotoIcon /> },
  { src: '/assets/gallery/IMG_1688.jpg', alt: 'Vida marina', icon: <WaveIcon /> },
  { src: '/assets/gallery/IMG_1689.jpg', alt: 'Sesión de buceo', icon: <PhotoIcon /> },
  { src: '/assets/gallery/P4150335.jpg', alt: 'Experiencia únicas', icon: <WaveIcon /> },
  { src: '/assets/gallery/P4170538.jpg', alt: 'Momentos increíbles', icon: <PhotoIcon /> },
]

export default function Gallery() {
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
    <section id="gallery" className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-12 bg-deep-800/30 relative">
      <div ref={ref} className="max-w-7xl mx-auto reveal">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-xs sm:text-sm font-mono text-neon-cyan tracking-[0.2em] mb-2">// LA GALERÍA</h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 uppercase tracking-wider">¿Quién soy?</h3>
          
          {/* About Carly */}
          <div className="max-w-3xl mx-auto mb-6 sm:mb-8 px-2">
            <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-4 sm:mb-6 leading-relaxed">
              Soy Carly, tu instructora. Bióloga y estudiante de un Doctorado en Ciencias Marinas. Soy buza desde hace 10 años y como podrás notarlo… amo el mar <span className="text-red-400">❤</span>. Me encanta enseñar, soy paciente y muy amable.
            </p>
            
            {/* Why SNSI */}
            <div className="glass-panel p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-white/10 text-left">
              <h4 className="text-base sm:text-lg md:text-xl font-bold text-neon-cyan mb-2 sm:mb-4">¿Por qué elegir SNSI?</h4>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-2 sm:mb-3">
                Scuba and Nitrox Safety International (SNSI) es una organización avalada por WRSTC, que cumple con todos los estándares ISO para la formación de buzos.
              </p>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-2 sm:mb-3">
                Te enseñamos a sentirte cómodo y seguro bajo el agua. Al final del curso serás un buzo responsable y con el máximo control de tu flotabilidad.
              </p>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Tu certificación es válida en cualquier parte del mundo.
              </p>
            </div>
          </div>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-6 space-y-4 sm:space-y-6">
          {photos.map((photo, i) =>
            photo === null ? (
              <div key="cta" className="group relative break-inside-avoid rounded-xl overflow-hidden cursor-pointer p-6 sm:p-8 glass-panel flex flex-col justify-center items-center text-center aspect-square">
                <h4 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-4">¿Quieres ver más?</h4>
                <p className="text-gray-400 text-xs sm:text-sm mb-4 sm:mb-6">Únete a nuestras inmersiones y forma parte de la galería.</p>
                <button
                  onClick={() => document.getElementById('booking').scrollIntoView()}
                  className="px-4 sm:px-6 py-2 bg-neon-cyan text-deep-900 rounded-full font-semibold text-sm sm:text-base hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-shadow"
                >
                  Vívelo tú mismo
                </button>
              </div>
            ) : (
              <div key={i} className="group relative break-inside-avoid rounded-xl overflow-hidden cursor-pointer">
                <img src={photo.src} alt={photo.alt} className="w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-deep-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  {photo.icon}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  )
}
