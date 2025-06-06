import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, ArrowLeft } from 'lucide-react';
import { format } from 'date-fns';
import { news } from '../data/news';
import Button from '../components/ui/Button';
import Section from '../components/ui/Section';

const NewsDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState(news.find(item => item.id === id));
  
  useEffect(() => {
    if (article) {
      document.title = `${article.title} - Guyz At The Back`;
    } else {
      document.title = 'Article Not Found - Guyz At The Back';
    }
  }, [article]);
  
  if (!article) {
    return (
      <div className="min-h-screen pt-32 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
          <p className="mb-6">The article you're looking for doesn't exist or has been removed.</p>
          <Button variant="primary">
            <Link to="/news">Back to News</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Article Hero */}
      <div className="relative h-[500px] mb-12">
        <div className="absolute inset-0">
          <img 
            src={article.image} 
            alt={article.title} 
            className="w-full h-full object-cover brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/40"></div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-12">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center space-x-4 text-white mb-6">
                <span className="inline-block px-4 py-1.5 bg-[#FFD700] text-black rounded-full text-sm font-semibold uppercase tracking-wide shadow-md">
                  {article.category}
                </span>
                <div className="flex items-center bg-black/30 px-3 py-1.5 rounded-full backdrop-blur-sm">
                  <Calendar size={16} className="mr-2 text-[#FFD700]" />
                  {format(new Date(article.date), 'MMMM d, yyyy')}
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                {article.title}
              </h1>
              <p className="text-xl text-gray-100 max-w-3xl leading-relaxed">
                {article.excerpt}
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-200">
            <Button 
              variant="outline" 
              icon={<ArrowLeft size={20} />}
            >
              <Link to="/news">Back to News</Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* Related Articles */}
      <Section className="bg-gray-50">
        <h2 className="text-2xl font-bold mb-8">More News</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news
            .filter(item => item.id !== id)
            .slice(0, 3)
            .map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={`/news/${item.id}`} className="block group">
                  <div className="bg-white rounded-lg overflow-hidden shadow-md">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-sm text-gray-500">
                          {format(new Date(item.date), 'MMMM d, yyyy')}
                        </span>
                        <span className="inline-block px-2 py-0.5 bg-[#FFF8DC] text-black text-xs rounded-full">
                          {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-black group-hover:text-[#FFD700] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 mt-2 line-clamp-2">{item.excerpt}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
        </div>
      </Section>
    </div>
  );
};

export default NewsDetailPage;