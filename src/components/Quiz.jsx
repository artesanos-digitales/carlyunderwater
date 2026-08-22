import { useState, useEffect, useRef } from 'react'
import {
  ArrowRight, Check, Clock, Heart, ListChecks, ShieldCheck, Target, Timer,
} from '@phosphor-icons/react'

const questions = [
  {
    id: 1,
    question: '¿Cuál es tu experiencia en el mar?',
    options: [
      { text: 'Es mi primera vez. Solo he visto el mar desde la superficie.', scores: { scuba: 3, openwater: 1, junior: 0, scubadiver: 1 } },
      { text: 'He probado el buceo antes y quiero mi certificación.', scores: { scuba: 1, openwater: 2, junior: 0, scubadiver: 2 } },
      { text: 'Ya soy buzo certificado, pero busco que mi hijo/a (10-14 años) bucee conmigo.', scores: { scuba: 0, openwater: 0, junior: 3, scubadiver: 0 } },
      { text: 'He buceado antes, no tengo certificación y mi agenda es muy apretada.', scores: { scuba: 0, openwater: 1, junior: 0, scubadiver: 3 } },
    ]
  },
  {
    id: 2,
    question: '¿Qué buscas encontrar después de la inmersión?',
    options: [
      { text: 'Una experiencia épica de un solo día para tachar de mi lista de deseos.', scores: { scuba: 3, openwater: 0, junior: 0, scubadiver: 0 } },
      { text: 'Quiero poder bucear en cualquier parte del mundo.', scores: { scuba: 0, openwater: 3, junior: 0, scubadiver: 1 } },
      { text: 'Quiero compartir la pasión del buceo con mi familia.', scores: { scuba: 1, openwater: 0, junior: 3, scubadiver: 0 } },
      { text: 'Quiero certificarme pronto y responsablemente para poder bucear en mis próximas vacaciones.', scores: { scuba: 0, openwater: 1, junior: 0, scubadiver: 3 } },
    ]
  },
  {
    id: 3,
    question: '¿Quién va a bucear?',
    options: [
      { text: 'Yo (o quizá acompañantes).', scores: { scuba: 2, openwater: 1, junior: 0, scubadiver: 1 } },
      { text: 'Yo (u otro adulto), comprometido con un entrenamiento completo de 4 días.', scores: { scuba: 0, openwater: 3, junior: 0, scubadiver: 1 } },
      { text: 'Un joven explorador de entre 10 y 14 años.', scores: { scuba: 0, openwater: 0, junior: 3, scubadiver: 0 } },
      { text: 'Un adulto que necesita una certificación oficial pero eficiente en tiempo.', scores: { scuba: 0, openwater: 0, junior: 0, scubadiver: 3 } },
    ]
  },
  {
    id: 4,
    question: '¿De cuánto tiempo dispones para bucear?',
    options: [
      { text: 'Solo una mañana (aproximadamente 6 horas).', scores: { scuba: 3, openwater: 0, junior: 0, scubadiver: 0 } },
      { text: 'Estoy listo para invertir 4 días en mi formación profesional.', scores: { scuba: 0, openwater: 3, junior: 1, scubadiver: 0 } },
      { text: 'Tenemos disponibilidad para un curso adaptado al ritmo de un menor.', scores: { scuba: 0, openwater: 0, junior: 3, scubadiver: 0 } },
      { text: 'Tengo 2 días intensivos para lograr mi meta.', scores: { scuba: 0, openwater: 0, junior: 0, scubadiver: 3 } },
    ]
  },
  {
    id: 5,
    question: '¿Cómo defines tu inversión para este proyecto?',
    options: [
      { text: 'Quiero algo accesible ($2,350 MXN) para probar si el buceo es para mí.', scores: { scuba: 3, openwater: 0, junior: 0, scubadiver: 0 } },
      { text: 'Estoy listo para la inversión completa de formación internacional ($9,900 MXN).', scores: { scuba: 0, openwater: 3, junior: 0, scubadiver: 0 } },
      { text: 'Quiero celebrar una ocasión especial bajo el agua ($2,500 MXN).', scores: { scuba: 0, openwater: 0, junior: 3, scubadiver: 0 } },
      { text: 'Busco un punto medio entre costo, tiempo y certificación oficial ($8,500 MXN).', scores: { scuba: 0, openwater: 0, junior: 0, scubadiver: 3 } },
    ]
  },
]

const results = {
  scuba: {
    title: 'Iniciación al buceo',
    price: '$2,350 MXN',
    level: 'Principiante',
    match: 95,
    description: '¡Tu primera inmersión te espera! Vive la experiencia de respirar bajo el agua por primera vez. Una mañana inolvidable en el Sistema Arrecifal Veracruzano.',
    highlights: ['Sin experiencia necesaria', 'Solo una mañana (~6 horas)', 'Equipo completo incluido', 'Fotografías / video bajo el agua'],
  },
  junior: {
    title: 'Paquete cumpleañero',
    price: '$2,500 MXN',
    level: 'Principiante',
    match: 92,
    description: 'Celebra una ocasión especial bajo el agua con una experiencia divertida, segura y llena de recuerdos.',
    highlights: ['Buceo y snorkel', 'Cartel de cumpleaños', 'Pastel con velita de buzo / buza', 'Fotografías y video'],
  },
  openwater: {
    title: 'Open Water Diver',
    price: '$9,900 MXN',
    level: 'Principiante',
    match: 88,
    description: 'Tu paso hacia la certificación internacional completa. Desbloquea el acceso a bucear hasta 18 metros en cualquier parte del mundo, de por vida.',
    highlights: ['5 clases teóricas en línea', '4 días de buceo en mar', 'Fotografías y videos', 'Certificación y trámites'],
  },
  scubadiver: {
    title: 'Open Water Diver',
    price: '$8,500 MXN',
    level: 'Principiante',
    match: 90,
    description: 'Obtén tu certificación con un programa que combina clases teóricas, buceo en alberca y prácticas en el Sistema Arrecifal Veracruzano.',
    highlights: ['5 clases teóricas en línea', '2 días de mar y 2 de alberca', 'Fotografías y videos', 'Certificación y trámites'],
  }
}

export default function Quiz({ onReserve }) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [scores, setScores] = useState({ scuba: 0, junior: 0, openwater: 0, scubadiver: 0 })
  const [showResult, setShowResult] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null)
  const [quizStarted, setQuizStarted] = useState(false)
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

  const handleAnswer = (option) => {
    setSelectedOption(option)

    setTimeout(() => {
      const newScores = { ...scores }
      Object.keys(option.scores).forEach(key => {
        newScores[key] += option.scores[key]
      })
      setScores(newScores)
      setSelectedOption(null)

      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
      } else {
        setShowResult(true)
      }
    }, 800)
  }

  const getResult = () => {
    const maxScore = Math.max(...Object.values(scores))
    if (scores.scuba === maxScore) return 'scuba'
    if (scores.junior === maxScore) return 'junior'
    if (scores.scubadiver === maxScore) return 'scubadiver'
    return 'openwater'
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setScores({ scuba: 0, junior: 0, openwater: 0, scubadiver: 0 })
    setShowResult(false)
    setSelectedOption(null)
    setQuizStarted(true)
  }

  const result = getResult()
  const resultData = results[result]
  const progress = ((currentQuestion + 1) / questions.length) * 100

  return (
    <section id="quiz" className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 md:px-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-deep-900 via-ocean-900/50 to-deep-900" />

      <div ref={ref} className="max-w-3xl mx-auto relative z-10 reveal">
        <div className="text-center mb-8 sm:mb-12 px-2">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Descubre tu experiencia ideal
          </h2>
          <p className="text-gray-400 text-base md:text-lg">Responde 5 preguntas y te recomendamos la inmersión perfecta para ti.</p>
        </div>

        <div className="glass-panel rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 border border-white/10 shadow-2xl shadow-black/50">
          {!quizStarted ? (
            /* Pantalla de inicio */
            <div className="text-center py-4 sm:py-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-4">¿Listo para bucear?</h3>
              <p className="text-gray-400 mb-8 max-w-md mx-auto text-sm sm:text-base">
                En menos de 2 minutos, analizamos tu experiencia, objetivos y preferencias para encontrar la experiencia de buceo perfecta para ti.
              </p>
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                <div className="glass-panel inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm text-gray-300">
                  <Timer size={16} className="text-neon-cyan" /> 2 minutos
                </div>
                <div className="glass-panel inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm text-gray-300">
                  <ListChecks size={16} className="text-neon-cyan" /> 5 preguntas
                </div>
                <div className="glass-panel inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm text-gray-300">
                  <Target size={16} className="text-neon-cyan" /> Recomendación precisa
                </div>
              </div>
              <button
                onClick={() => setQuizStarted(true)}
                className="group inline-flex items-center gap-2 px-8 py-3.5 text-base font-semibold text-deep-900 bg-neon-cyan rounded-full transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
              >
                Comenzar test
                <ArrowRight size={18} weight="bold" className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          ) : showResult ? (
            /* Resultado */
            <div className="text-center py-4">
              <div className="inline-flex items-center justify-center w-20 sm:w-24 h-20 sm:h-24 rounded-full bg-neon-cyan/15 border border-neon-cyan/30 mb-6">
                <span className="text-2xl sm:text-3xl font-bold text-neon-cyan">{resultData.match}%</span>
              </div>

              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">{resultData.title}</h3>
              <div className="flex items-center justify-center gap-3 mb-6">
                <span className="text-lg sm:text-xl md:text-2xl font-bold text-neon-cyan">{resultData.price}</span>
                <span className="text-gray-500" aria-hidden="true">/</span>
                <span className="text-gray-400 text-sm sm:text-base">{resultData.level}</span>
              </div>

              <p className="text-gray-300 mb-8 max-w-lg mx-auto text-sm sm:text-base px-2">{resultData.description}</p>

              <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-8">
                {resultData.highlights.map((highlight, i) => (
                  <div key={i} className="glass-panel p-2 sm:p-3 rounded-xl border border-white/5 text-left">
                    <Check size={14} weight="bold" className="text-neon-cyan" />
                    <p className="text-[11px] sm:text-xs text-gray-300 mt-1">{highlight}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 justify-center">
                <button
                  onClick={() => onReserve(resultData.title, resultData.price, resultData.level)}
                  className="px-8 py-3 bg-neon-cyan text-deep-900 font-bold rounded-full hover:scale-[1.02] active:scale-[0.98] transition-all text-sm sm:text-base"
                >
                  Reservar
                </button>
                <button
                  onClick={resetQuiz}
                  className="px-8 py-3 glass-panel text-white rounded-full border border-white/20 hover:bg-white/10 active:scale-[0.98] transition-all text-sm sm:text-base"
                >
                  Hacer el test de nuevo
                </button>
              </div>
            </div>
          ) : (
            /* Pregunta */
            <>
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs sm:text-sm text-gray-400">Pregunta {currentQuestion + 1} de {questions.length}</span>
                  <span className="text-xs sm:text-sm text-neon-cyan font-mono">{Math.round(progress)}%</span>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-neon-cyan transition-all duration-500 rounded-full"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-8 text-center px-2">
                {questions[currentQuestion].question}
              </h3>

              <div className="space-y-2 sm:space-y-4">
                {questions[currentQuestion].options.map((option, i) => (
                  <button
                    key={i}
                    onClick={() => handleAnswer(option)}
                    disabled={selectedOption !== null}
                    className={`w-full p-3 sm:p-4 text-left rounded-xl border transition-all duration-300 ${
                      selectedOption === option
                        ? 'bg-neon-cyan/20 border-neon-cyan text-white scale-[1.02]'
                        : 'glass-panel border-white/10 hover:border-white/30 hover:bg-white/5'
                    } ${selectedOption !== null && selectedOption !== option ? 'opacity-50' : ''}`}
                  >
                    <span className="flex items-center gap-3">
                      <span className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold transition-colors shrink-0 ${
                        selectedOption === option
                          ? 'bg-neon-cyan text-deep-900'
                          : 'bg-white/10 text-gray-400'
                      }`}>
                        {String.fromCharCode(65 + i)}
                      </span>
                      <span className="text-xs sm:text-sm">{option.text}</span>
                    </span>
                  </button>
                ))}
              </div>

              <div className="flex justify-center gap-2 mt-8">
                {questions.map((_, i) => (
                  <div
                    key={i}
                    className={`h-2 rounded-full transition-all ${
                      i === currentQuestion
                        ? 'w-6 sm:w-8 bg-neon-cyan'
                        : i < currentQuestion
                        ? 'w-2 bg-neon-cyan/50'
                        : 'w-2 bg-white/20'
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {quizStarted && !showResult && (
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mt-8 text-xs sm:text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} weight="fill" className="text-neon-cyan" />
              Respuestas privadas
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-neon-cyan" />
              Menos de 2 min
            </div>
            <div className="flex items-center gap-2">
              <Heart size={16} weight="fill" className="text-neon-cyan" />
              +2,000 buzos
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
