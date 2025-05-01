import { Artist } from '../types';

export const artists: Artist[] = [
  {
    id: 'artist-1',
    name: 'Luna Waves',
    bio: 'Luna Waves brings a fresh blend of electronic beats with soulful vocals, creating an atmospheric sound that transcends genres. Based in Berlin, this innovative artist has been making waves in the underground scene for over 5 years.',
    image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    genres: ['Electronic', 'Soul', 'Ambient'],
    socialLinks: {
      spotify: 'https://open.spotify.com',
      instagram: 'https://instagram.com',
      twitter: 'https://twitter.com',
    },
    featured: true
  },
  {
    id: 'artist-2',
    name: 'The Midnight Collective',
    bio: 'A dynamic group of versatile musicians who blend jazz, funk, and hip-hop elements. Their improvisational performances have earned them a devoted following across the festival circuit.',
    image: 'https://images.pexels.com/photos/1644616/pexels-photo-1644616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    genres: ['Jazz', 'Funk', 'Hip-Hop'],
    socialLinks: {
      spotify: 'https://open.spotify.com',
      instagram: 'https://instagram.com',
      website: 'https://example.com',
    },
    featured: true
  },
  {
    id: 'artist-3',
    name: 'Echo Valley',
    bio: 'Echo Valley creates immersive folk-rock soundscapes inspired by nature and storytelling traditions. Their harmonies and acoustic instrumentation have captivated audiences worldwide.',
    image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    genres: ['Folk', 'Rock', 'Acoustic'],
    socialLinks: {
      spotify: 'https://open.spotify.com',
      instagram: 'https://instagram.com',
      twitter: 'https://twitter.com',
    },
    featured: true
  },
  {
    id: 'artist-4',
    name: 'Neon Pulse',
    bio: 'Bringing the retro synth sounds of the 80s into the modern era, Neon Pulse creates energetic dance tracks that balance nostalgia with cutting-edge production techniques.',
    image: 'https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    genres: ['Synthwave', 'Electronic', 'Retro'],
    socialLinks: {
      spotify: 'https://open.spotify.com',
      instagram: 'https://instagram.com',
    },
    featured: false
  },
  {
    id: 'artist-5',
    name: 'Skyward',
    bio: 'Pioneers of the new ambient electronic movement, Skyward creates expansive soundscapes that transport listeners to otherworldly dimensions through carefully crafted sonic textures.',
    image: 'https://images.pexels.com/photos/1021876/pexels-photo-1021876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    genres: ['Ambient', 'Electronic', 'Experimental'],
    socialLinks: {
      spotify: 'https://open.spotify.com',
      website: 'https://example.com',
    },
    featured: false
  }
];