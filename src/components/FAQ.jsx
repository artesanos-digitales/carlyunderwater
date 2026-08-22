import { useEffect, useRef, useState } from 'react'
import { CaretDown } from '@phosphor-icons/react'

const faqs = [
  {
    q: '¿Necesito mi propio equipo?',
    a: 'No, tu instructora proporciona todo el equipo necesario.',
  },
  {
    q: '¿Qué certificación se requiere para las inmersiones?',
    a: 'Ninguna clase o certificación requiere experiencia previa.',
  },
  {
    q: '¿Necesito saber nadar?',
    a: 'No se requiere que seas un nadador experto, aunque es deseable que sepas flotar y no tengas pánico al agua.',
  },
  {
    q: '¿Cuánto dura la experiencia?',
    a: 'La iniciación al buceo es una única inmersión, un tanque puede durar desde 30 minutos hasta 45 minutos, dependiendo de tu consumo de aire. Te citaré 8 am, saldremos al mar y regresaremos aproximadamente a las 2 pm. El curso OPEN WATER DIVER tiene una duración de mínimo 6 días, acomodados de acuerdo a disponibilidad de la instructora y el alumno.',
  },
]

export default function FAQ() {
  const ref = useRef(null)
  const [open, setOpen] = useState(null)

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

  const toggle = (i) => setOpen(open === i ? null : i)

  return (
    <section id="faq" className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 md:px-12 bg-deep-900 relative">
      <div ref={ref} className="max-w-3xl mx-auto reveal">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-10 sm:mb-14">
          Preguntas frecuentes
        </h2>

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`glass-panel rounded-xl overflow-hidden border border-white/5 transition-colors duration-300 ${open === i ? 'bg-white/5' : ''}`}
            >
              <button
                className="w-full px-4 sm:px-6 py-4 sm:py-5 text-left flex justify-between items-center gap-4"
                aria-expanded={open === i}
                onClick={() => toggle(i)}
              >
                <span className="font-semibold text-sm sm:text-base md:text-lg">{faq.q}</span>
                <CaretDown
                  size={16}
                  weight="bold"
                  className={`shrink-0 transition-transform duration-300 text-neon-cyan ${open === i ? 'rotate-180' : ''}`}
                />
              </button>
              <div
                className="overflow-hidden transition-all duration-300"
                style={{ maxHeight: open === i ? '300px' : '0px', opacity: open === i ? 1 : 0 }}
              >
                <p className="text-gray-400 px-4 sm:px-6 pb-5 text-sm sm:text-base">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
