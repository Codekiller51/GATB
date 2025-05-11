import React, { useRef, useEffect, useState } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, Loader } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePlayer } from '../../contexts/PlayerContext';
import { testTracks } from '../../data/testTracks';

const MusicPlayer: React.FC = () => {
  const { state, dispatch } = usePlayer();
  const [isMinimized, setIsMinimized] = useState(true);
  const [isDragging, setIsDragging] = useState(false);

  // Load test track on component mount
  useEffect(() => {
    if (testTracks.length > 0 && !state.currentTrack) {
      dispatch({ type: 'SET_TRACK', payload: testTracks[0] });
      dispatch({ type: 'SET_QUEUE', payload: testTracks });
    }
  }, []);
  
  const {
    currentTrack: track,
    isPlaying,
    volume,
    isMuted,
    currentTime,
    duration,
    isLoading,
    error
  } = state;
  
  const audioRef = useRef<HTMLAudioElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  
  // Load and set up audio
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
      
      const handleLoadedMetadata = () => {
        if (audioRef.current) {
          dispatch({ type: 'SET_DURATION', payload: audioRef.current.duration });
          dispatch({ type: 'SET_LOADING', payload: false });
        }
      };
      
      const handleTimeUpdate = () => {
        if (audioRef.current && !isDragging) {
          dispatch({ type: 'SET_CURRENT_TIME', payload: audioRef.current.currentTime });
        }
      };
      
      const handleEnded = () => {
        dispatch({ type: 'PAUSE' });
        dispatch({ type: 'SET_CURRENT_TIME', payload: 0 });
        dispatch({ type: 'NEXT_TRACK' });
      };
      
      const handleError = (e: ErrorEvent) => {
        dispatch({ type: 'SET_ERROR', payload: 'Error loading audio file' });
        dispatch({ type: 'SET_LOADING', payload: false });
      };
      
      audioRef.current.addEventListener('loadedmetadata', handleLoadedMetadata);
      audioRef.current.addEventListener('timeupdate', handleTimeUpdate);
      audioRef.current.addEventListener('ended', handleEnded);
      audioRef.current.addEventListener('error', handleError);
      
      return () => {
        if (audioRef.current) {
          audioRef.current.removeEventListener('loadedmetadata', handleLoadedMetadata);
          audioRef.current.removeEventListener('timeupdate', handleTimeUpdate);
          audioRef.current.removeEventListener('ended', handleEnded);
          audioRef.current.removeEventListener('error', handleError);
        }
      };
    }
  }, [volume, isMuted, isDragging, dispatch]);
  
  // Handle play/pause and track changes
  useEffect(() => {
    if (audioRef.current) {
      if (track) {
        audioRef.current.src = track.audioUrl;
        dispatch({ type: 'SET_LOADING', payload: true });
        if (isPlaying) {
          audioRef.current.play().catch((error) => {
            dispatch({ type: 'SET_ERROR', payload: 'Failed to play audio' });
            dispatch({ type: 'PAUSE' });
          });
        } else {
          audioRef.current.pause();
        }
      }
    }
  }, [track, isPlaying, dispatch]);
  
  const handleProgressInteraction = (clientX: number) => {
    if (progressRef.current && audioRef.current && duration > 0) {
      const rect = progressRef.current.getBoundingClientRect();
      const pos = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
      const newTime = pos * duration;
      audioRef.current.currentTime = newTime;
      dispatch({ type: 'SET_CURRENT_TIME', payload: newTime });
    }
  };

  const handleProgressMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    handleProgressInteraction(e.clientX);
  };

  const handleProgressMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleProgressInteraction(e.clientX);
    }
  };

  const handleProgressMouseUp = () => {
    setIsDragging(false);
  };

  const handleProgressTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    handleProgressInteraction(e.touches[0].clientX);
  };

  const handleProgressTouchMove = (e: React.TouchEvent) => {
    if (isDragging) {
      handleProgressInteraction(e.touches[0].clientX);
    }
  };

  const handleProgressTouchEnd = () => {
    setIsDragging(false);
  };

  const togglePlay = () => {
    dispatch({ type: isPlaying ? 'PAUSE' : 'PLAY' });
  };
  
  const toggleMute = () => {
    dispatch({ type: 'TOGGLE_MUTE' });
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    dispatch({ type: 'SET_VOLUME', payload: newVolume });
  };

  const handlePreviousTrack = () => {
    dispatch({ type: 'PREVIOUS_TRACK' });
  };

  const handleNextTrack = () => {
    dispatch({ type: 'NEXT_TRACK' });
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
              {track ? (
                <>
                  <img 
                    src={track.coverArt} 
                    alt={track.title} 
                    className="w-10 h-10 object-cover rounded-md mr-3"
                  />
                  <div className={`overflow-hidden transition-all ${isMinimized ? 'w-20 md:w-auto' : ''}`}>
                    <div className="truncate text-sm font-medium">{track.title}</div>
                    <div className="truncate text-xs text-gray-400">{track.artist}</div>
                  </div>
                </>
              ) : (
                <div className="text-gray-400 text-sm">No track selected</div>
              )}            
            </div>
            
            {/* Controls */}
            <div className="flex items-center space-x-3 mx-auto">
              <button 
                className="text-gray-400 hover:text-white transition-colors"
                onClick={handlePreviousTrack}
                aria-label="Previous track"
                disabled={!track}
              >
                <SkipBack size={20} />
              </button>
              
              <button 
                className="bg-[#FFD700] hover:bg-[#E6C200] text-black rounded-full w-8 h-8 flex items-center justify-center transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={togglePlay}
                aria-label={isPlaying ? 'Pause' : 'Play'}
                disabled={!track || isLoading}
              >
                {isLoading ? (
                  <Loader size={18} className="animate-spin" />
                ) : isPlaying ? (
                  <Pause size={18} />
                ) : (
                  <Play size={18} className="ml-0.5" />
                )}
              </button>
              
              <button 
                className="text-gray-400 hover:text-white transition-colors"
                onClick={handleNextTrack}
                aria-label="Next track"
                disabled={!track}
              >
                <SkipForward size={20} />
              </button>
            </div>
            
            {/* Progress bar (minimized state) */}
            {isMinimized && (
              <div 
                className="flex-grow mx-4 hidden md:block relative"
                ref={progressRef}
                onMouseDown={handleProgressMouseDown}
                onMouseMove={handleProgressMouseMove}
                onMouseUp={handleProgressMouseUp}
                onMouseLeave={handleProgressMouseUp}
                onTouchStart={handleProgressTouchStart}
                onTouchMove={handleProgressTouchMove}
                onTouchEnd={handleProgressTouchEnd}
              >
                <div className="bg-gray-700 h-2 rounded-full overflow-hidden cursor-pointer">
                  <div 
                    className="bg-[#FFD700] h-full relative"
                    style={{ width: `${(currentTime / duration) * 100}%` }}
                  >
                    <div 
                      className={`absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg transition-transform ${isDragging ? 'scale-150' : ''}`}
                    />
                  </div>
                </div>
                {error && (
                  <div className="absolute top-full mt-1 text-red-500 text-xs">
                    {error}
                  </div>
                )}
              </div>
            )}
            
            {/* Volume control */}
            <div className="hidden md:flex items-center space-x-2 ml-auto group relative">
              <button 
                className="text-gray-400 hover:text-white transition-colors"
                onClick={toggleMute}
                aria-label={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
              </button>
              <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-90 rounded-lg p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={volume}
                  onChange={handleVolumeChange}
                  className="w-24 h-1 appearance-none bg-gray-700 rounded-full overflow-hidden cursor-pointer"
                  style={{
                    backgroundImage: `linear-gradient(to right, #FFD700 0%, #FFD700 ${volume * 100}%, #4B5563 ${volume * 100}%, #4B5563 100%)`
                  }}
                />
              </div>
              
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
          src={track?.audioUrl}
          preload="metadata"
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default MusicPlayer;