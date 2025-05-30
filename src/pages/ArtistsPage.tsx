import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import Section from '../components/ui/Section';
import Card, { CardMedia, CardContent, CardTitle } from '../components/ui/Card';
import { artists } from '../data/artists';

const ArtistsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredArtists, setFilteredArtists] = useState(artists.filter(artist => artist.featured));
  
  useEffect(() => {
    document.title = 'Artists - Guyz At The Back';
  }, []);
  
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredArtists(artists.filter(artist => artist.featured));
    } else {
      const query = searchQuery.toLowerCase();
      setFilteredArtists(
        artists.filter(artist => 
          artist.featured && (
            artist.name.toLowerCase().includes(query) ||
            artist.bio.toLowerCase().includes(query) ||
            artist.genres.some((genre) => genre.toLowerCase().includes(query))
          )
        )
      );
    }
  }, [searchQuery]);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };
  
  return (
    <div>
      {/* Hero Header */}
      <Section className="pt-32 pb-20 bg-gradient-to-r from-[#FFD700] to-[#B8860B] text-black">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Team</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Discover the talented musicians that make up the Guyz At The Back family.
          </p>
        </div>
      </Section>
      
      {/* Search Bar */}
      <Section className="py-8 bg-gray-100">
        <div className="max-w-xl mx-auto">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search artists by name, genre, or bio..."
              className="w-full py-3 pl-12 pr-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4A148C] focus:border-transparent shadow-sm"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>
      </Section>
      
      {/* Artists Grid */}
      <Section className="py-12">
        {filteredArtists.length > 0 ? (
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredArtists.map((artist) => (
              <motion.div key={artist.id} variants={itemVariants}>
                <Link to={`/artists/${artist.id}`}>
                  <Card hover>
                    <CardMedia 
                      src={artist.image} 
                      alt={artist.name} 
                      aspectRatio="portrait"
                    />
                    <CardContent>
                      <CardTitle className="text-[#4A148C]">{artist.name}</CardTitle>
                      <div className="flex flex-wrap gap-1 mb-3">
                        {artist.genres.map((genre, idx) => (
                          <span 
                            key={idx}
                            className="inline-block bg-gray-100 text-gray-700 rounded-full px-2 py-1 text-xs"
                          >
                            {genre}
                          </span>
                        ))}
                      </div>
                      <p className="text-gray-600 line-clamp-3">{artist.bio}</p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-600 mb-2">No artists found</h3>
            <p className="text-gray-500">
              No artists match your search criteria. Try a different search term.
            </p>
          </div>
        )}
      </Section>
    </div>
  );
};

export default ArtistsPage;