import React from 'react';
import './Hero.css';
import minhaFoto from '../../assets/minha-foto-profissional.jpeg'; 

const Hero = () => {

    const scrollToProjects = () => {
        const projectsSection = document.getElementById('projetos');
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className='hero-container' id="home">
            <div className='hero-content'>
                
                <div className="hero-text-block">
                    <h1 className='hero-title'>
                        Desenvolvedor <br /><span className="highlight-purple">Front-end</span>
                    </h1>

                    <p>Desenvolvedor web focado em interfaces imersivas e de alta performance, Estudante de Engenharia da Computação</p>

                    <div className='hero-btns'>
                        <button className='btn-primary' onClick={scrollToProjects}>
                            Ver Projetos
                        </button>
                        
                        <a 
                            href="https://github.com/gustavoatauri" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            style={{ textDecoration: 'none' }}
                        >
                            <button className='btn-secondary'>
                                GitHub
                            </button>
                        </a>
                    </div>
                </div>

                <div className="hero-photo-card">
                    <div className="photo-card-inner">
                        <img src={minhaFoto} alt="Gustavo - Desenvolvedor Front-end" />
                        <div className="photo-glow-effect"></div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;