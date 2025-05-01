import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import Button from '../ui/Button';

const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple email validation
    if (!email || !email.includes('@')) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }
    
    // Simulate API call
    setStatus('loading');
    
    setTimeout(() => {
      setStatus('success');
      setMessage('Thank you for subscribing to our newsletter!');
      setEmail('');
      
      // Reset after 5 seconds
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 5000);
    }, 1500);
  };
  
  return (
    <section className="py-16 md:py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay in the Loop
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Subscribe to our newsletter for exclusive updates, early access to releases, and special offers.
          </p>
          
          <form 
            onSubmit={handleSubmit}
            className="max-w-lg mx-auto"
          >
            <div className="flex flex-col md:flex-row gap-2">
              <div className="flex-grow">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full h-12 px-4 rounded-md bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00B8A9]"
                  disabled={status === 'loading' || status === 'success'}
                />
              </div>
              <Button
                type="submit"
                variant="secondary"
                size="lg"
                className="h-12"
                disabled={status === 'loading' || status === 'success'}
                icon={status === 'loading' ? undefined : <Send size={18} />}
              >
                {status === 'loading' ? (
                  <div className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </div>
                ) : 'Subscribe'}
              </Button>
            </div>
            
            {/* Status message */}
            {message && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className={`mt-4 p-3 rounded-md ${
                  status === 'success' ? 'bg-[#FFD700]/20 text-[#FFD700]' : 'bg-red-500/20 text-red-200'
                }`}
              >
                <div className="flex items-center">
                  {status === 'success' ? (
                    <CheckCircle size={18} className="mr-2" />
                  ) : (
                    <AlertCircle size={18} className="mr-2" />
                  )}
                  {message}
                </div>
              </motion.div>
            )}
          </form>
          
          <p className="text-gray-400 text-sm mt-4">
            We respect your privacy and will never share your information.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSignup;