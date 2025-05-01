import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Music } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../assets/logos/logo.png';

interface HeaderProps {
  isTransparent: boolean;
}

const Header: React.FC<HeaderProps> = ({ isTransparent }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Artists', path: '/artists' },
    { label: 'Releases', path: '/releases' },
    { label: 'Events', path: '/events' },
    { label: 'News', path: '/news' },
    { label: 'About', path: '/about' },
  ];
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isTransparent ? 'bg-transparent' : 'bg-[#ad9513] shadow-lg'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            {/* <Music size={30} className="text-[#FFD700]" /> */}
            <img src={logo} alt="Guyz At The Back" className="h-8 w-auto" />
            <span className="text-xl md:text-2xl font-bold text-white">Guyz At The Back</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <li key={item.path}>
                  <NavLink 
                    to={item.path}
                    className={({ isActive }) => `
                      text-white text-lg font-medium hover:text-[#FFD700] transition-colors
                      ${isActive ? 'text-[#FFD700]' : ''}
                    `}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white hover:text-[#FFD700] transition-colors"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="fixed inset-0 bg-[#FFD700] z-40 md:hidden pt-20"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <nav className="container mx-auto px-4">
              <ul className="flex flex-col space-y-6 py-8">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <NavLink 
                      to={item.path}
                      className={({ isActive }) => `
                        text-white text-xl font-medium hover:text-[#FFD700] transition-colors
                        ${isActive ? 'text-[#FFD700]' : ''}
                      `}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;