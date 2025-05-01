import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import MusicPlayer from '../components/player/MusicPlayer';
import { motion } from 'framer-motion';

const MainLayout: React.FC = () => {
  const location = useLocation();
  const [isHeaderTransparent, setIsHeaderTransparent] = useState(true);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsHeaderTransparent(scrollPosition < 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Reset scroll position when route changes
    window.scrollTo(0, 0);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]);
  
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3
      }
    }
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header isTransparent={isHeaderTransparent} />
      <main className="flex-grow">
        <motion.div
          key={location.pathname}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageVariants}
        >
          <Outlet />
        </motion.div>
      </main>
      <MusicPlayer />
      <Footer />
    </div>
  );
};

export default MainLayout;