import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Instagram, Twitter, Globe, ExternalLink, Music } from 'lucide-react';
import Section from '../components/ui/Section';
import Card, { CardMedia, CardContent, CardTitle } from '../components/ui/Card';
import Button from '../components/ui/Button';
import { artists } from '../data/artists';
import { releases } from '../data/releases';
import { events } from '../data/events';
import { format } from 'date-fns';

const ArtistDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [artist, setArtist] = useState(artists.find(a => a.id === id));
  const [artistReleases, setArtistReleases] = useState(releases.filter(r => r.artistId === id));
  const [artistEvents, setArtistEvents] = useState(events.filter(e => e.artistIds.includes(id || '')));
  
  useEffect(() => {
    if (artist) {
      document.title = `${artist.name} - Guyz At The Back`;
    } else {
      document.title = 'Artist Not Found - Guyz At The Back';
    }
  }, [artist]);
  
  if (!artist) {
    return (
      <div className="min-h-screen pt-32 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Artist Not Found</h1>
          <p className="mb-6">The artist you're looking for doesn't exist or has been removed.</p>
          <Button variant="primary">
            <Link to="/artists">Back to Artists</Link>
          </Button>
        </div>
      </div>
    );
  }
  
  return (
    <div>
      {/* Artist Hero */}
      <section className="pt-24 pb-12 relative">
        <div className="absolute inset-0 z-0">
          <img 
            src={artist.image} 
            alt={artist.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#4A148C]/80 to-black/90"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-white mt-12">
          <div className="flex flex-col md:flex-row items-center md:items-end gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-xl"
            >
              <img 
                src={artist.image} 
                alt={artist.name} 
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex-grow text-center md:text-left"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{artist.name}</h1>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-6">
                {artist.genres.map((genre, idx) => (
                  <span 
                    key={idx}
                    className="inline-block bg-white/10 rounded-full px-3 py-1 text-sm backdrop-blur-sm"
                  >
                    {genre}
                  </span>
                ))}
              </div>
              
              <div className="flex space-x-4 justify-center md:justify-start">
                {artist.socialLinks.instagram && (
                  <a 
                    href={artist.socialLinks.instagram} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#00B8A9] transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram size={24} />
                  </a>
                )}
                {artist.socialLinks.twitter && (
                  <a 
                    href={artist.socialLinks.twitter} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#00B8A9] transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter size={24} />
                  </a>
                )}
                {artist.socialLinks.website && (
                  <a 
                    href={artist.socialLinks.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#00B8A9] transition-colors"
                    aria-label="Website"
                  >
                    <Globe size={24} />
                  </a>
                )}
                {artist.socialLinks.spotify && (
                  <a 
                    href={artist.socialLinks.spotify} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#00B8A9] transition-colors"
                    aria-label="Spotify"
                  >
                    <Music size={24} />
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Artist Bio */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-[#4A148C]">Biography</h2>
          <div className="prose prose-lg">
            <p className="text-gray-700">{artist.bio}</p>
          </div>
        </div>
      </Section>
      
      {/* Releases */}
      {artistReleases.length > 0 && (
        <Section className="bg-gray-50">
          <h2 className="text-2xl font-bold mb-8 text-[#4A148C]">Releases</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {artistReleases.map((release) => (
              <motion.div 
                key={release.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Link to={`/releases/${release.id}`}>
                  <Card hover>
                    <CardMedia 
                      src={release.coverArt} 
                      alt={release.title} 
                      aspectRatio="square"
                    />
                    <CardContent>
                      <div className="flex justify-between items-start mb-2">
                        <CardTitle className="text-[#4A148C]">{release.title}</CardTitle>
                        <span className="inline-block bg-[#4A148C] text-white text-xs font-medium px-2 py-1 rounded uppercase">
                          {release.type}
                        </span>
                      </div>
                      <p className="text-gray-500 text-sm mb-2">
                        Released: {format(new Date(release.releaseDate), 'MMMM d, yyyy')}
                      </p>
                      <p className="text-gray-600">
                        {release.tracks.length} tracks
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </Section>
      )}
      
      {/* Upcoming Events */}
      {artistEvents.length > 0 && (
        <Section>
          <h2 className="text-2xl font-bold mb-8 text-[#4A148C]">Upcoming Events</h2>
          <div className="space-y-6">
            {artistEvents
              .filter(event => new Date(event.date) >= new Date())
              .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
              .map((event) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Link to={`/events#${event.id}`}>
                    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
                      <div className="flex flex-col md:flex-row gap-6">
                        {/* Date Box */}
                        <div className="flex-shrink-0">
                          <div className="bg-[#4A148C] text-white rounded-lg w-24 h-24 flex flex-col items-center justify-center">
                            <span className="text-2xl font-bold">
                              {format(new Date(event.date), 'd')}
                            </span>
                            <span className="text-sm uppercase">
                              {format(new Date(event.date), 'MMM')}
                            </span>
                            <span className="text-sm">
                              {format(new Date(event.date), 'yyyy')}
                            </span>
                          </div>
                        </div>
                        
                        {/* Event Details */}
                        <div className="flex-grow">
                          <h3 className="text-xl font-semibold text-[#4A148C] mb-2">
                            {event.title}
                          </h3>
                          <p className="text-gray-600 mb-4">
                            {event.venue}, {event.location}
                          </p>
                          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                            <div className="flex items-center">
                              <span>{event.time}</span>
                            </div>
                            {event.ticketLink && (
                              <a 
                                href={event.ticketLink} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-[#4A148C] hover:underline flex items-center"
                                onClick={(e) => e.stopPropagation()}
                              >
                                Get Tickets
                                <ExternalLink size={14} className="ml-1" />
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
          </div>
        </Section>
      )}
    </div>
  );
};

export default ArtistDetailPage;