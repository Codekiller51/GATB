import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { ArrowRight } from 'lucide-react';
import Section from '../ui/Section';
import Card, { CardMedia, CardContent, CardTitle } from '../ui/Card';
import Button from '../ui/Button';
import { news } from '../../data/news';

const NewsSection: React.FC = () => {
  // Get the 3 most recent news items
  const recentNews = [...news].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  ).slice(0, 3);
  
  return (
    <Section
      title="Latest News"
      subtitle="Stay updated with the latest happenings at our label"
      className="bg-gray-50"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {recentNews.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Link to={`/news/${item.id}`}>
              <Card hover className="h-full flex flex-col">
                <CardMedia 
                  src={item.image} 
                  alt={item.title} 
                  aspectRatio="video"
                />
                <CardContent className="flex-grow">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-sm text-gray-500">
                      {format(new Date(item.date), 'MMMM d, yyyy')}
                    </span>
                    <span className="inline-block px-2 py-0.5 bg-[#EEE6F5] text-[#4A148C] text-xs rounded-full">
                      {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                    </span>
                  </div>
                  <CardTitle className="text-[#4A148C] hover:text-[#3A1669] transition-colors">
                    {item.title}
                  </CardTitle>
                  <p className="text-gray-600 line-clamp-3">{item.excerpt}</p>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <Button 
          variant="primary" 
          size="lg" 
          icon={<ArrowRight size={20} />}
          iconPosition="right"
        >
          <Link to="/news">View All News</Link>
        </Button>
      </div>
    </Section>
  );
};

export default NewsSection;