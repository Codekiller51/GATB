// Define types for our music label website

export interface Artist {
  id: string;
  name: string;
  bio: string;
  image: string;
  genres: string[];
  socialLinks: {
    spotify?: string;
    instagram?: string;
    twitter?: string;
    website?: string;
  };
  featured: boolean;
}

export interface Release {
  id: string;
  title: string;
  artist: string;
  artistId: string;
  coverArt: string;
  releaseDate: string;
  type: 'album' | 'single' | 'ep';
  tracks: Track[];
  links: {
    spotify?: string;
    appleMusic?: string;
    soundcloud?: string;
    youtube?: string;
  };
  featured: boolean;
}

export interface Track {
  id: string;
  title: string;
  duration: string;
  previewUrl?: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  location: string;
  description: string;
  artistIds: string[];
  ticketLink?: string;
  image: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  image: string;
  category: 'release' | 'artist' | 'event' | 'GATB'  | 'announcement';
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  image: string;
}