import { useState, useEffect, useRef } from 'react'
import { X, WhatsappLogo } from '@phosphor-icons/react'

const getToday = () => {
  const today = new Date()
  const month = String(today.getMonth() + 1).padStart(2, '0')
  const day = String(today.getDate()).padStart(2, '0')
  return `${today.getFullYear()}-${month}-${day}`
}

export default function BookingModal({ isOpen, onClose, serviceName, serviceSubtitle, servicePrice }) {
  const [formData, setFormData] = useState({
    nombre: '',
    edad: '',
    celular: '',
    correo: '',
    fecha: ''
  })
  const dialogRef = useRef(null)

  useEffect(() => {
    if (!isOpen) return
    document.body.style.overflow = 'hidden'

    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    dialogRef.current?.querySelector('input, button')?.focus()

    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onKey)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const today = getToday()
  const totalAmount = Number.parseInt(String(servicePrice).replace(/[^0-9]/g, ''), 10) || 0
  const hasPrice = totalAmount > 0
  const depositAmount = Math.round(totalAmount * 0.25)
  const balanceAmount = totalAmount - depositAmount
  const formatCurrency = (amount) => `$${new Intl.NumberFormat('es-MX').format(amount)} MXN`

  const handleSubmit = (e) => {
    e.preventDefault()

    const mensaje = `Carly, por favor comparteme los datos bancarios para apartar mi buceo

• Experiencia: ${serviceName}${serviceSubtitle && serviceSubtitle.startsWith('Cuéntame') ? '' : serviceSubtitle ? ` (${serviceSubtitle})` : ''}
• Nombre: ${formData.nombre}
• Edad: ${formData.edad}
• Celular: ${formData.celular}
• Correo: ${formData.correo}
• Fecha deseada: ${formData.fecha}`

    const whatsappUrl = `https://wa.me/522281773148?text=${encodeURIComponent(mensaje)}`
    window.open(whatsappUrl, '_blank')
    onClose()
  }

  const inputClass = 'w-full bg-deep-900/50 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-colors text-sm sm:text-base'

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" role="presentation">
      {/* Fondo */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={`Reserva: ${serviceName}`}
        className="relative glass-panel rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 max-w-lg w-full border border-white/20 shadow-2xl max-h-[90vh] overflow-y-auto"
      >
        <button
          onClick={onClose}
          aria-label="Cerrar"
          className="absolute top-3 right-3 sm:top-4 sm:right-4 w-9 h-9 rounded-full glass-panel flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 active:scale-[0.98] transition-all"
        >
          <X size={18} />
        </button>

        <div className="text-center mb-8">
          <h3 className="text-xl sm:text-2xl font-bold mb-2">Reserva tu experiencia</h3>
          <p className="text-gray-400 text-sm sm:text-base">{serviceName}</p>
          {serviceSubtitle && !serviceSubtitle.startsWith('Cuéntame') && (
            <p className="text-neon-cyan/80 text-xs sm:text-sm font-medium tracking-wide mt-1">{serviceSubtitle}</p>
          )}
          {hasPrice && (
            <p className="text-neon-cyan text-lg sm:text-xl font-bold mt-2">{formatCurrency(totalAmount)}</p>
          )}
        </div>

        {hasPrice && (
          <div className="bg-neon-cyan/10 border border-neon-cyan/30 rounded-xl p-3 sm:p-4 mb-6">
            <p className="text-neon-cyan font-semibold text-sm sm:text-base text-center mb-3">APARTA TU LUGAR CON EL 25%</p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs sm:text-sm">
              <span className="text-gray-400">Precio total</span>
              <span className="text-right text-white font-semibold">{formatCurrency(totalAmount)}</span>
              <span className="text-gray-400">Anticipo (25%)</span>
              <span className="text-right text-neon-cyan font-semibold">{formatCurrency(depositAmount)}</span>
              <span className="text-gray-400">Saldo pendiente</span>
              <span className="text-right text-white font-semibold">{formatCurrency(balanceAmount)}</span>
            </div>
            <p className="text-gray-300 text-[11px] sm:text-xs leading-relaxed mt-3 pt-3 border-t border-white/10">
              El anticipo no es reembolsable. Solo puedes cambiar la fecha avisando con al menos 48 horas de anticipación al buceo.
            </p>
            <p className="text-gray-400 text-[11px] sm:text-xs leading-relaxed mt-2">
              El anticipo se realiza por transferencia; te compartiré los datos por WhatsApp y juntos revisamos las fechas disponibles.
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="bk-nombre" className="block text-sm text-gray-400 mb-2">Nombre completo *</label>
            <input
              id="bk-nombre"
              type="text"
              required
              autoComplete="name"
              value={formData.nombre}
              onChange={(e) => setFormData({...formData, nombre: e.target.value})}
              className={inputClass}
              placeholder="Ej. María García López"
            />
          </div>

          <div>
            <label htmlFor="bk-fecha" className="block text-sm text-gray-400 mb-2">Fecha deseada (se revisa disponibilidad) *</label>
            <input
              id="bk-fecha"
              type="date"
              required
              min={today}
              value={formData.fecha}
              onChange={(e) => setFormData({...formData, fecha: e.target.value})}
              className={inputClass}
              style={{ colorScheme: 'dark' }}
            />
          </div>

          <div>
            <label htmlFor="bk-edad" className="block text-sm text-gray-400 mb-2">Edad *</label>
            <input
              id="bk-edad"
              type="number"
              required
              min="10"
              max="99"
              inputMode="numeric"
              value={formData.edad}
              onChange={(e) => setFormData({...formData, edad: e.target.value})}
              className={inputClass}
              placeholder="Ej. 28"
            />
          </div>

          <div>
            <label htmlFor="bk-celular" className="block text-sm text-gray-400 mb-2">Celular *</label>
            <input
              id="bk-celular"
              type="tel"
              required
              autoComplete="tel"
              value={formData.celular}
              onChange={(e) => setFormData({...formData, celular: e.target.value})}
              className={inputClass}
              placeholder="Ej. 2281234567"
            />
          </div>

          <div>
            <label htmlFor="bk-correo" className="block text-sm text-gray-400 mb-2">Correo electrónico *</label>
            <input
              id="bk-correo"
              type="email"
              required
              autoComplete="email"
              value={formData.correo}
              onChange={(e) => setFormData({...formData, correo: e.target.value})}
              className={inputClass}
              placeholder="Ej. maria@email.com"
            />
          </div>

          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 text-base sm:text-lg font-bold text-deep-900 bg-neon-cyan rounded-xl hover:scale-[1.01] active:scale-[0.99] transition-all mt-2"
          >
            <WhatsappLogo size={22} weight="fill" />
            Reserva ahora
          </button>
        </form>

        <p className="text-center text-gray-500 text-xs sm:text-sm mt-5">
          Al confirmar, serás redirigido a WhatsApp para completar tu reserva
        </p>
      </div>
    </div>
  )
}
