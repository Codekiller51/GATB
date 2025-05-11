import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Layouts
import MainLayout from './layouts/MainLayout';

// Lazy loaded pages
const HomePage = lazy(() => import('./pages/HomePage'));
const ArtistsPage = lazy(() => import('./pages/ArtistsPage'));
const ArtistDetailPage = lazy(() => import('./pages/ArtistDetailPage'));
const ReleasesPage = lazy(() => import('./pages/ReleasesPage'));
const ReleaseDetailPage = lazy(() => import('./pages/ReleaseDetailPage'));
const EventsPage = lazy(() => import('./pages/EventsPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const NewsPage = lazy(() => import('./pages/NewsPage'));
const NewsDetailPage = lazy(() => import('./pages/NewsDetailPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-[400px] flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#4A148C]"></div>
  </div>
);

function App() {
  return (
    <Router>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Suspense fallback={<LoadingSpinner />}><HomePage /></Suspense>} />
            <Route path="artists" element={<Suspense fallback={<LoadingSpinner />}><ArtistsPage /></Suspense>} />
            <Route path="artists/:id" element={<Suspense fallback={<LoadingSpinner />}><ArtistDetailPage /></Suspense>} />
            <Route path="releases" element={<Suspense fallback={<LoadingSpinner />}><ReleasesPage /></Suspense>} />
            <Route path="releases/:id" element={<Suspense fallback={<LoadingSpinner />}><ReleaseDetailPage /></Suspense>} />
            <Route path="events" element={<Suspense fallback={<LoadingSpinner />}><EventsPage /></Suspense>} />
            <Route path="about" element={<Suspense fallback={<LoadingSpinner />}><AboutPage /></Suspense>} />
            <Route path="news" element={<Suspense fallback={<LoadingSpinner />}><NewsPage /></Suspense>} />
            <Route path="news/:id" element={<Suspense fallback={<LoadingSpinner />}><NewsDetailPage /></Suspense>} />
            <Route path="*" element={<Suspense fallback={<LoadingSpinner />}><NotFoundPage /></Suspense>} />
          </Route>
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;