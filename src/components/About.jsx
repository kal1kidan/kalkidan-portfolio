import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container about-container">
        <motion.div 
          className="about-image-wrapper"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <img src="/assets/about.jpg" alt="About Kalkidan" className="about-image" />
        </motion.div>
        
        <motion.div 
          className="about-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="section-title" style={{ textAlign: 'left' }}>About Me</h2>
          <p className="about-text">
            “Charismatic and camera-confident media host and content creator specializing in high-engagement digital content and social media branding. Skilled in hosting live presentations, creating short-form visual content, and connecting brands with audiences through creative storytelling and audience engagement.”
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
