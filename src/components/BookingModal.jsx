import { useState, useEffect } from 'react'

export default function BookingModal({ isOpen, onClose, serviceName, servicePrice }) {
  const [formData, setFormData] = useState({
    nombre: '',
    edad: '',
    celular: '',
    correo: '',
    fecha: ''
  })

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const mensaje = `Hola Carly, estoy reservando contigo.

*Servicio:* ${serviceName}
*Precio:* ${servicePrice}

*Datos del cliente:*
• Nombre: ${formData.nombre}
• Edad: ${formData.edad}
• Celular: ${formData.celular}
• Correo: ${formData.correo}
• Fecha deseada: ${formData.fecha}

¿Cuál es el siguiente paso para confirmar mi aventura?`
    
    const whatsappUrl = `https://wa.me/522281773148?text=${encodeURIComponent(mensaje)}`
    window.open(whatsappUrl, '_blank')
    onClose()
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative glass-panel rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 max-w-lg w-full border border-white/20 shadow-2xl max-h-[90vh] overflow-y-auto">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 sm:top-4 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 rounded-full glass-panel flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" sm:width="20" height="16" sm:height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
          </svg>
        </button>

        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-full bg-gradient-to-br from-neon-cyan/20 to-blue-500/20 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" sm:width="32" height="28" sm:height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-neon-cyan">
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
            </svg>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold mb-2">Reserva tu experiencia</h3>
          <p className="text-gray-400 text-sm sm:text-base">{serviceName}</p>
          <p className="text-neon-cyan text-lg sm:text-xl font-bold mt-2">{servicePrice}</p>
        </div>

        {/* Info box */}
        <div className="bg-neon-cyan/10 border border-neon-cyan/30 rounded-xl p-3 sm:p-4 mb-4 sm:mb-6 text-center">
          <p className="text-neon-cyan font-semibold text-sm sm:text-base">APARTA TU LUGAR CON EL 25%</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
          <div>
            <label className="block text-sm text-gray-400 mb-2">Nombre Completo *</label>
            <input
              type="text"
              required
              value={formData.nombre}
              onChange={(e) => setFormData({...formData, nombre: e.target.value})}
              className="w-full bg-deep-900/50 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-colors text-sm sm:text-base"
              placeholder="Ej. María García López"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">Fecha *</label>
            <div className="relative">
              <input
                type="date"
                required
                value={formData.fecha}
                onChange={(e) => setFormData({...formData, fecha: e.target.value})}
                className="w-full bg-deep-900/50 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-colors text-sm sm:text-base"
                style={{ colorScheme: 'dark' }}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">Edad *</label>
            <input
              type="number"
              required
              min="10"
              max="99"
              value={formData.edad}
              onChange={(e) => setFormData({...formData, edad: e.target.value})}
              className="w-full bg-deep-900/50 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-colors text-sm sm:text-base"
              placeholder="Ej. 28"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">Celular *</label>
            <input
              type="tel"
              required
              value={formData.celular}
              onChange={(e) => setFormData({...formData, celular: e.target.value})}
              className="w-full bg-deep-900/50 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-colors text-sm sm:text-base"
              placeholder="Ej. 2281234567"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">Correo Electrónico *</label>
            <input
              type="email"
              required
              value={formData.correo}
              onChange={(e) => setFormData({...formData, correo: e.target.value})}
              className="w-full bg-deep-900/50 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-colors text-sm sm:text-base"
              placeholder="Ej. maria@email.com"
            />
          </div>

          <button
            type="submit"
            className="w-full group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold text-deep-900 bg-neon-cyan rounded-xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(34,211,238,0.5)] shadow-xl mt-4"
          >
            <span className="absolute w-0 h-0 transition-all duration-700 ease-out bg-white rounded-full group-hover:w-[400px] group-hover:h-[400px] opacity-20" />
            <span className="relative flex items-center gap-2 sm:gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" sm:width="24" height="20" sm:height="24" viewBox="0 0 24 24" fill="currentColor" className="text-deep-900">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              RESERVA AHORA
            </span>
          </button>
        </form>

        <p className="text-center text-gray-500 text-xs sm:text-sm mt-4 sm:mt-6">
          Al confirmar, serás redirigido a WhatsApp para completar tu reserva
        </p>
      </div>
    </div>
  )
}
