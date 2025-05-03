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
              Formed in 2015, Guyz At The Back is a dynamic trio of producers crafting genre-blending sounds that challenge conventions and elevate music to new heights. United by a shared vision and complementary styles, we’ve dedicated our journey to pushing the creative boundaries of sound and storytelling through production.
            </p>
            <p className="text-lg mb-4">
              From humble beginnings as behind-the-scenes beatmakers in Arusha, Tanzania, we've grown into a powerhouse collective known for our innovation, authenticity, and artistic depth.
            </p>
            <p className="text-lg">
              Whether we’re in the studio, on stage, or collaborating with other artists, our mission remains the same: to make music that moves people—physically, emotionally, and spiritually.
            </p>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <Clock className="w-12 h-12 mx-auto mb-2 text-[#FFD700]" />
                <h3 className="text-2xl font-bold mb-1">2025</h3>
                <p className="text-gray-600">Started At</p>
              </div>
              <div className="text-center">
                <Users className="w-12 h-12 mx-auto mb-2 text-[#FFD700]" />
                <h3 className="text-2xl font-bold mb-1">3</h3>
                <p className="text-gray-600">Team Of</p>
              </div>
              <div className="text-center">
                <Music className="w-12 h-12 mx-auto mb-2 text-[#FFD700]" />
                <h3 className="text-2xl font-bold mb-1">1</h3>
                <p className="text-gray-600">Official Releases</p>
              </div>
              <div className="text-center">
                <Award className="w-12 h-12 mx-auto mb-2 text-[#FFD700]" />
                <h3 className="text-2xl font-bold mb-1">2</h3>
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
            To shape the future of sound by creating bold, boundary-breaking music that resonates across cultures and communities.
          </p>
        </div>
      </Section>
      
      <Section title="Our Values">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3 text-[#FFD700]">Artistic Integrity</h3>
            <p>We stay true to our creative instincts, allowing our music to evolve organically without compromise.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3 text-[#FFD700]">Innovation</h3>
            <p>Constantly experimenting with new sounds, styles, and technologies, we’re always evolving.</p>
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
          {/* Artist collective members */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4"></div>
            <h3 className="text-xl font-bold">David Miswa</h3>
            <p className="text-[#FFD700] mb-2">David Rollit</p>
            <p className="text-gray-600">Sound engineer & sonic perfectionist. Specializes in mixing and mastering.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4"></div>
            <h3 className="text-xl font-bold">Anderson Michael</h3>
            <p className="text-[#FFD700] mb-2">Code_Killer</p>
            <p className="text-gray-600">Producer & beat architect. Fuses technology with rhythm for signature soundscapes.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4"></div>
            <h3 className="text-xl font-bold">Champion Sadick</h3>
            <p className="text-[#FFD700] mb-2">Champion247</p>
            <p className="text-gray-600">Creative producer & culture strategist. Drives Afro-fusion and digital presence.</p>
          </div>
        </div>

      </Section>
      
      <Section title="Join Our Journey">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-lg mb-6">
          Whether you're an artist looking to collaborate, a fan of our beats, or a creative partner with a vision, let’s connect and create something unforgettable
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