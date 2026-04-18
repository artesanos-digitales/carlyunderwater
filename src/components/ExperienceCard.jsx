export default function ExperienceCard({ image, level, levelColor, price, title, description, includes, extra, offset, onReserve }) {

  return (
    <div className={`group relative h-[400px] sm:h-[450px] md:h-[500px] rounded-2xl overflow-hidden cursor-pointer glass-panel border border-white/5 ${offset ? 'lg:-translate-y-6' : ''}`}>
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-deep-900 via-deep-900/60 to-transparent transition-opacity duration-300" />

      <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <span className={`glass-panel px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-mono ${levelColor}`}>{level}</span>
          <span className="glass-panel px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-mono text-neon-cyan font-bold bg-deep-900/50">{price}</span>
        </div>

        <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
          <h4 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">{title}</h4>
          
          {/* Descripción y "¿Qué incluye?" con fondo al hacer hover */}
          <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
            <div className="bg-deep-900/90 backdrop-blur-sm rounded-lg p-3 sm:p-4 mb-2 sm:mb-3 border border-white/10 shadow-xl max-h-[200px] sm:max-h-[250px] md:max-h-[280px] overflow-y-auto">
              <p className="text-xs sm:text-sm text-gray-200 leading-relaxed mb-2 sm:mb-3">
                {description}
              </p>
              
              {/* Badge ¿Qué incluye? */}
              <div className="inline-block glass-panel px-2 py-1 rounded-full text-[10px] sm:text-xs font-semibold text-neon-cyan mb-2">
                ¿Qué incluye?
              </div>
              
              <ul className="space-y-1 sm:space-y-1.5 mb-2 sm:mb-3">
                {includes?.map((item, i) => (
                  <li key={i} className="text-[10px] sm:text-xs text-gray-300 flex items-start gap-2">
                    <span className="text-neon-cyan shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              
              {/* Nota si hay texto extra */}
              {extra && (
                <p className="text-[10px] sm:text-xs text-gray-400 italic border-t border-white/10 pt-2">
                  {extra}
                </p>
              )}
            </div>
          </div>
          
          <button 
            onClick={() => onReserve(title, price)}
            className="w-full glass-panel py-2 sm:py-3 rounded-lg text-xs sm:text-sm font-medium hover:bg-neon-cyan/20 hover:text-neon-cyan transition-colors flex justify-center items-center gap-2"
          >
            Reservar
            <svg xmlns="http://www.w3.org/2000/svg" width="14" sm:width="16" height="14" sm:height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
