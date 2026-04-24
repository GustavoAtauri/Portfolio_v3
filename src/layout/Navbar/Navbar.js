import './Navbar.css';

import React from 'react'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='navbar-logo'>
            <span className='logo-icon'>⚡</span> DEV.PORTFOLIO
        </div>
        <ul className='navbar-links'>
            <li><a href="home">Home</a></li>
            <li><a href="projects">Projetos</a></li>
            <li><a href="about">Sobre</a></li>
            <li><a href="" className='contact-btn'>Contato</a></li>
        </ul>
    </nav>
  );
};

export default Navbar
