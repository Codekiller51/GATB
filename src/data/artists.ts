import { Artist } from '../types';

export const artists: Artist[] = [
  {
    id: 'artist-1',
    name: 'David Rollit',
    bio: 'Sound engineer & sonic perfectionist. Specializes in mixing and mastering.',
    image: '/assets/Team/David.jpg',
    genres: ['Afro-Beat', 'Amapiano', 'etc...'],
    socialLinks: {
      // spotify: 'https://open.spotify.com',
      instagram: 'https://www.instagram.com/iam.david_rollit/',
      twitter: 'https://twitter.com',
    },
    featured: true
  },
  {
    id: 'artist-2',
    name: 'Champion 247',
    bio: 'Creative producer & culture strategist. Drives Afro-fusion and digital presence.',
    image: '/assets/Team/champ.jpeg',
    genres: ['Afro-Beat', 'Amapiano', 'etc...'],
    socialLinks: {
      // spotify: 'https://open.spotify.com',
      instagram: 'https://www.instagram.com/champion_247_original/',
      website: 'https://example.com',
    },
    featured: true
  },
  {
    id: 'artist-3',
    name: 'Anderson Michael',
    bio: 'Producer & beat architect. Fuses technology with rhythm for signature soundscapes.',
    image: '/assets/Team/ander.jpg',
    genres: ['Trap', 'Afro-Beat', 'etc...'],
    socialLinks: {
      // spotify: 'https://open.spotify.com',
      instagram: 'https://www.instagram.com/code_killer_51/',
      twitter: 'https://twitter.com',
    },
    featured: true
  },
  {
    id: 'artist-4',
    name: 'Guyz At The Back',
    bio: 'Bringing the best of the 21st century to the Afro-Beat scene.',
    image: '/assets/logo/DP.jpg',
    genres: ['David Rollit', 'Champion 247', 'Code-Killer'],
    socialLinks: {
      spotify: 'https://open.spotify.com',
      instagram: 'https://instagram.com',
    },
    featured: false
  },
  // {
  //   id: 'artist-5',
  //   name: 'Skyward',
  //   bio: 'Pioneers of the new ambient electronic movement, Skyward creates expansive soundscapes that transport listeners to otherworldly dimensions through carefully crafted sonic textures.',
  //   image: 'https://images.pexels.com/photos/1021876/pexels-photo-1021876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  //   genres: ['Ambient', 'Electronic', 'Experimental'],
  //   socialLinks: {
  //     spotify: 'https://open.spotify.com',
  //     website: 'https://example.com',
  //   },
  //   featured: false
  // }
];