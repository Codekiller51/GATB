import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/ui/Section';
import { news } from '../data/news';
import { Link } from 'react-router-dom';
import { Calendar, Clock } from 'lucide-react';

const NewsPage = () => {
  return (
    <div>
      {/* Hero Header */}
      <Section className="pt-32 pb-20 bg-gradient-to-r from-[#FFD700] to-[#B8860B] text-black">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Latest News</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Stay updated with the latest stories and announcements from our label.
          </p>
        </div>
      </Section>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-12"
      >
        <Section title="Latest News" subtitle="Stay updated with the latest from our label">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item) => (
            <div key={item.id} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-[1.02]">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                  <Calendar size={16} className="mr-2" />
                  <span>{new Date(item.date).toLocaleDateString()}</span>
                  <Clock size={16} className="ml-4 mr-2" />
                  <span>{item.readTime} min read</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{item.excerpt}</p>
                <Link 
                  to={`/news/${item.id}`}
                  className="inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>
      </motion.div>
    </div>
  );
};

export default NewsPage;