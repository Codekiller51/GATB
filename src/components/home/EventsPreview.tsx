import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, Ticket } from 'lucide-react';
import { format } from 'date-fns';
import Section from '../ui/Section';
import Button from '../ui/Button';
import { events } from '../../data/events';
import { artists } from '../../data/artists';

const EventsPreview: React.FC = () => {
  // Get upcoming events (sorted by date)
  const upcomingEvents = [...events]
    .filter(event => new Date(event.date) >= new Date())
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, 3);
  
  // Function to get artist names for an event
  const getArtistNames = (artistIds: string[]) => {
    return artistIds.map(id => {
      const artist = artists.find(a => a.id === id);
      return artist ? artist.name : '';
    }).filter(Boolean).join(', ');
  };
  
  return (
    <Section
      title="Upcoming Events"
      subtitle="Catch our artists performing live around the world"
    >
      <div className="space-y-6">
        {upcomingEvents.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Link to={`/events#${event.id}`} className="block">
              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-4 md:p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Date Box */}
                  <div className="flex-shrink-0 w-full md:w-auto">
                    <div className="bg-[#4A148C] text-white rounded-lg w-full md:w-24 h-24 flex flex-col items-center justify-center">
                      <span className="text-2xl font-bold">
                        {format(new Date(event.date), 'd')}
                      </span>
                      <span className="text-sm uppercase">
                        {format(new Date(event.date), 'MMM')}
                      </span>
                      <span className="text-sm">
                        {format(new Date(event.date), 'yyyy')}
                      </span>
                    </div>
                  </div>
                  
                  {/* Event Details */}
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-[#4A148C] mb-2">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {getArtistNames(event.artistIds)}
                    </p>
                    <div className="flex flex-wrap gap-y-2 gap-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-1 text-[#00B8A9]" />
                        <span>{event.venue}, {event.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock size={16} className="mr-1 text-[#00B8A9]" />
                        <span>{event.time}</span>
                      </div>
                      {event.ticketLink && (
                        <div className="flex items-center">
                          <Ticket size={16} className="mr-1 text-[#00B8A9]" />
                          <a 
                            href={event.ticketLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-[#4A148C] hover:underline"
                            onClick={(e) => e.stopPropagation()}
                          >
                            Get Tickets
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-10 text-center">
        <Button 
          variant="primary" 
          size="lg" 
          icon={<Calendar size={20} />}
        >
          <Link to="/events">View All Events</Link>
        </Button>
      </div>
    </Section>
  );
};

export default EventsPreview;