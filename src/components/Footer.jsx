import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h2 className="footer-name">Kalkidan Asdesach</h2>
            <p className="footer-statement">Crafting high-impact digital experiences through creative storytelling.</p>
          </div>
          
          <div className="footer-links">
            <a href="#" className="footer-social-link">Instagram</a>
            <a href="#" className="footer-social-link">TikTok</a>
            <a href="#" className="footer-social-link">LinkedIn</a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Kalkidan Asdesach. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
