import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [isMuted, setIsMuted] = useState(false);
  const [track, setTrack] = useState({
    title: 'Lunar Drift',
    artist: 'Luna Waves',
    coverArt: 'https://images.pexels.com/photos/1884306/pexels-photo-1884306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  });
  const [isMinimized, setIsMinimized] = useState(true);
  
  const audioRef = useRef<HTMLAudioElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  
  // Load and set up audio
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      
      const handleLoadedMetadata = () => {
        if (audioRef.current) {
          setDuration(audioRef.current.duration);
        }
      };
      
      const handleTimeUpdate = () => {
        if (audioRef.current) {
          setCurrentTime(audioRef.current.currentTime);
        }
      };
      
      const handleEnded = () => {
        setIsPlaying(false);
        setCurrentTime(0);
        if (audioRef.current) {
          audioRef.current.currentTime = 0;
        }
      };
      
      audioRef.current.addEventListener('loadedmetadata', handleLoadedMetadata);
      audioRef.current.addEventListener('timeupdate', handleTimeUpdate);
      audioRef.current.addEventListener('ended', handleEnded);
      
      return () => {
        if (audioRef.current) {
          audioRef.current.removeEventListener('loadedmetadata', handleLoadedMetadata);
          audioRef.current.removeEventListener('timeupdate', handleTimeUpdate);
          audioRef.current.removeEventListener('ended', handleEnded);
        }
      };
    }
  }, []);
  
  // Handle play/pause
  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(() => {
          setIsPlaying(false);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);
  
  // Handle volume change
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);
  
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };
  
  const toggleMute = () => {
    setIsMuted(!isMuted);
  };
  
  const handleProgressClick = (e: React.MouseEvent) => {
    if (progressRef.current && audioRef.current) {
      const rect = progressRef.current.getBoundingClientRect();
      const pos = (e.clientX - rect.left) / rect.width;
      audioRef.current.currentTime = pos * duration;
    }
  };
  
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };
  
  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };
  
  return (
    <AnimatePresence>
      <motion.div 
        className={`fixed bottom-0 left-0 right-0 bg-black text-white z-40 transition-all ${
          isMinimized ? 'h-14' : 'h-24 md:h-20'
        }`}
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto px-4 h-full">
          <div className="flex items-center h-14">
            {/* Album art and info */}
            <div className="flex items-center mr-4">
              <img 
                src={track.coverArt} 
                alt={track.title} 
                className="w-10 h-10 object-cover rounded-md mr-3"
              />
              <div className={`overflow-hidden transition-all ${isMinimized ? 'w-20 md:w-auto' : ''}`}>
                <div className="truncate text-sm font-medium">{track.title}</div>
                <div className="truncate text-xs text-gray-400">{track.artist}</div>
              </div>
            </div>
            
            {/* Controls */}
            <div className="flex items-center space-x-3 mx-auto">
              <button 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Previous track"
              >
                <SkipBack size={20} />
              </button>
              
              <button 
                className="bg-[#FFD700] hover:bg-[#E6C200] text-black rounded-full w-8 h-8 flex items-center justify-center transition-colors"
                onClick={togglePlay}
                aria-label={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? <Pause size={18} /> : <Play size={18} className="ml-0.5" />}
              </button>
              
              <button 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Next track"
              >
                <SkipForward size={20} />
              </button>
            </div>
            
            {/* Progress bar (minimized state) */}
            {isMinimized && (
              <div 
                className="flex-grow mx-4 hidden md:block"
                ref={progressRef}
                onClick={handleProgressClick}
              >
                <div className="bg-gray-700 h-1 rounded-full overflow-hidden cursor-pointer">
                  <div 
                    className="bg-[#FFD700] h-full"
                    style={{ width: `${(currentTime / duration) * 100}%` }}
                  ></div>
                </div>
              </div>
            )}
            
            {/* Volume control */}
            <div className="hidden md:flex items-center space-x-2 ml-auto">
              <button 
                className="text-gray-400 hover:text-white transition-colors"
                onClick={toggleMute}
                aria-label={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
              </button>
              
              <div className="w-20 h-1 bg-gray-700 rounded-full overflow-hidden cursor-pointer">
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={volume}
                  onChange={(e) => setVolume(parseFloat(e.target.value))}
                  className="w-full"
                />
              </div>
            </div>
            
            {/* Minimize/Expand button */}
            <button 
              className="ml-4 md:ml-6 text-gray-400 hover:text-white transition-colors"
              onClick={toggleMinimize}
              aria-label={isMinimized ? 'Expand player' : 'Minimize player'}
            >
              <div className="w-6 h-1 bg-gray-400 rounded-full"></div>
            </button>
          </div>
          
          {/* Expanded player content */}
          {!isMinimized && (
            <div className="h-10 md:h-6 flex items-center space-x-4 pt-1">
              <div className="text-xs text-gray-400 w-10">
                {formatTime(currentTime)}
              </div>
              
              <div 
                className="flex-grow"
                ref={progressRef}
                onClick={handleProgressClick}
              >
                <div className="bg-gray-700 h-1 rounded-full overflow-hidden cursor-pointer">
                  <div 
                    className="bg-[#FFD700] h-full"
                    style={{ width: `${(currentTime / duration) * 100}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="text-xs text-gray-400 w-10">
                {formatTime(duration)}
              </div>
            </div>
          )}
        </div>
        
        {/* Audio element */}
        <audio
          ref={audioRef}
          src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" // Replace with actual track URL
          preload="metadata"
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default MusicPlayer;