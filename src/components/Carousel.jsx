import { useCallback, useEffect, useRef, useState } from 'react'
import { ArrowLeft, ArrowRight } from '@phosphor-icons/react'

const AUTOPLAY_MS = 5000

export default function Carousel({ items, renderSlide }) {
  const count = items.length
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const reducedMotion = useRef(false)
  const timerRef = useRef(null)

  useEffect(() => {
    reducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }, [])

  const goTo = useCallback((i) => setIndex(((i % count) + count) % count), [count])
  const prev = useCallback(() => goTo(index - 1), [goTo, index])
  const next = useCallback(() => goTo(index + 1), [goTo, index])

  useEffect(() => {
    if (paused || reducedMotion.current || count < 2) return
    timerRef.current = setInterval(() => setIndex((i) => (i + 1) % count), AUTOPLAY_MS)
    return () => clearInterval(timerRef.current)
  }, [paused, count])

  return (
    <div
      role="region"
      aria-roledescription="carrusel"
      aria-label="Galería de fotos"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onKeyDown={(e) => {
        if (e.key === 'ArrowLeft') { e.preventDefault(); prev() }
        if (e.key === 'ArrowRight') { e.preventDefault(); next() }
      }}
      className="group/carousel relative"
      tabIndex={0}
    >
      <div className="relative overflow-hidden rounded-xl">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {items.map((item, i) => (
            <div
              key={i}
              className="w-full shrink-0 aspect-[4/3]"
              role="group"
              aria-roledescription="diapositiva"
              aria-label={`${i + 1} de ${count}`}
              aria-hidden={i !== index}
            >
              {renderSlide(item, i)}
            </div>
          ))}
        </div>

        <button
          onClick={prev}
          aria-label="Foto anterior"
          className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-deep-900/70 border border-white/10 text-white opacity-0 group-hover/carousel:opacity-100 focus-visible:opacity-100 transition-opacity"
        >
          <ArrowLeft size={20} weight="bold" />
        </button>
        <button
          onClick={next}
          aria-label="Foto siguiente"
          className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-deep-900/70 border border-white/10 text-white opacity-0 group-hover/carousel:opacity-100 focus-visible:opacity-100 transition-opacity"
        >
          <ArrowRight size={20} weight="bold" />
        </button>
      </div>

      <div className="mt-4 flex justify-center gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Ir a la foto ${i + 1}`}
            aria-current={i === index}
            className={`h-2 rounded-full transition-all ${i === index ? 'w-6 bg-neon-cyan' : 'w-2 bg-white/25 hover:bg-white/50'}`}
          />
        ))}
      </div>
    </div>
  )
}
