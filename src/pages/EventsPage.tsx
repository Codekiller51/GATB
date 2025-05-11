import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/ui/Section';
import { Calendar } from 'lucide-react';

const EventsPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-12"
    >
      <Section title="Upcoming Events" icon={<Calendar className="w-6 h-6 mr-2" />}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <div className="text-[#FFD700] dark:text-[#FFD700] font-bold mb-2">MAY 15, 2023</div>
              <h3 className="text-xl font-bold mb-2">Summer Launch Party</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Join us for our summer catalog launch with live performances from our team.</p>
              <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                <span>The Echo Lounge, Los Angeles</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <div className="text-[#FFD700] dark:text-[#FFD700] font-bold mb-2">JUNE 22, 2023</div>
              <h3 className="text-xl font-bold mb-2">Festival Appearance</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Our team will be performing at the annual Sound Waves Festival.</p>
              <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                <span>Oceanside Park, Miami</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <div className="text-[#FFD700] dark:text-[#FFD700] font-bold mb-2">JULY 8, 2023</div>
              <h3 className="text-xl font-bold mb-2">Album Release Concert</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Special concert celebrating the release of our newest album.</p>
              <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                <span>The Metropolitan, New York</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-10">
          <p className="text-center text-gray-600 dark:text-gray-400">
            More events coming soon. Stay tuned for updates!
          </p>
        </div>
      </Section>
    </motion.div>
  );
};

export default EventsPage;