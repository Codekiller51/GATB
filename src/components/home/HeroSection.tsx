import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';
import Button from '../ui/Button';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/144429/pexels-photo-144429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          alt="Music concert" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700]/80 to-[#000000]/80"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Discover the Sound of Tomorrow
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-xl">
            A dynamic trio of producers crafting genre-blending sounds that challenge conventions and elevate music to new heights.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                variant="secondary" 
                size="lg" 
                icon={<ArrowRight size={20} />}
                iconPosition="right"
              >
                <Link to="/artists">Our Team</Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="bg-transparent border-white text-white hover:bg-white/20 hover:text-white" 
                icon={<Play size={20} />}
              >
                <Link to="/releases">Latest Releases</Link>
              </Button>
            </div>
          </motion.div>
          
          {/* Featured Release */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block"
          >
            <div className="bg-black/30 backdrop-blur-md p-6 rounded-lg">
              <div className="flex items-center space-x-4">
                <img 
                  src="/assets/audio/2025/1-NewDay/cover.jpg" 
                  alt="New Day - Latest Release" 
                  className="w-40 h-40 object-cover rounded-md shadow-lg"
                />
                <div>
                  <div className="text-[#FFD700] font-medium mb-1">New Release</div>
                  <h3 className="text-2xl font-bold text-white mb-2">New Day</h3>
                  <p className="text-gray-300 mb-4">Guyz At The Back</p>
                  <Button 
                    variant="primary" 
                    size="sm"
                    className="bg-[#FFD700] hover:bg-[#E6C200] text-black"
                  >
                    <Link to="/releases/release-1">Listen Now</Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scrolling indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 1,
          delay: 1,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center">
          <motion.div 
            className="w-1 h-3 bg-white rounded-full mt-2"
            animate={{ 
              y: [0, 20, 0],
            }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity,
              repeatType: "loop" 
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;