import React, {useState, useRef } from 'react';
import { useMousePosition } from '../../hooks/useMousePosition';
import './Hero.css';

const Hero = () => {

    const scrollToProjects = () => {
  const projectsSection = document.getElementById('projetos');
  if (projectsSection) {
    projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
    };

    const {x, y} = useMousePosition();
    const [isHoveringTitle, setIsHoveringTitle] = useState(false);
    const titleRef = useRef(null);
    const getRelativeMousePos = () => {
      if (!titleRef.current) return { relX: 0, relY: 0};
      const rect = titleRef.current.getBoundingClientRect();
      return {
        relX: x - rect.left -150,
        relY: y - rect.top -100,
      }
    };

    const {relX, relY} = getRelativeMousePos ();
    const maskStyle = {
      '--mouse-x': `${relX}px`,
      '--mouse-y': `${relY}px`,
      '--mask-size': isHoveringTitle ? '220px' : '0px'
    }

    return (
    <section className='hero-container'>
        <div className='hero-content'>
          <div
          className='title-mask-container'
          ref={titleRef}
          onMouseEnter={() => setIsHoveringTitle(true)}  
          onMouseLeave={() => setIsHoveringTitle(false)}
          style={maskStyle}
          >
            <h1 className='title-base'>
              Desenvolvedor <br />Front-end
            </h1>
            <h1 className='title-reveal' aria-hidden='true'>
              Designer <br /> UX & UI
            </h1>
            </div>

            <p>Especialista em React e interfaces de alta performance.</p>
            <div className='hero-btns'>
                <button className='cta-button' onClick={scrollToProjects}>Ver Projetos</button>
                <button className='secondary-button'>Meu GitHub</button>
            </div>
        </div>
    </section>
  );
}

export default Hero