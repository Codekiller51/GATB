import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, Youtube, Music, Mail, PhoneCall, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Music size={24} className="text-[#FFD700]" />
              <span className="text-xl font-bold">Guyz At The Back</span>
            </Link>
            <p className="text-gray-300 mb-4">
              An independent music label dedicated to supporting innovative artists and pushing musical boundaries.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/gatb_records/" className="text-gray-300 hover:text-[#FFD700] transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://x.com/guyzattheback" className="text-gray-300 hover:text-[#FFD700] transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61567436494722" className="text-gray-300 hover:text-[#FFD700] transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://www.youtube.com/@gatb_records" className="text-gray-300 hover:text-[#FFD700] transition-colors" aria-label="YouTube">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/artists" className="text-gray-300 hover:text-[#FFD700] transition-colors">Our Artists</Link>
              </li>
              <li>
                <Link to="/releases" className="text-gray-300 hover:text-[#FFD700] transition-colors">Releases</Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-300 hover:text-[#FFD700] transition-colors">Events</Link>
              </li>
              <li>
                <Link to="/news" className="text-gray-300 hover:text-[#FFD700] transition-colors">News</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-[#FFD700] transition-colors">About Us</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin size={20} className="text-[#FFD700] mt-1 flex-shrink-0" />
                <span className="text-gray-300">Arusha, Tanzania</span>
              </li>
              <li className="flex items-center space-x-2">
                <PhoneCall size={20} className="text-[#FFD700] flex-shrink-0" />
                <a href="tel:+255757136153" className="text-gray-300 hover:text-[#FFD700] transition-colors">+255 757 136 153</a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={20} className="text-[#FFD700] flex-shrink-0" />
                <a href="mailto:info@gatb.co.tz" className="text-gray-300 hover:text-[#FFD700] transition-colors">info@gatb.co.tz</a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter Signup */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-4">Subscribe to our newsletter for exclusive updates and offers.</p>
            <form className="space-y-2">
              <div>
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full px-4 py-2 rounded bg-gray-900 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFD700]" 
                  required 
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-[#FFD700] hover:bg-[#E6C200] text-black font-medium py-2 px-4 rounded transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} Guyz At The Back Music Label. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;