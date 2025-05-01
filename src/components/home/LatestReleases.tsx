import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExternalLink, Play } from 'lucide-react';
import Section from '../ui/Section';
import Card, { CardMedia, CardContent, CardTitle, CardFooter } from '../ui/Card';
import Button from '../ui/Button';
import { releases } from '../../data/releases';
import { format } from 'date-fns';

const LatestReleases: React.FC = () => {
  const featuredReleases = releases.filter(release => release.featured);
  
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
      transition: { duration: 0.6 }
    }
  };
  
  return (
    <Section
      title="Latest Releases"
      subtitle="Fresh music from our roster of talented artists"
    >
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {featuredReleases.map((release) => (
          <motion.div key={release.id} variants={itemVariants}>
            <Card className="h-full flex flex-col">
              <Link to={`/releases/${release.id}`}>
                <CardMedia 
                  src={release.coverArt} 
                  alt={release.title} 
                  aspectRatio="square"
                />
              </Link>
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
                <div className="flex justify-between items-center">
                  <Button 
                    variant="secondary" 
                    size="sm"
                    icon={<Play size={16} />}
                  >
                    <Link to={`/releases/${release.id}`}>Listen</Link>
                  </Button>
                  
                  <div className="flex space-x-2">
                    {release.links.spotify && (
                      <a 
                        href={release.links.spotify} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-[#4A148C]"
                        aria-label="Listen on Spotify"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>
      
      <div className="mt-12 text-center">
        <Button 
          variant="outline" 
          size="lg"
        >
          <Link to="/releases">View All Releases</Link>
        </Button>
      </div>
    </Section>
  );
};

export default LatestReleases;