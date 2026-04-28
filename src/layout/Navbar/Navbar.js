import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (e, id) => {
    e.preventDefault();
    setIsOpen(false); 
    
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className='navbar'>
      <div className='navbar-logo' onClick={(e) => handleScroll(e, 'home')} style={{ cursor: 'pointer' }}>
        <span className='logo-icon'></span> GUSTAVO.DEV
      </div>

      {/* Ícone do Menu Hamburger para Mobile */}
      <div className={`menu-toggle ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <li><a href="#home" onClick={(e) => handleScroll(e, 'home')}>Home</a></li>
        <li><a href="#projetos" onClick={(e) => handleScroll(e, 'projetos')}>Projetos</a></li>
        <li><a href="#sobre" onClick={(e) => handleScroll(e, 'sobre')}>Sobre mim</a></li>
        <li><a href="#skills" onClick={(e) => handleScroll(e, 'skills')}>Skills</a></li>
        <li><a href="#contato" className='contact-btn' onClick={(e) => setIsOpen(false)}>Contato</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;