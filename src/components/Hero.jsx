import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container hero-container">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="hero-greeting">Hello, I'm</h2>
            <h1 className="hero-title">Kalkidan Asdesach</h1>
            <h3 className="hero-roles">
              HOST • DIGITAL MARKETER • CONTENT CREATOR • SOFTWARE ENGINEER
            </h3>
            
            <motion.p 
              className="hero-quote"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
            >
              “Creating engaging digital experiences through storytelling, strategy, and high-impact visual content.”
            </motion.p>

            <motion.div 
              className="hero-cta"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <a href="#portfolio" className="btn btn-primary">View My Work</a>
              <a href="#contact" className="btn btn-outline">Contact Me</a>
            </motion.div>
          </motion.div>
        </div>

        <motion.div 
          className="hero-image-wrapper"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img src="/assets/profile.jpg" alt="Kalkidan Asdesach" className="hero-image" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
