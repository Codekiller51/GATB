import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/ui/Section';
import { Users, Award, Clock, Music } from 'lucide-react';

const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-12"
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">About Us</h1>
      
      <Section title="Our Story">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg mb-4">
              Founded in 2015, our record label has been dedicated to discovering and nurturing innovative musical talent across genres. We believe in the power of music to connect, inspire, and transform lives.
            </p>
            <p className="text-lg mb-4">
              Our journey began with a small team of passionate music enthusiasts who wanted to create a platform where artists could freely express their creativity while reaching global audiences.
            </p>
            <p className="text-lg">
              Today, we're proud to represent some of the most exciting emerging and established artists in the industry, consistently pushing boundaries and setting new standards for musical excellence.
            </p>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <Clock className="w-12 h-12 mx-auto mb-2 text-[#FFD700]" />
                <h3 className="text-2xl font-bold mb-1">8+</h3>
                <p className="text-gray-600">Years in Business</p>
              </div>
              <div className="text-center">
                <Users className="w-12 h-12 mx-auto mb-2 text-[#FFD700]" />
                <h3 className="text-2xl font-bold mb-1">50+</h3>
                <p className="text-gray-600">Artists Signed</p>
              </div>
              <div className="text-center">
                <Music className="w-12 h-12 mx-auto mb-2 text-[#FFD700]" />
                <h3 className="text-2xl font-bold mb-1">200+</h3>
                <p className="text-gray-600">Albums Released</p>
              </div>
              <div className="text-center">
                <Award className="w-12 h-12 mx-auto mb-2 text-[#FFD700]" />
                <h3 className="text-2xl font-bold mb-1">15+</h3>
                <p className="text-gray-600">Industry Awards</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      <Section title="Our Mission">
        <div className="bg-gradient-to-r from-[#FFD700] to-[#B8860B] text-black p-8 rounded-lg my-8">
          <h2 className="text-3xl font-bold mb-4 text-center">Our Mission</h2>
          <p className="text-xl text-center max-w-3xl mx-auto">
            To discover and amplify unique musical voices, foster artistic innovation, and create meaningful connections between artists and audiences worldwide.
          </p>
        </div>
      </Section>
      
      <Section title="Our Values">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3 text-[#FFD700]">Artistic Integrity</h3>
            <p>We respect the creative vision of our artists and provide them with the freedom to express their authentic selves through their music.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3 text-[#FFD700]">Innovation</h3>
            <p>We embrace new ideas, technologies, and approaches to music production, distribution, and promotion.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3 text-[#FFD700]">Collaboration</h3>
            <p>We believe that the best results come from working together, sharing knowledge, and supporting each other's growth.</p>
          </div>
        </div>
      </Section>
      
      <Section title="Our Team">
        <p className="text-lg mb-8 text-center max-w-3xl mx-auto">
          Our diverse team brings together expertise from across the music industry, 
          from A&R and production to marketing and event management.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Team members could be dynamically loaded from data/team.ts */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4"></div>
            <h3 className="text-xl font-bold">Sarah Johnson</h3>
            <p className="text-[#FFD700] mb-2">CEO & Founder</p>
            <p className="text-gray-600">Former musician with 15+ years of industry experience.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4"></div>
            <h3 className="text-xl font-bold">Michael Chen</h3>
            <p className="text-[#FFD700] mb-2">Head of A&R</p>
            <p className="text-gray-600">Talented scout with an ear for tomorrow's hits.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4"></div>
            <h3 className="text-xl font-bold">Lucia Rodriguez</h3>
            <p className="text-[#FFD700] mb-2">Marketing Director</p>
            <p className="text-gray-600">Digital marketing expert specializing in music promotion.</p>
          </div>
        </div>
      </Section>
      
      <Section title="Join Our Journey">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-lg mb-6">
            Whether you're an artist looking for representation, a music enthusiast interested in upcoming releases, 
            or a potential business partner, we'd love to connect with you.
          </p>
          <button className="bg-[#FFD700] hover:bg-[#B8860B] text-black font-bold py-3 px-6 rounded-lg transition-colors">
            Contact Us
          </button>
        </div>
      </Section>
    </motion.div>
  );
};

export default AboutPage;