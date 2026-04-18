import { useState, useRef, useEffect } from 'react'

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(true)
  const [isHovered, setIsHovered] = useState(false)
  const audioRef = useRef(null)

  useEffect(() => {
    // Try to play automatically on page load
    const playAudio = async () => {
      try {
        await audioRef.current.play()
        setIsPlaying(true)
      } catch (error) {
        // Autoplay was prevented, user needs to click
        console.log('Autoplay blocked, user interaction required')
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
      className="fixed top-4 right-4 z-[60] flex items-center gap-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Audio element */}
      <audio ref={audioRef} loop autoPlay>
        <source src="/assets/music/M83 - My Tears Are Becoming A Sea (Official Video).mp3" type="audio/mpeg" />
      </audio>
      
      {/* Mini player */}
      <div className={`glass-panel rounded-full border border-white/10 transition-all duration-300 ${isHovered ? 'pr-4' : 'pr-2'} overflow-hidden`}>
        <div className="flex items-center">
          {/* Play/Pause button */}
          <button
            onClick={togglePlay}
            className="w-10 h-10 flex items-center justify-center text-neon-cyan hover:bg-white/10 transition-all"
          >
            {isPlaying ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5 3 19 12 5 21 5 3"/>
              </svg>
            )}
          </button>
          
          {/* Song info - appears on hover */}
          <div className={`overflow-hidden transition-all duration-300 ${isHovered ? 'w-48 opacity-100' : 'w-0 opacity-0'}`}>
            <p className="text-xs text-white whitespace-nowrap pr-2">My Tears Are Becoming A Sea</p>
            <p className="text-[10px] text-gray-400 whitespace-nowrap pr-2">M83</p>
          </div>
          
          {/* Equalizer animation when playing */}
          {isPlaying && (
            <div className="flex items-end gap-[2px] h-4 mr-2">
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
