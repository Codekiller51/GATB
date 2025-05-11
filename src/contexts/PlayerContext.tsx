import React, { createContext, useContext, useReducer, useEffect } from 'react';

interface Track {
  id: string;
  title: string;
  artist: string;
  coverArt: string;
  audioUrl: string;
}

interface PlayerState {
  currentTrack: Track | null;
  queue: Track[];
  isPlaying: boolean;
  volume: number;
  isMuted: boolean;
  currentTime: number;
  duration: number;
  isLoading: boolean;
  error: string | null;
}

type PlayerAction =
  | { type: 'SET_TRACK'; payload: Track }
  | { type: 'SET_QUEUE'; payload: Track[] }
  | { type: 'PLAY' }
  | { type: 'PAUSE' }
  | { type: 'NEXT_TRACK' }
  | { type: 'PREVIOUS_TRACK' }
  | { type: 'SET_VOLUME'; payload: number }
  | { type: 'TOGGLE_MUTE' }
  | { type: 'SET_CURRENT_TIME'; payload: number }
  | { type: 'SET_DURATION'; payload: number }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | null };

const initialState: PlayerState = {
  currentTrack: null,
  queue: [],
  isPlaying: false,
  volume: 0.8,
  isMuted: false,
  currentTime: 0,
  duration: 0,
  isLoading: false,
  error: null,
};

const PlayerContext = createContext<{
  state: PlayerState;
  dispatch: React.Dispatch<PlayerAction>;
}>({ state: initialState, dispatch: () => null });

const playerReducer = (state: PlayerState, action: PlayerAction): PlayerState => {
  switch (action.type) {
    case 'SET_TRACK':
      return {
        ...state,
        currentTrack: action.payload,
        isPlaying: true,
        error: null,
      };
    case 'SET_QUEUE':
      return {
        ...state,
        queue: action.payload,
      };
    case 'PLAY':
      return {
        ...state,
        isPlaying: true,
      };
    case 'PAUSE':
      return {
        ...state,
        isPlaying: false,
      };
    case 'NEXT_TRACK': {
      const currentIndex = state.queue.findIndex(
        track => track.id === state.currentTrack?.id
      );
      const nextTrack = state.queue[currentIndex + 1] || null;
      return {
        ...state,
        currentTrack: nextTrack,
        isPlaying: Boolean(nextTrack),
      };
    }
    case 'PREVIOUS_TRACK': {
      const currentIndex = state.queue.findIndex(
        track => track.id === state.currentTrack?.id
      );
      const previousTrack = state.queue[currentIndex - 1] || null;
      return {
        ...state,
        currentTrack: previousTrack,
        isPlaying: Boolean(previousTrack),
      };
    }
    case 'SET_VOLUME':
      return {
        ...state,
        volume: action.payload,
      };
    case 'TOGGLE_MUTE':
      return {
        ...state,
        isMuted: !state.isMuted,
      };
    case 'SET_CURRENT_TIME':
      return {
        ...state,
        currentTime: action.payload,
      };
    case 'SET_DURATION':
      return {
        ...state,
        duration: action.payload,
      };
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: action.payload,
      };
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export const PlayerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(playerReducer, initialState);

  // Load saved volume from localStorage
  useEffect(() => {
    const savedVolume = localStorage.getItem('playerVolume');
    if (savedVolume !== null) {
      dispatch({ type: 'SET_VOLUME', payload: parseFloat(savedVolume) });
    }
  }, []);

  // Save volume to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('playerVolume', state.volume.toString());
  }, [state.volume]);

  return (
    <PlayerContext.Provider value={{ state, dispatch }}>
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayer = () => {
  const context = useContext(PlayerContext);
  if (context === undefined) {
    throw new Error('usePlayer must be used within a PlayerProvider');
  }
  return context;
};