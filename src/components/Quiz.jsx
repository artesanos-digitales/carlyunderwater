import { useState, useEffect, useRef } from 'react'

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
    question: '¿Qué buscas encontrar después inmersión?',
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
      { text: 'Quiero algo accesible ($2,000 MXN) para probar si el buceo es para mí.', scores: { scuba: 3, openwater: 0, junior: 0, scubadiver: 0 } },
      { text: 'Estoy listo para la inversión completa de formación internacional ($9,000 MXN).', scores: { scuba: 0, openwater: 3, junior: 0, scubadiver: 0 } },
      { text: 'Priorizo la seguridad y educación de mi hijo/a por encima de todo ($9,000 MXN).', scores: { scuba: 0, openwater: 0, junior: 3, scubadiver: 0 } },
      { text: 'Busco un punto medio entre costo, tiempo y certificación oficial ($6,000 MXN).', scores: { scuba: 0, openwater: 0, junior: 0, scubadiver: 3 } },
    ]
  },
]

const results = {
  scuba: {
    title: 'Experiencia Scuba',
    price: '$2,000 MXN',
    level: 'Principiante',
    match: 95,
    description: '¡Tu primera inmersión te espera! Vive la experiencia de respirar bajo el agua por primera vez. Una mañana inolvidable en el Sistema Arrecifal Veracruzano.',
    highlights: ['Sin experiencia necesaria', 'Solo una mañana (~6 horas)', 'Equipo completo incluido', '5 fotografías subacuáticas'],
    color: 'from-neon-cyan to-blue-500'
  },
  junior: {
    title: 'Junior Open Water Diver SNSI',
    price: '$9,000 MXN',
    level: 'Principiante',
    match: 92,
    description: 'La aventura submarina perfecta para jóvenes de 10 a 14 años. Certificación internacional adaptada a su edad, en un ambiente seguro y divertido.',
    highlights: ['Para jóvenes 10-14 años', 'Certificación junior internacional', 'Curso adaptado al menor', '10 fotografías + video'],
    color: 'from-purple-500 to-pink-500'
  },
  openwater: {
    title: 'Open Water Diver SNSI',
    price: '$9,000 MXN',
    level: 'Principiante',
    match: 88,
    description: 'Tu paso hacia la certificación internacional completa. Desbloquea el acceso a bucear hasta 18 metros en cualquier parte del mundo, de por vida.',
    highlights: ['Certificación internacional SNSI', '4 días de formación', 'Hasta 18 metros de profundidad', '10 fotografías + video'],
    color: 'from-orange-500 to-red-500'
  },
  scubadiver: {
    title: 'Scuba Diver SNSI',
    price: '$6,000 MXN',
    level: 'Principiante',
    match: 90,
    description: '¿Tienes poco tiempo pero quieres una certificación oficial? Certifícate en 2 días y bucea hasta 12 metros en cualquier parte del mundo.',
    highlights: ['Certificación oficial SNSI', 'Solo 2 días intensivos', 'Hasta 12 metros de profundidad', '5 fotografías + video'],
    color: 'from-neon-lime to-green-500'
  }
}

export default function quiz() {
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
    <section id="quiz" className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-12 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep-900 via-ocean-900/50 to-deep-900" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-neon-cyan/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div ref={ref} className="max-w-3xl mx-auto relative z-10 reveal">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8 md:mb-12 px-2">
          <div className="inline-flex items-center gap-2 glass-panel px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-mono text-neon-cyan mb-3 sm:mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" sm:width="16" height="14" sm:height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-pulse">
              <circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/>
            </svg>
            TEST DE BUCEO
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">Descubre Tu Experiencia Ideal</h2>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg">Responde 5 preguntas y te recomendaremos la inmersión perfecta para ti.</p>
        </div>

        {/* Quiz Card */}
        <div className="glass-panel rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 border border-white/10 shadow-2xl shadow-black/50">
          {!quizStarted ? (
            /* Welcome Screen */
            <div className="text-center py-4 sm:py-8">
              <div className="w-16 sm:w-20 h-16 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-full bg-gradient-to-br from-neon-cyan/20 to-blue-500/20 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" sm:width="40" height="32" sm:height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-neon-cyan">
                  <path d="M2 12h20"/><path d="M12 2v20"/><path d="m4.93 4.93 14.14 14.14"/><path d="m4.93 19.07 14.14-14.14"/><circle cx="12" cy="12" r="3"/>
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">¿Listo para bucear?</h3>
              <p className="text-gray-400 mb-6 sm:mb-8 max-w-md mx-auto text-sm sm:text-base">
                En menos de 2 minutos, analizaremos tu experiencia, objetivos y preferencias para encontrar la experiencia de buceo perfecta para ti.
              </p>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 sm:mb-8">
                <div className="glass-panel px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm">
                  <span className="text-neon-cyan">⏱</span> 2 minutos
                </div>
                <div className="glass-panel px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm">
                  <span className="text-neon-cyan">📋</span> 5 preguntas
                </div>
                <div className="glass-panel px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm">
                  <span className="text-neon-cyan">🎯</span> Recomendación precisa
                </div>
              </div>
              <button
                onClick={() => setQuizStarted(true)}
                className="group relative inline-flex items-center justify-center px-6 sm:px-10 py-3 sm:py-4 text-sm sm:text-base font-semibold text-deep-900 bg-neon-cyan rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]"
              >
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10" />
                <span className="relative flex items-center gap-2">
                  COMENZAR TEST
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" sm:width="20" height="16" sm:height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
                    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                  </svg>
                </span>
              </button>
            </div>
          ) : showResult ? (
            /* Result Screen */
            <div className="text-center py-4">
              <div className={`inline-flex items-center justify-center w-20 sm:w-24 h-20 sm:h-24 rounded-full bg-gradient-to-br ${resultData.color} mb-4 sm:mb-6 shadow-lg`}>
                <span className="text-2xl sm:text-3xl font-bold text-deep-900">{resultData.match}%</span>
              </div>
              
              <span className="inline-block glass-panel px-3 sm:px-4 py-1 rounded-full text-[10px] sm:text-xs font-mono text-neon-cyan mb-3 sm:mb-4">
                TU MEJOR OPCIÓN
              </span>
              
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">{resultData.title}</h3>
              <div className="flex items-center justify-center gap-2 sm:gap-4 mb-4 sm:mb-6">
                <span className="text-lg sm:text-xl md:text-2xl font-bold text-neon-cyan">{resultData.price}</span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-400 text-sm sm:text-base">{resultData.level}</span>
              </div>
              
              <p className="text-gray-300 mb-6 sm:mb-8 max-w-lg mx-auto text-sm sm:text-base px-2">{resultData.description}</p>
              
              <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-6 sm:mb-8">
                {resultData.highlights.map((highlight, i) => (
                  <div key={i} className="glass-panel p-2 sm:p-3 rounded-xl border border-white/5">
                    <span className="text-neon-cyan text-xs sm:text-sm">✓</span>
                    <p className="text-[10px] sm:text-xs text-gray-300 mt-1">{highlight}</p>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 justify-center">
                <button
                  onClick={() => document.getElementById('booking').scrollIntoView({ behavior: 'smooth' })}
                  className="px-6 sm:px-8 py-3 bg-neon-cyan text-deep-900 font-bold rounded-full hover:shadow-[0_0_25px_rgba(34,211,238,0.5)] transition-all text-sm sm:text-base"
                >
                  Reservar Ahora
                </button>
                <button
                  onClick={resetQuiz}
                  className="px-6 sm:px-8 py-3 glass-panel text-white rounded-full border border-white/20 hover:bg-white/10 transition-all text-sm sm:text-base"
                >
                  Hacer el test de nuevo
                </button>
              </div>
            </div>
          ) : (
            /* Question Screen */
            <>
              {/* Progress */}
              <div className="mb-6 sm:mb-8">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs sm:text-sm text-gray-400">Pregunta {currentQuestion + 1} de {questions.length}</span>
                  <span className="text-xs sm:text-sm text-neon-cyan font-mono">{Math.round(progress)}%</span>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-neon-cyan to-blue-500 transition-all duration-500 rounded-full"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              {/* Question */}
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-6 sm:mb-8 text-center px-2">
                {questions[currentQuestion].question}
              </h3>

              {/* Options */}
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
                    <span className="flex items-center gap-2 sm:gap-3">
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

              {/* Navigation dots */}
              <div className="flex justify-center gap-2 mt-6 sm:mt-8">
                {questions.map((_, i) => (
                  <div
                    key={i}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === currentQuestion
                        ? 'w-6 sm:w-8 bg-neon-cyan'
                        : i < currentQuestion
                        ? 'bg-neon-cyan/50'
                        : 'bg-white/20'
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Trust indicators */}
        {!showResult && quizStarted && (
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mt-6 sm:mt-8 text-xs sm:text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" sm:width="16" height="14" sm:height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neon-cyan">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/>
              </svg>
              Respuestas privadas
            </div>
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" sm:width="16" height="14" sm:height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neon-cyan">
                <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
              </svg>
              Menos de 2 min
            </div>
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" sm:width="16" height="14" sm:height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neon-cyan">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
              </svg>
              +2,000 buzos
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
