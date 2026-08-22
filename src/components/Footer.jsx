import { Fish, InstagramLogo, TiktokLogo } from '@phosphor-icons/react'

const socials = [
  {
    href: 'https://www.instagram.com/carly_underwater?igsh=NzBmcTU2bnhlNHNj',
    label: 'Instagram',
    Icon: InstagramLogo,
  },
  {
    href: 'https://www.tiktok.com/@carly_underwater?_r=1&_t=ZS-95dMwwki2Tv',
    label: 'TikTok',
    Icon: TiktokLogo,
  },
]

export default function Footer() {
  return (
    <footer className="relative pt-16 sm:pt-20 pb-8 px-4 sm:px-6 md:px-12 border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-deep-900 -z-20" />
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-cyan/50 to-transparent" />

      <div className="max-w-7xl mx-auto z-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 mb-12">
          {/* Marca y redes */}
          <div>
            <a href="#" className="inline-flex items-center gap-2 mb-5" aria-label="Carly UnderWater, inicio">
              <Fish size={24} weight="duotone" className="text-neon-cyan" />
              <span className="text-lg sm:text-xl font-bold tracking-widest uppercase">Carly <span className="text-neon-cyan">underwater</span></span>
            </a>
            <p className="text-sm text-gray-400 max-w-[40ch] mb-6">
              Buceo y certificaciones en el Sistema Arrecifal Veracruzano, con una instructora bióloga marina.
            </p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-11 h-11 rounded-full glass-panel flex items-center justify-center text-gray-400 hover:text-neon-cyan hover:scale-105 active:scale-[0.98] transition-all"
                >
                  <s.Icon size={20} weight="fill" />
                </a>
              ))}
            </div>
          </div>

          {/* Contacto directo */}
          <div className="md:justify-self-end">
            <h3 className="font-semibold text-white mb-4 text-base">Informes de descenso</h3>
            <p className="text-sm text-gray-400 mb-4 max-w-[44ch]">
              Escríbeme por WhatsApp y resolvemos dudas, fechas y disponibilidad.
            </p>
            <a
              href="https://wa.me/522281773148?text=Hola%20Carly%2C%20quiero%20informaci%C3%B3n%20sobre%20las%20experiencias%20de%20buceo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 border border-neon-cyan/30 text-neon-cyan rounded-full text-sm font-medium hover:bg-neon-cyan/10 active:scale-[0.98] transition-all"
            >
              +52 228 177 3148
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-3 pt-6 border-t border-white/5 text-xs sm:text-sm text-gray-500">
          <p>© 2026 Carly UnderWater. Todos los derechos reservados.</p>
          <a
            href="https://artesanosdigitalescom.com.mx/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neon-cyan hover:text-white transition-colors"
          >
            Diseña tu página con nosotros
          </a>
        </div>
      </div>
    </footer>
  )
}
