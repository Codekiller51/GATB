import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Filter, Play } from 'lucide-react';
import { format } from 'date-fns';
import Section from '../components/ui/Section';
import Card, { CardMedia, CardContent, CardTitle, CardFooter } from '../components/ui/Card';
import Button from '../components/ui/Button';
import { releases } from '../data/releases';
import { usePlayer } from '../contexts/PlayerContext';

type ReleaseType = 'album' | 'single' | 'ep';

const ReleasesPage: React.FC = () => {
  const { dispatch } = usePlayer();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<ReleaseType | 'all'>('all');
  const [filteredReleases, setFilteredReleases] = useState(releases);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handlePlayTrack = (release: any, track: any) => {
    if (track.previewUrl) {
      dispatch({
        type: 'SET_TRACK',
        payload: {
          id: track.id,
          title: track.title,
          artist: release.artist,
          coverArt: release.coverArt,
          audioUrl: track.previewUrl
        }
      });
    }
  };
  
  useEffect(() => {
    document.title = 'Releases - Guyz At The Back';
  }, []);
  
  useEffect(() => {
    let filtered = [...releases];
    
    // Filter by type
    if (selectedType !== 'all') {
      filtered = filtered.filter(release => release.type === selectedType);
    }
    
    // Filter by search query
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (release) =>
          release.title.toLowerCase().includes(query) ||
          release.artist.toLowerCase().includes(query)
      );
    }
    
    // Sort by release date (newest first)
    filtered = filtered.sort((a, b) => 
      new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime()
    );
    
    setFilteredReleases(filtered);
  }, [searchQuery, selectedType]);
  
  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };
  
  return (
    <div>
      {/* Hero Header */}
      <Section className="pt-32 pb-20 bg-gradient-to-r from-[#FFD700] to-[#B8860B] text-black">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Releases</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Discover the latest music from our talented roster of artists.
          </p>
        </div>
      </Section>
      
      {/* Search and Filter Section */}
      <Section className="py-8 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Bar */}
            <div className="relative flex-grow">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search releases by title or artist..."
                className="w-full py-3 pl-12 pr-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4A148C] focus:border-transparent shadow-sm"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
            
            {/* Filter Button (Mobile) */}
            <div className="md:hidden">
              <Button 
                variant="outline" 
                onClick={toggleFilter}
                icon={<Filter size={18} />}
                className="w-full"
              >
                Filter
              </Button>
            </div>
            
            {/* Filter Options (Desktop) */}
            <div className="hidden md:flex space-x-2">
              <Button 
                variant={selectedType === 'all' ? 'primary' : 'outline'}
                onClick={() => setSelectedType('all')}
                size="sm"
              >
                All
              </Button>
              <Button 
                variant={selectedType === 'album' ? 'primary' : 'outline'}
                onClick={() => setSelectedType('album')}
                size="sm"
              >
                Albums
              </Button>
              <Button 
                variant={selectedType === 'ep' ? 'primary' : 'outline'}
                onClick={() => setSelectedType('ep')}
                size="sm"
              >
                EPs
              </Button>
              <Button 
                variant={selectedType === 'single' ? 'primary' : 'outline'}
                onClick={() => setSelectedType('single')}
                size="sm"
              >
                Singles
              </Button>
            </div>
          </div>
          
          {/* Mobile Filter Options */}
          {isFilterOpen && (
            <motion.div 
              className="mt-4 p-4 bg-white rounded-lg shadow-md md:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              <div className="grid grid-cols-2 gap-2">
                <Button 
                  variant={selectedType === 'all' ? 'primary' : 'outline'}
                  onClick={() => setSelectedType('all')}
                  size="sm"
                  fullWidth
                >
                  All
                </Button>
                <Button 
                  variant={selectedType === 'album' ? 'primary' : 'outline'}
                  onClick={() => setSelectedType('album')}
                  size="sm"
                  fullWidth
                >
                  Albums
                </Button>
                <Button 
                  variant={selectedType === 'ep' ? 'primary' : 'outline'}
                  onClick={() => setSelectedType('ep')}
                  size="sm"
                  fullWidth
                >
                  EPs
                </Button>
                <Button 
                  variant={selectedType === 'single' ? 'primary' : 'outline'}
                  onClick={() => setSelectedType('single')}
                  size="sm"
                  fullWidth
                >
                  Singles
                </Button>
              </div>
            </motion.div>
          )}
        </div>
      </Section>
      
      {/* Releases Grid */}
      <Section className="py-12">
        {filteredReleases.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredReleases.map((release, index) => (
              <motion.div 
                key={release.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Link to={`/releases/${release.id}`}>
                  <Card hover className="h-full flex flex-col">
                    <CardMedia 
                      src={release.coverArt} 
                      alt={release.title} 
                      aspectRatio="square"
                    />
                    <CardContent className="flex-grow">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <CardTitle className="text-[#4A148C]">{release.title}</CardTitle>
                          <Link to={`/artists/${release.artistId}`} className="text-gray-600 hover:text-[#00B8A9]">
                            {release.artist}
                          </Link>
                        </div>
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
                    <CardFooter className="bg-gray-50">
                      <div className="w-full flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          {release.tracks.map((track, trackIndex) => (
                            track.previewUrl && (
                              <Button
                                key={track.id}
                                variant="text"
                                size="sm"
                                icon={<Play size={16} />}
                                onClick={(e) => {
                                  e.preventDefault();
                                  handlePlayTrack(release, track);
                                }}
                              >
                                Play {trackIndex + 1}
                              </Button>
                            )
                          ))}
                          <Button 
                            variant="text" 
                            size="sm"
                          >
                            View Details
                          </Button>
                        </div>
                      </div>
                    </CardFooter>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-600 mb-2">No releases found</h3>
            <p className="text-gray-500 mb-6">
              No releases match your search criteria. Try a different search term or filter.
            </p>
            <Button 
              variant="primary" 
              onClick={() => {
                setSearchQuery('');
                setSelectedType('all');
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </Section>
    </div>
  );
};

export default ReleasesPage;