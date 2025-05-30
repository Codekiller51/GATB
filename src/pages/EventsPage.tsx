import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/ui/Section';
import { Calendar } from 'lucide-react';

import { events } from '../data/events';
import { format } from 'date-fns';

const EventsPage = () => {
  return (
    <div>
      {/* Hero Header */}
      <Section className="pt-32 pb-20 bg-gradient-to-r from-[#FFD700] to-[#B8860B] text-black">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Upcoming Events</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Join us at our exclusive performances and industry gatherings.
          </p>
        </div>
      </Section>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="container mx-auto px-4 py-12"
      >
        <Section title="Upcoming Events" icon={<Calendar className="w-6 h-6 mr-2" />}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {events.map((event) => (
              <div key={event.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="text-[#FFD700] dark:text-[#FFD700] font-bold mb-2">
                    {format(new Date(event.date), 'MMM dd, yyyy').toUpperCase()} - {event.time}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{event.description}</p>
                  <div className="flex flex-col gap-2">
                    <div className="text-gray-500 dark:text-gray-400 text-sm">
                      {event.venue}, {event.location}
                    </div>
                    {event.ticketLink && (
                      <a
                        href={event.ticketLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-[#FFD700] text-black px-4 py-2 rounded-md text-sm font-semibold hover:bg-[#B8860B] transition-colors"
                      >
                        Get Tickets
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {events.length === 0 && (
            <div className="mt-10">
              <p className="text-center text-gray-600 dark:text-gray-400">
                No upcoming events at the moment. Stay tuned for updates!
              </p>
            </div>
          )}
        </Section>
      </motion.div>
    </div>
  );
};

export default EventsPage;