import React, { useEffect, useRef } from 'react';
import './Projects.css';
import portfoliov1 from '../../assets/projects/portfoliov1.png';

const projectsData = [
  { id: 1, title: "E-commerce Premium", category: "Fullstack Development", size: "large", image: {portfoliov1}},
  { id: 2, title: "App de Finanças", category: "UX/UI Design", size: "medium", image: "https://via.placeholder.com/400x400" },
  { id: 3, title: "Dashboard Admin", category: "React / Node.js", size: "small", image: "https://via.placeholder.com/400x300" },
  { id: 4, title: "Plataforma SaaS", category: "Product Design", size: "medium", image: "https://via.placeholder.com/400x400" }
];

const Projects = () => {
  // Mantemos as refs apenas para a animação de entrada (Fade-in)
  const scrollRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    }, { threshold: 0.1 });

    scrollRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="projects-section" id="projetos">
      <div className="projects-container">
        <h2 
          className="section-title hidden" 
          ref={el => scrollRefs.current[0] = el}
        >
          Projetos em <span className='destaque-title'>Destaque</span>
        </h2>
        
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div 
              key={project.id} 
              className={`project-card ${project.size} hidden`}
              // Ref apenas para o Observer
              ref={el => scrollRefs.current[index + 1] = el}
              // REMOVEMOS os eventos de mouseMove/mouseLeave daqui
            >
              <div className="project-image-wrapper">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <span className="project-category">{project.category}</span>
                  <h3 className="project-item-title">{project.title}</h3>
                  <button className="view-project-btn">Ver Detalhes</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;