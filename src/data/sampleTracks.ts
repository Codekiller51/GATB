export interface Track {
  id: string;
  title: string;
  artist: string;
  coverArt: string;
  audioUrl: string;
}

export const sampleTracks: Track[] = [
  {
    id: '1',
    title: 'Summer Breeze',
    artist: 'Guyz At The Back',
    coverArt: 'https://picsum.photos/200/200?random=1',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
  },
  {
    id: '2',
    title: 'Midnight Dreams',
    artist: 'Guyz At The Back',
    coverArt: 'https://picsum.photos/200/200?random=2',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3'
  },
  {
    id: '3',
    title: 'Urban Rhythm',
    artist: 'Guyz At The Back',
    coverArt: 'https://picsum.photos/200/200?random=3',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3'
  },
  {
    id: '4',
    title: 'Electric Sunset',
    artist: 'Guyz At The Back',
    coverArt: 'https://picsum.photos/200/200?random=4',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3'
  }
];