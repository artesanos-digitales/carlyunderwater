import { useEffect, useRef } from 'react'
import { ArrowRight } from '@phosphor-icons/react'
import ExperienceCard from './ExperienceCard'

const experiences = [
  {
    image: '/assets/gallery/IMG_7294.jpg',
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
    <section id="experiences" className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-ocean-900/20 rounded-full blur-[120px] pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto relative z-10 reveal">
        <div className="mb-12 sm:mb-16 max-w-2xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Inmersiones y certificaciones
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-[52ch]">
            Experiencias privadas. Incluye una sesión de fotos y/o video.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7">
          {experiences.map((exp, index) => (
            <ExperienceCard key={`${exp.title}-${index}`} {...exp} onReserve={onReserve} />
          ))}
        </div>

        <div className="mt-10 sm:mt-14 flex justify-center">
          <button
            onClick={() => document.getElementById('quiz').scrollIntoView({ behavior: 'smooth' })}
            className="group inline-flex items-center gap-2 px-7 py-3 text-base font-semibold text-neon-cyan border border-neon-cyan/30 rounded-full hover:bg-neon-cyan/10 active:scale-[0.98] transition-all"
          >
            Ayúdame a elegir
            <ArrowRight size={18} weight="bold" className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  )
}
