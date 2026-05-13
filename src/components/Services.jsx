import React from 'react';
import { motion } from 'framer-motion';
import { Video, PenTool, Smartphone, MonitorPlay, Megaphone } from 'lucide-react';
import './Services.css';

const Services = () => {
  const services = [
    { title: 'Social Media Content Creation', icon: <Smartphone size={32} /> },
    { title: 'TikTok Video Editing', icon: <Video size={32} /> },
    { title: 'Product Promotion Videos', icon: <MonitorPlay size={32} /> },
    { title: 'Digital Branding', icon: <PenTool size={32} /> },
    { title: 'Content Strategy', icon: <Megaphone size={32} /> },
  ];

  return (
    <section className="services" id="services">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          My Services
        </motion.h2>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="service-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
