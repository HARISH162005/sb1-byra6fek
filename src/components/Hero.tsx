import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        {/* Canvas will be rendered here by Layout */}
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 text-center text-white px-4"
      >
        <h1 className="text-6xl font-bold mb-6">
          Creative Developer
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Crafting immersive digital experiences through code and creativity.
          Specialized in building modern web applications with cutting-edge technologies.
        </p>
        
        <div className="flex justify-center gap-6">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer"
             className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
             className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="mailto:contact@example.com"
             className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;