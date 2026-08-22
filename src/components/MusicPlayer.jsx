import { useState, useRef, useEffect } from 'react'
import { Pause, Play } from '@phosphor-icons/react'

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(true)
  const [isHovered, setIsHovered] = useState(false)
  const audioRef = useRef(null)

  useEffect(() => {
    const playAudio = async () => {
      try {
        await audioRef.current.play()
        setIsPlaying(true)
      } catch {
        // Autoplay bloqueado: el usuario decide con el botón
        setIsPlaying(false)
      }
    }
    playAudio()
  }, [])

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <div
      className="fixed bottom-4 right-4 md:bottom-auto md:top-4 md:right-6 z-[60] flex items-center gap-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <audio ref={audioRef} loop autoPlay>
        <source src="/assets/music/M83 - My Tears Are Becoming A Sea (Official Video).mp3" type="audio/mpeg" />
      </audio>

      <div className={`glass-panel rounded-full border border-white/10 transition-all duration-300 ${isHovered ? 'pr-4' : 'pr-2'} overflow-hidden`}>
        <div className="flex items-center">
          <button
            onClick={togglePlay}
            aria-label={isPlaying ? 'Pausar música' : 'Reproducir música'}
            aria-pressed={isPlaying}
            className="w-10 h-10 flex items-center justify-center text-neon-cyan hover:bg-white/10 active:scale-[0.98] transition-all"
          >
            {isPlaying ? <Pause size={18} weight="fill" /> : <Play size={18} weight="fill" />}
          </button>

          <div className={`overflow-hidden transition-all duration-300 ${isHovered ? 'w-48 opacity-100' : 'w-0 opacity-0'}`}>
            <p className="text-xs text-white whitespace-nowrap pr-2">My Tears Are Becoming A Sea</p>
            <p className="text-[10px] text-gray-400 whitespace-nowrap pr-2">M83</p>
          </div>

          {isPlaying && (
            <div className="flex items-end gap-[2px] h-4 mr-2" aria-hidden="true">
              <div className="w-[3px] h-1 bg-neon-cyan rounded-full animate-pulse" style={{ animationDuration: '0.5s' }} />
              <div className="w-[3px] h-2 bg-neon-cyan rounded-full animate-pulse" style={{ animationDuration: '0.7s', animationDelay: '0.1s' }} />
              <div className="w-[3px] h-3 bg-neon-cyan rounded-full animate-pulse" style={{ animationDuration: '0.6s', animationDelay: '0.2s' }} />
              <div className="w-[3px] h-2 bg-neon-cyan rounded-full animate-pulse" style={{ animationDuration: '0.8s', animationDelay: '0.3s' }} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
