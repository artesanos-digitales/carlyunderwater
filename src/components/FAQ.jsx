import { useEffect, useRef, useState } from 'react'

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
    a: 'Experiencia Scuba es una única inmersión, un tanque puede durar desde 30 minutos hasta 45 minutos, dependiendo de tu consumo de aire. Te citaré 8 am, saldremos al mar y regresaremos aproximadamente a las 2 pm. El curso OPEN WATER DIVER tiene una duración de mínimo 6 días, acomodados de acuerdo a disponibilidad de la instructora y el alumno.',
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
    <section id="faq" className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-12 bg-deep-900 relative">
      <div ref={ref} className="max-w-3xl mx-auto reveal">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-xs sm:text-sm font-mono text-neon-cyan tracking-[0.2em] mb-2">// BASE DE CONOCIMIENTO</h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">Preguntas Frecuentes</h3>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`glass-panel rounded-xl overflow-hidden border border-white/5 transition-all duration-300 ${open === i ? 'bg-white/5' : ''}`}
            >
              <button
                className="w-full px-4 sm:px-6 py-4 sm:py-5 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggle(i)}
              >
                <span className="font-semibold text-sm sm:text-base md:text-lg pr-2">{faq.q}</span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${open === i ? 'rotate-180 bg-neon-cyan text-deep-900' : 'bg-white/5'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neon-cyan">
                    <path d="m6 9 6 6 6-6"/>
                  </svg>
                </div>
              </button>
              <div
                className="overflow-hidden transition-all duration-300"
                style={{ maxHeight: open === i ? '300px' : '0px', opacity: open === i ? 1 : 0 }}
              >
                <p className="text-gray-400 px-4 sm:px-6 pb-4 sm:pb-5 text-sm sm:text-base">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
