import { Check, ArrowRight } from '@phosphor-icons/react'

export default function ExperienceCard({ image, price, title, subtitle, description, includes, extra, onReserve }) {

  return (
    <div className="group relative min-h-[380px] sm:min-h-[440px] md:min-h-[480px] rounded-2xl overflow-hidden glass-panel">
      <img
        src={image}
        alt={`Experiencia: ${title}${subtitle ? ` (${subtitle})` : ''}`}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-deep-900 via-deep-900/60 to-transparent" />

      <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <span className="glass-panel px-3 py-1 rounded-full text-[11px] font-mono text-white/80">Principiante</span>
          <span className="glass-panel px-3 py-1 rounded-full text-[11px] font-mono text-neon-cyan font-bold bg-deep-900/50">{price}</span>
        </div>

        <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
          <h3 className={`text-lg sm:text-xl md:text-2xl font-bold ${subtitle ? 'mb-0' : 'mb-2'}`}>{title}</h3>
          {subtitle && (
            <p className="text-xs sm:text-sm text-neon-cyan/80 font-medium tracking-wide mb-2">
              {subtitle}
            </p>
          )}

          {/* Descripción e incluye, con fondo al hacer hover */}
          <div className="opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition-all duration-500 delay-100">
            <div className="bg-deep-900/90 backdrop-blur-sm rounded-lg p-3 sm:p-4 mb-3 border border-white/10 max-h-[200px] sm:max-h-[250px] md:max-h-[280px] overflow-y-auto">
              <p className="text-xs sm:text-sm text-gray-200 leading-relaxed mb-3">
                {description}
              </p>

              <div className="inline-block glass-panel px-2 py-1 rounded-full text-[10px] sm:text-xs font-semibold text-neon-cyan mb-2">
                ¿Qué incluye?
              </div>

              <ul className="space-y-1 sm:space-y-1.5 mb-3">
                {includes?.map((item, i) => (
                  <li key={i} className="text-[11px] sm:text-xs text-gray-300 flex items-start gap-2">
                    <Check size={12} weight="bold" className="text-neon-cyan shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>

              {extra && (
                <p className="text-[10px] sm:text-xs text-gray-400 italic border-t border-white/10 pt-2">
                  {extra}
                </p>
              )}
            </div>
          </div>

          <button
            onClick={() => onReserve(title, price, subtitle)}
            className="w-full glass-panel py-2 sm:py-3 rounded-lg text-xs sm:text-sm font-medium hover:bg-neon-cyan/20 hover:text-neon-cyan active:scale-[0.98] transition-all flex justify-center items-center gap-2"
          >
            Reservar
            <ArrowRight size={14} weight="bold" />
          </button>
        </div>
      </div>
    </div>
  )
}
