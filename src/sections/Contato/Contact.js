import React, { useEffect, useRef } from 'react';
import './Contact.css';

const Contact = () => {
  const contactRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.1 });

    if (contactRef.current) observer.observe(contactRef.current);

    return () => observer.disconnect();
  }, []);

  const socialLinks = [
    { name: 'LinkedIn', url: 'https://linkedin.com/in/gustavo-atauri', icon: '🔗', color: '#0077b5' },
    { name: 'GitHub', url: 'https://github.com/GustavoAtauri', icon: '💻', color: '#333' },
    { name: 'Instagram', url: 'https://www.instagram.com/guzxssj', icon: '📸', color: '#e4405f' },
    { name: 'WhatsApp', url: 'https://wa.me/19995466932', icon: '📱', color: '#25d366' },
  ];

  return (
    <section className="contact-section" id="contato">
      <div className={`contact-container contact-hidden`} ref={contactRef}>
        <div className="contact-header">
          <span className="contact-subtitle">O próximo passo</span>
          <h2 className="contact-title">Vamos criar algo <span className="purple-glow">juntos?</span></h2>
          <p>Estou aberto a novas oportunidades, colaborações ou até mesmo uma conversa.</p>
        </div>

        <div className="contact-grid">
          {socialLinks.map((social) => (
            <a 
              key={social.name} 
              href={social.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-card"
              style={{ '--brand-color': social.color }}
            >
              <div className="contact-icon">{social.icon}</div>
              <h3>{social.name}</h3>
              <p>Conectar →</p>
              <div className="contact-glow"></div>
            </a>
          ))}
        </div>

        <footer className="footer-simple">
          <p>© 2026 Gustavo Atauri • Desenvolvido com React & Js</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;