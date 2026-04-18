import { useEffect, useState } from 'react'

export default function DepthIndicator() {
  const [pct, setPct] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const docH = document.documentElement.scrollHeight - window.innerHeight
      setPct(Math.min(Math.max(window.scrollY / docH, 0), 1))
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const depth = Math.round(pct * 100)

  return (
    <div className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center pointer-events-none mix-blend-screen opacity-50 md:opacity-100 transition-opacity">
      <div className="text-xs font-mono text-neon-cyan rotate-90 mb-8 tracking-widest">DEPTH</div>
      <div className="h-48 w-px bg-white/20 relative">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-neon-cyan shadow-[0_0_10px_rgba(34,211,238,1)] transition-all duration-100"
          style={{ top: `${pct * 100}%` }}
        />
        <div
          className="absolute top-0 left-0 w-full bg-neon-cyan/50 transition-all duration-100"
          style={{ height: `${pct * 100}%` }}
        />
      </div>
      <div className="text-sm font-mono text-neon-cyan mt-4 w-12 text-center font-bold">
        -{depth} m
      </div>
    </div>
  )
}
