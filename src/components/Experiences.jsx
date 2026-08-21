import { useEffect, useRef } from 'react'
import ExperienceCard from './ExperienceCard'

const experiences = [
  {
    image: '/assets/gallery/IMG_7294.jpg',
    level: 'Principiante', levelColor: 'text-white/90',
    price: '$2,350 MXN', title: 'Iniciación al buceo',
    description: '¿Alguna vez has soñado con volar? Esta es tu iniciación. Sin necesidad de experiencia previa, te llevamos de la mano a respirar bajo el azul por primera vez.',
    includes: [
      'Material digital',
      '1 Buceo (1 tanque) a máximo 8 metros',
      '1 Clase teórica básica',
      'Instructora profesional privada (Carly)',
      'Equipo completo',
      'Fotografías / video bajo el agua',
      'Bitácora y sticker de regalo',
      'Lunch (volován, fruta y agua)'
    ],
    extra: 'Te citaré aproximadamente 8 am para tu clase teórica. Prepararemos tu equipo y nos iremos al mar. Tendremos una sesión de snorkel y ahora sí… ¡a bucear! Regresamos a tierra aproximadamente a las 2 pm. Incluye lunch (fruta y volovan) y una botellita de agua.',
    offset: false,
  },
  {
    image: '/assets/gallery/IMG_7310.jpg',
    level: 'Principiante', levelColor: 'text-neon-cyan',
    price: '$9,900 MXN', title: 'Open Water Diver', subtitle: 'Completamente en el mar',
    description: 'Obtén tu certificación internacional y bucea en todo el planeta hasta los 18 metros. Aprende a dominar el equipo y navega con autonomía en cualquier océano del mundo.',
    includes: [
      'Instructora profesional privada (Carly)',
      '5 Clases teóricas en línea (antes del buceo) y material de estudio',
      '4 Días de buceo en mar (Sistema Arrecifal Veracruzano)',
      'Equipo completo',
      '¡Todas las fotografías y videos que pueda tomarte!',
      'Bitácora y sticker de regalo',
      'Lunch diario (volován, fruta y agua)',
      'Certificación y trámites'
    ],
    extra: 'Los días deben programarse con anticipación. Incluye lunch en el mar.',
    offset: true,
  },
  {
    image: '/assets/gallery/IMG_9701.jpg',
    level: 'Principiante', levelColor: 'text-purple-400',
    price: '$2,500 MXN', title: 'Paquete cumpleañero',
    description: 'La aventura no tiene edad, tiene actitud. Diseñado para jóvenes de 10 a 14 años que buscan explorar el mundo submarino, desarrollando disciplina y respeto por la vida marina.',
    includes: [
      '1 Buceo (1 tanque) a máximo 8 metros',
      '1 Clase teórica básica y snorkel',
      'Instructora profesional privada (Carly)',
      'Equipo completo',
      'Fotografías / video con cartel de cumpleaños',
      'Bitácora, sticker y tarjeta cumpleañera',
      'Pastel con velita de buzo / buza',
      'Lunch (volován, fruta y agua)'
    ],
    extra: 'Te citaré aproximadamente 8 am para tu clase teórica. Prepararemos tu equipo y nos iremos al mar. Tendremos una sesión de snorkel y ahora sí… ¡a bucear! Regresamos a tierra aproximadamente a las 2 pm. Incluye lunch (fruta y volovan) y una botellita de agua.',
    offset: false,
  },
  {
    image: '/assets/gallery/IMG_1687.jpg',
    level: 'Principiante', levelColor: 'text-neon-lime',
    price: '$8,500 MXN', title: 'Open Water Diver', subtitle: 'Alberca + mar',
    description: '¿Tienes poco tiempo pero aún así quieres certificarte? Este curso te permitirá bucear hasta 12 metros en cualquier parte del mundo.',
    includes: [
      'Instructora profesional privada (Carly)',
      '5 Clases teóricas en línea (antes del buceo) y material de estudio',
      '2 Días de buceo en mar (Sistema Arrecifal Veracruzano) y 2 días en alberca',
      'Equipo completo',
      '¡Todas las fotografías y videos que pueda tomarte!',
      'Bitácora y sticker de regalo',
      'Lunch en los días de mar (volován, fruta y agua)',
      'Certificación y trámites'
    ],
    extra: 'Los días deben programarse con anticipación. Incluye lunch en el mar.',
    offset: true,
  },
]

export default function Experiences({ onReserve }) {
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
    <section id="experiences" className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-12 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-ocean-900/20 rounded-full blur-[120px] pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto relative z-10 reveal">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 sm:mb-12 gap-4 sm:gap-6">
          <div>
            <h2 className="text-xs sm:text-sm font-mono text-neon-cyan tracking-[0.2em] mb-2">// Experiencias</h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">Inmersiones y certificaciones</h3>
          </div>
          <p className="text-gray-400 max-w-md text-sm md:text-base">
            Experiencias privadas. Incluye una sesión de fotos y/o video.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {experiences.map((exp, index) => (
            <ExperienceCard key={`${exp.title}-${index}`} {...exp} onReserve={onReserve} />
          ))}
        </div>

        <div className="mt-8 sm:mt-12 text-center">
          <button 
            onClick={() => document.getElementById('quiz').scrollIntoView({ behavior: 'smooth' })}
            className="group relative inline-flex items-center justify-center px-6 sm:px-8 md:px-12 py-4 sm:py-5 text-base sm:text-lg md:text-xl font-bold text-deep-900 bg-neon-cyan rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(34,211,238,0.6)] shadow-xl mx-4"
          >
            <span className="absolute w-0 h-0 transition-all duration-700 ease-out bg-white rounded-full group-hover:w-[500px] group-hover:h-[500px] opacity-20" />
            <span className="relative flex items-center gap-2 sm:gap-3 text-center">
              ¿No sabes cuál es tu mejor opción? Click aquí
              <svg xmlns="http://www.w3.org/2000/svg" width="20" sm:width="24" height="20" sm:height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-2 shrink-0">
                <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}
