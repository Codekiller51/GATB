import React, { useEffect } from 'react';
import HeroSection from '../components/home/HeroSection';
import ArtistsCarousel from '../components/home/ArtistsCarousel';
import LatestReleases from '../components/home/LatestReleases';
import NewsSection from '../components/home/NewsSection';
import EventsPreview from '../components/home/EventsPreview';
import NewsletterSignup from '../components/home/NewsletterSignup';

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'Guyz At The Back - GATB_Records';
  }, []);
  
  return (
    <div>
      <HeroSection />
      <ArtistsCarousel />
      <LatestReleases />
      <EventsPreview />
      <NewsSection />
      <NewsletterSignup />
    </div>
  );
};

export default HomePage;