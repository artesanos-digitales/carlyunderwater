import { useEffect, useRef } from 'react'

/**
 * Indicador de profundidad: la página es un descenso.
 * Sin estado de React por frame: un rAF escribe directamente en el DOM.
 */
export default function DepthIndicator() {
  const rootRef = useRef(null)
  const markerRef = useRef(null)
  const fillRef = useRef(null)
  const labelRef = useRef(null)

  useEffect(() => {
    let raf = null
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const paint = () => {
      raf = null
      const docH = document.documentElement.scrollHeight - window.innerHeight
      const pct = docH > 0 ? Math.min(Math.max(window.scrollY / docH, 0), 1) : 0
      if (markerRef.current) markerRef.current.style.top = `${pct * 100}%`
      if (fillRef.current) fillRef.current.style.height = `${pct * 100}%`
      if (labelRef.current) labelRef.current.textContent = `-${Math.round(pct * 100)} m`
    }

    const onScroll = () => {
      if (raf === null) raf = requestAnimationFrame(paint)
    }

    paint()
    if (!reduced) {
      window.addEventListener('scroll', onScroll, { passive: true })
      return () => {
        window.removeEventListener('scroll', onScroll)
        if (raf !== null) cancelAnimationFrame(raf)
      }
    }
  }, [])

  return (
    <div
      ref={rootRef}
      aria-hidden="true"
      className="hidden sm:flex fixed right-6 md:right-8 top-1/2 -translate-y-1/2 z-40 flex-col items-center pointer-events-none opacity-50 md:opacity-70"
    >
      <div className="h-48 w-px bg-white/20 relative">
        <div ref={fillRef} className="absolute top-0 left-0 w-full bg-neon-cyan/50" />
        <div
          ref={markerRef}
          className="absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-neon-cyan"
        />
      </div>
      <div ref={labelRef} className="text-sm font-mono text-neon-cyan mt-4 w-12 text-center font-bold">
        -0 m
      </div>
    </div>
  )
}
