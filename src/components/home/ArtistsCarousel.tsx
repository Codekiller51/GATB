import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Card, { CardMedia, CardContent, CardTitle } from '../ui/Card';
import Section from '../ui/Section';
import { artists } from '../../data/artists';

const ArtistsCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const featuredArtists = artists.filter(artist => artist.featured);
  
  const nextSlide = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === featuredArtists.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevSlide = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? featuredArtists.length - 1 : prevIndex - 1
    );
  };
  
  // Auto advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  // Scroll carousel when activeIndex changes
  useEffect(() => {
    if (carouselRef.current) {
      const scrollAmount = activeIndex * (carouselRef.current.clientWidth / 3);
      carouselRef.current.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  }, [activeIndex]);
  
  return (
    <Section
      title="Featured Artists"
      subtitle="Discover the incredible talent behind our label"
      className="bg-gray-50"
    >
      <div className="relative">
        {/* Navigation buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-md -ml-4 md:ml-0"
          aria-label="Previous artist"
        >
          <ChevronLeft size={24} className="text-[#4A148C]" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-md -mr-4 md:mr-0"
          aria-label="Next artist"
        >
          <ChevronRight size={24} className="text-[#4A148C]" />
        </button>
        
        {/* Carousel container */}
        <div 
          ref={carouselRef}
          className="overflow-x-auto scrollbar-hide pb-8"
        >
          <div className="flex space-x-6 min-w-max px-4">
            {featuredArtists.map((artist, index) => (
              <motion.div
                key={artist.id}
                className="w-64 md:w-72 flex-shrink-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
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
                      <p className="text-gray-600 line-clamp-2">{artist.bio}</p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Pagination dots */}
        <div className="flex justify-center space-x-2 mt-4">
          {featuredArtists.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                activeIndex === index ? 'bg-[#4A148C] w-6' : 'bg-gray-300'
              }`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default ArtistsCarousel;