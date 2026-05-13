import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import './Portfolio.css';

const Portfolio = () => {
  const videos = [
    { id: 1, src: '/assets/a.MOV' },
    { id: 2, src: '/assets/b.MOV' },
    { id: 3, src: '/assets/c.MOV' },
  ];

  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">🎥 PORTFOLIO</h2>
          <p className="portfolio-subtitle">[ DISCOVER MY VISUAL & DIGITAL WORK ]</p>
        </motion.div>

        <div className="portfolio-grid">
          {videos.map((video, index) => (
            <motion.div 
              key={video.id}
              className="video-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.03 }}
            >
              <video 
                src={video.src}
                className="portfolio-video"
                autoPlay
                loop
                muted
                playsInline
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
