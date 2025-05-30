import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { ExternalLink, Music, Play, Pause, Calendar, Clock } from 'lucide-react';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import { releases } from '../data/releases';
import { artists } from '../data/artists';

const ReleaseDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [release, setRelease] = useState(releases.find(r => r.id === id));
  const [artist, setArtist] = useState(release ? artists.find(a => a.id === release.artistId) : null);
  const [playingTrackId, setPlayingTrackId] = useState<string | null>(null);
  
  useEffect(() => {
    if (release) {
      document.title = `${release.title} - ${release.artist} | Guyz At The Back`;
    } else {
      document.title = 'Release Not Found - Guyz At The Back';
    }
  }, [release]);
  
  if (!release || !artist) {
    return (
      <div className="min-h-screen pt-32 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Release Not Found</h1>
          <p className="mb-6">The release you're looking for doesn't exist or has been removed.</p>
          <Button variant="primary">
            <Link to="/releases">Back to Releases</Link>
          </Button>
        </div>
      </div>
    );
  }
  
  const togglePlay = (trackId: string) => {
    if (playingTrackId === trackId) {
      setPlayingTrackId(null);
    } else {
      setPlayingTrackId(trackId);
    }
  };
  
  const hasStreamingLinks = release.links.spotify || release.links.appleMusic || release.links.soundcloud || release.links.youtube;
  
  return (
    <div>
      {/* Release Hero */}
      <section className="pt-24 pb-12 relative">
        <div className="absolute inset-0 z-0">
          <img 
            src={release.coverArt} 
            alt={release.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#FFD700]/80 to-black/90"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-white mt-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-64 h-64 md:w-80 md:h-80 shadow-xl overflow-hidden"
            >
              <img 
                src={release.coverArt} 
                alt={release.title} 
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex-grow text-center md:text-left"
            >
              <div className="inline-block bg-[#00B8A9] text-white text-sm font-medium px-3 py-1 rounded uppercase mb-2">
                {release.type}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">{release.title}</h1>
              <Link 
                to={`/artists/${release.artistId}`}
                className="text-2xl text-gray-200 hover:text-[#00B8A9] transition-colors mb-4 inline-block"
              >
                {release.artist}
              </Link>
              
              <div className="flex flex-wrap gap-4 mt-4 mb-6 justify-center md:justify-start">
                <div className="flex items-center text-gray-300">
                  <Calendar size={18} className="mr-2 text-[#00B8A9]" />
                  <span>{format(new Date(release.releaseDate), 'MMMM d, yyyy')}</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Music size={18} className="mr-2 text-[#00B8A9]" />
                  <span>{release.tracks.length} tracks</span>
                </div>
              </div>
              
              {hasStreamingLinks && (
                <div className="flex flex-wrap gap-3 mt-8 justify-center md:justify-start">
                  {release.links.spotify && (
                    <Button 
                      variant="outline" 
                      className="bg-transparent border-white text-white hover:bg-white/20 hover:text-white"
                    >
                      <a 
                        href={release.links.spotify} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        <span>Spotify</span>
                        <ExternalLink size={16} className="ml-2" />
                      </a>
                    </Button>
                  )}
                  
                  {release.links.appleMusic && (
                    <Button 
                      variant="outline" 
                      className="bg-transparent border-white text-white hover:bg-white/20 hover:text-white"
                    >
                      <a 
                        href={release.links.appleMusic} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        <span>Apple Music</span>
                        <ExternalLink size={16} className="ml-2" />
                      </a>
                    </Button>
                  )}
                  
                  {release.links.soundcloud && (
                    <Button 
                      variant="outline" 
                      className="bg-transparent border-white text-white hover:bg-white/20 hover:text-white"
                    >
                      <a 
                        href={release.links.soundcloud} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        <span>SoundCloud</span>
                        <ExternalLink size={16} className="ml-2" />
                      </a>
                    </Button>
                  )}

                  {release.links.youtube && (
                    <Button 
                      variant="outline" 
                      className="bg-transparent border-white text-white hover:bg-white/20 hover:text-white"
                    >
                      <a 
                        href={release.links.youtube} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        <span>YouTube</span>
                        <ExternalLink size={16} className="ml-2" />
                      </a>
                    </Button>
                  )}
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Tracklist */}
      <Section>
        <h2 className="text-2xl font-bold mb-6 text-[#FFD700]">Tracklist</h2>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 text-gray-600 text-sm uppercase">
                <tr>
                  <th className="py-3 px-4 text-left w-12">#</th>
                  <th className="py-3 px-4 text-left">Title</th>
                  <th className="py-3 px-4 text-right">Duration</th>
                  <th className="py-3 px-4 text-right">Preview</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {release.tracks.map((track, index) => (
                  <motion.tr 
                    key={track.id}
                    className="hover:bg-gray-50"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <td className="py-3 px-4 text-gray-500">{index + 1}</td>
                    <td className="py-3 px-4 font-medium">{track.title}</td>
                    <td className="py-3 px-4 text-right text-gray-500">
                      <div className="flex items-center justify-end">
                        <Clock size={14} className="text-gray-400 mr-1" />
                        {track.duration}
                      </div>
                    </td>
                    <td className="py-3 px-4 text-right">
                      {track.previewUrl ? (
                        <button
                          onClick={() => togglePlay(track.id)}
                          className={`p-2 rounded-full ${
                            playingTrackId === track.id
                              ? 'bg-[#00B8A9] text-white'
                              : 'bg-gray-100 text-black hover:bg-gray-200'
                          }`}
                          aria-label={playingTrackId === track.id ? 'Pause' : 'Play preview'}
                        >
                          {playingTrackId === track.id ? (
                            <Pause size={16} />
                          ) : (
                            <Play size={16} className="ml-0.5" />
                          )}
                        </button>
                      ) : (
                        <span className="text-gray-400 text-sm">No preview</span>
                      )}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>
      
      {/* About the Artist */}
      <Section className="bg-gray-50">
        <h2 className="text-2xl font-bold mb-6 text-[#FFD700]">About the Artist</h2>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-48 h-48 rounded-full overflow-hidden flex-shrink-0 shadow-md">
            <img 
              src={artist.image} 
              alt={artist.name} 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <Link to={`/artists/${artist.id}`} className="text-2xl font-bold text-[#FFD700] hover:text-[#E6C200] transition-colors">
              {artist.name}
            </Link>
            <div className="flex flex-wrap gap-1 my-3">
              {artist.genres.map((genre, idx) => (
                <span 
                  key={idx}
                  className="inline-block bg-black/10 text-black rounded-full px-3 py-1 text-sm"
                >
                  {genre}
                </span>
              ))}
            </div>
            <p className="text-gray-600 mb-4">{artist.bio}</p>
            <Button variant="primary">
              <Link to={`/artists/${artist.id}`}>View Artist Profile</Link>
            </Button>
          </div>
        </div>
      </Section>
      
      {/* More from this Artist */}
      {releases.filter(r => r.artistId === artist.id && r.id !== release.id).length > 0 && (
        <Section>
          <h2 className="text-2xl font-bold mb-6 text-[#FFD700]">More from {artist.name}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {releases
              .filter(r => r.artistId === artist.id && r.id !== release.id)
              .slice(0, 4)
              .map((otherRelease, index) => (
                <motion.div
                  key={otherRelease.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link to={`/releases/${otherRelease.id}`} className="block group">
                    <div className="aspect-square overflow-hidden rounded-md shadow-md mb-2">
                      <img 
                        src={otherRelease.coverArt} 
                        alt={otherRelease.title} 
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="font-medium text-[#FFD700] group-hover:text-[#E6C200] transition-colors truncate">
                      {otherRelease.title}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {otherRelease.type} • {format(new Date(otherRelease.releaseDate), 'yyyy')}
                    </p>
                  </Link>
                </motion.div>
              ))}
          </div>
        </Section>
      )}
    </div>
  );
};

export default ReleaseDetailPage;