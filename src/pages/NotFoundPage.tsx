import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, Music } from 'lucide-react';
import Button from '../components/ui/Button';

const NotFoundPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Page Not Found - Guyz At The Back';
  }, []);
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 pt-16">
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-col items-center">
          <Music size={80} className="text-[#4A148C] mb-6" />
          <h1 className="text-6xl md:text-8xl font-bold text-[#4A148C] mb-6">404</h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-600 max-w-md mb-8">
            Looks like the track you're looking for has been removed from the playlist.
          </p>
          <Button 
            variant="primary" 
            size="lg" 
            icon={<Home size={20} />}
          >
            <Link to="/">Back to Homepage</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;