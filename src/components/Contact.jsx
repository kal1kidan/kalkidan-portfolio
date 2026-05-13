import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="container contact-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">CONTACT</h2>
        </motion.div>

        <div className="contact-info">
          <motion.div 
            className="contact-item"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Phone className="contact-icon" />
            <div>
              <span className="contact-label">Phone | </span>
              <a href="tel:+251919888814" className="contact-value">+251 919888814</a>
            </div>
          </motion.div>

          <motion.div 
            className="contact-item"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Mail className="contact-icon" />
            <div>
              <span className="contact-label">Email | </span>
              <a href="mailto:kal727kidan@gmail.com" className="contact-value">kal727kidan@gmail.com</a>
            </div>
          </motion.div>

          <motion.div 
            className="contact-item"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <MapPin className="contact-icon" />
            <div>
              <span className="contact-label">Location | </span>
              <span className="contact-value">Addis Ababa, Ethiopia</span>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="contact-actions"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a href="https://wa.me/251919888814" target="_blank" rel="noreferrer" className="btn btn-primary contact-btn">WhatsApp</a>
          <a href="mailto:kal727kidan@gmail.com" className="btn btn-outline contact-btn">Send Email</a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
