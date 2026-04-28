import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import './Projects.css';
import portfoliov1 from '../../assets/projects/portfoliov1.png';
import agro from '../../assets/projects/agro.png';
import medico from '../../assets/projects/medico.png';
import jogos from '../../assets/projects/jogos.png';

const projectsData = [
  { 
    id: 1, title: "Portfolio V1", category: "Personal Development", size: "large", image: portfoliov1,
    liveLink: "https://gustavoatauri.github.io/portfolio_v2", githubLink: "https://github.com/GustavoAtauri/portfolio_v2" 
  },
  { 
    id: 2, title: "SaaS Agro", category: "UX/UI Design", size: "medium", image: agro,
    liveLink: "https://gustavoatauri.github.io/project-agro", githubLink: "https://github.com/GustavoAtauri/project-agro" 
  },
  { 
    id: 3, title: "Gestão Hospitalar", category: "Healthcare Design", size: "small", image: medico,
    liveLink: "https://gustavoatauri.github.io/my-projects", githubLink: "https://github.com/GustavoAtauri/my-projects" 
  },
  { 
    id: 4, title: "GameStore SaaS", category: "UX/UI Design", size: "medium", image: jogos,
    liveLink: "https://gustavoatauri.github.io/project-loja-jogos", githubLink: "https://github.com/GustavoAtauri/project-loja-jogos" 
  }
];

const Projects = () => {
  const scrollRefs = useRef([]);
  const [selectedProject, setSelectedProject] = useState(null); 

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

  const handleCloseModal = (e) => {
    if (e.target.className === 'modal-overlay') {
      setSelectedProject(null);
    }
  };

  return (
    <section className="projects-section" id="projetos">
      <div className="projects-container">
        <h2 
          className="section-title project-hidden" 
          ref={el => scrollRefs.current[0] = el}
        >
          Projetos em <span className='destaque-title'>Destaque</span>
        </h2>
        
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div 
              key={project.id} 
              className={`project-card ${project.size} project-hidden`}
              ref={el => scrollRefs.current[index + 1] = el}
            >
              <div className="project-image-wrapper">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <span className="project-category">{project.category}</span>
                  <h3 className="project-item-title">{project.title}</h3>
                  <button 
                    className="view-project-btn"
                    onClick={() => setSelectedProject(project)}
                  >
                    Ver Detalhes
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && createPortal(
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content">
            <button className="close-modal-btn" onClick={() => setSelectedProject(null)}>×</button>
            
            <img src={selectedProject.image} alt={selectedProject.title} className="modal-image" />
            
            <div className="modal-info">
              <span className="modal-category">{selectedProject.category}</span>
              <h3 className="modal-title">{selectedProject.title}</h3>
              
              <div className="modal-actions">
                <a href={selectedProject.liveLink} target="_blank" rel="noopener noreferrer" className="modal-btn btn-live">
                  🌐 Acessar Site
                </a>
                <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer" className="modal-btn btn-github">
                  💻 Ver Código
                </a>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
};

export default Projects;