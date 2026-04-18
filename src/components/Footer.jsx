export default function Footer() {
  return (
    <footer className="relative pt-12 sm:pt-16 md:pt-20 pb-6 sm:pb-10 px-4 sm:px-6 md:px-12 border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-deep-900 -z-20" />
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-cyan/50 to-transparent" />

      <div className="max-w-7xl mx-auto z-10 relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12 sm:mb-16">
          {/* Brand */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4 sm:mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neon-cyan">
                <path d="M2 12h20"/><path d="M12 2v20"/><path d="m4.93 4.93 14.14 14.14"/><path d="m4.93 19.07 14.14-14.14"/><circle cx="12" cy="12" r="3"/>
              </svg>
              <span className="text-lg sm:text-xl font-bold tracking-widest uppercase">Carly <span className="text-neon-cyan">underwater</span></span>
            </a>
            <div className="flex gap-3 sm:gap-4">
              {/* Instagram */}
              <a 
                href="https://www.instagram.com/carly_underwater?igsh=NzBmcTU2bnhlNHNj" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full glass-panel flex items-center justify-center text-gray-400 hover:text-neon-cyan hover:border-neon-cyan/50 transition-all hover:scale-110"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" sm:width="28" md:width="36" height="24" sm:height="28" md:height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              {/* TikTok */}
              <a 
                href="https://www.tiktok.com/@carly_underwater?_r=1&_t=ZS-95dMwwki2Tv" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full glass-panel flex items-center justify-center text-gray-400 hover:text-neon-cyan hover:border-neon-cyan/50 transition-all hover:scale-110"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" sm:width="28" md:width="36" height="24" sm:height="28" md:height="36" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4 sm:mb-6 uppercase tracking-wider text-sm">Empresa</h4>
            <ul className="space-y-2 sm:space-y-3 text-sm text-gray-400">
              {['Sobre mi', 'Contacto'].map(name => (
                <li key={name}><a href="#" className="hover:text-neon-cyan transition-colors">{name}</a></li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <h4 className="font-semibold text-white mb-4 sm:mb-6 uppercase tracking-wider text-sm">Informes de Descenso</h4>
            <p className="text-sm text-gray-400 mb-4">Suscríbete para recibir coordenadas exclusivas y acceso anticipado a nuevas expediciones.</p>
            <form className="relative group" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Correo electrónico"
                className="w-full bg-transparent border-b border-white/20 py-3 text-sm text-white focus:outline-none focus:border-neon-cyan transition-colors placeholder:text-gray-500"
                required
              />
              <button type="submit" className="absolute right-0 top-2 text-gray-400 hover:text-neon-cyan transition-colors p-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                </svg>
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-6 sm:pt-8 border-t border-white/5 text-xs sm:text-sm text-gray-500">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <p>© 2026 Artesanos Digitales. Todos los derechos reservados.</p>
            <a 
              href="https://artesanosdigitalescom.com.mx/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-neon-cyan hover:text-white transition-colors underline"
            >
              Diseña tu página con nosotros
            </a>
          </div>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos de Servicio</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
