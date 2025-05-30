import { Release } from '../types';

export const releases: Release[] = [
  {
    id: 'release-1',
    title: 'New Day',
    artist: 'Guyz At The Back',
    artistId: 'artist-4',
    coverArt: '/assets/audio/2025/1-NewDay/cover.jpg',
    releaseDate: '2025-05-01',
    type: 'single',
    tracks: [
      { id: 'track-1-1', title: 'New Day', duration: '2:58', previewUrl: '/assets/audio/2025/1-NewDay/audio.mp3' },
      // { id: 'track-1-2', title: 'New Day', duration: '0:27', previewUrl: '/assets/audio/2025/1-NewDay/audio.mp3' }
    ],
    links: {
      spotify: 'https://open.spotify.com/track/4Sfo972XT8goXlejTJDMaK?si=cc897c4848134719',
      appleMusic: 'https://music.apple.com/us/album/new-day/1810527645?i=1810527837',
      youtube: 'https://www.youtube.com/@gatb_records/'
    },
    featured: true
  },
  // {
  //   id: 'release-2',
  //   title: 'Urban Rhythms',
  //   artist: 'The Midnight Collective',
  //   artistId: 'artist-2',
  //   coverArt: 'https://images.pexels.com/photos/1670187/pexels-photo-1670187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  //   releaseDate: '2024-10-20',
  //   type: 'album',
  //   tracks: [
  //     { id: 'track-2-1', title: 'City Lights', duration: '4:12', previewUrl: 'https://example.com/preview4' },
  //     { id: 'track-2-2', title: 'Jazz Junction', duration: '5:30', previewUrl: 'https://example.com/preview2' },
  //     { id: 'track-2-3', title: 'Funk Factory', duration: '3:45', previewUrl: 'https://example.com/preview5' },
  //     { id: 'track-2-4', title: 'Midnight in Tokyo', duration: '6:18', previewUrl: 'https://example.com/preview3' }
  //   ],
  //   links: {
  //     spotify: 'https://open.spotify.com',
  //     appleMusic: 'https://music.apple.com'
  //   },
  //   featured: false
  // },
  // {
  //   id: 'release-3',
  //   title: 'Mountain Song',
  //   artist: 'Echo Valley',
  //   artistId: 'artist-3',
  //   coverArt: 'https://images.pexels.com/photos/5282269/pexels-photo-5282269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  //   releaseDate: '2024-08-05',
  //   type: 'single',
  //   tracks: [
  //     { id: 'track-3-1', title: 'Mountain Song', duration: '3:52', previewUrl: 'https://example.com/preview6' },
  //     { id: 'track-3-2', title: 'Mountain Song (Acoustic)', duration: '3:58', previewUrl: 'https://example.com/preview6-acoustic' }
  //   ],
  //   links: {
  //     spotify: 'https://open.spotify.com',
  //     appleMusic: 'https://music.apple.com',
  //     soundcloud: 'https://soundcloud.com'
  //   },
  //   featured: false
  // },
  // {
  //   id: 'release-4',
  //   title: 'Retrowave',
  //   artist: 'Neon Pulse',
  //   artistId: 'artist-4',
  //   coverArt: 'https://images.pexels.com/photos/1994818/pexels-photo-1994818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  //   releaseDate: '2024-06-30',
  //   type: 'ep',
  //   tracks: [
  //     { id: 'track-4-1', title: 'Neon Dreams', duration: '4:12', previewUrl: 'https://example.com/preview10' },
  //     { id: 'track-4-2', title: 'Night Drive', duration: '3:58', previewUrl: 'https://example.com/preview7' },
  //     { id: 'track-4-3', title: 'Digital Love', duration: '4:25', previewUrl: 'https://example.com/preview11' }
  //   ],
  //   links: {
  //     spotify: 'https://open.spotify.com',
  //     soundcloud: 'https://soundcloud.com'
  //   },
  //   featured: false
  // },
  // {
  //   id: 'release-5',
  //   title: 'Ethereal',
  //   artist: 'Skyward',
  //   artistId: 'artist-5',
  //   coverArt: 'https://images.pexels.com/photos/4737484/pexels-photo-4737484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  //   releaseDate: '2024-09-12',
  //   type: 'album',
  //   tracks: [
  //     { id: 'track-5-1', title: 'Ascension', duration: '6:24', previewUrl: 'https://example.com/preview12' },
  //     { id: 'track-5-2', title: 'Floating', duration: '5:18', previewUrl: 'https://example.com/preview8' },
  //     { id: 'track-5-3', title: 'Cloud Nine', duration: '7:32', previewUrl: 'https://example.com/preview13' },
  //     { id: 'track-5-4', title: 'Beyond', duration: '8:15', previewUrl: 'https://example.com/preview9' }
  //   ],
  //   links: {
  //     spotify: 'https://open.spotify.com',
  //     appleMusic: 'https://music.apple.com'
  //   },
  //   featured: false
  // }
];