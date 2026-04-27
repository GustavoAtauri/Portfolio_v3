import React from "react";
import './Skills.css';

const Skills = () => {
  return (
    <section className="skills-section">
      <div className="skills-header">
        <h2>Meu Arsenal</h2>
        <p>Tecnologias e conceitos que utilizo para dar vida às ideias.</p>
      </div>

      <div className="skills-bento">
        
        {/* CARD 1: Front-End */}
        <div className="bento-card bento-wide glow-blue">
          <h3>Desenvolvimento Front-End</h3>
          <p>Construção de interfaces modernas, performáticas e totalmente responsivas.</p>
          <div className="skills-tags">
            <span className="skill-tag">React.js</span>
            <span className="skill-tag">JavaScript (ES6+)</span>
            <span className="skill-tag">HTML5 & CSS3</span>
            <span className="skill-tag">Tailwind CSS</span>
          </div>
          <div className="bg-icon">💻</div>
        </div>

        {/* CARD 2: Hardware & Montagem */}
        <div className="bento-card bento-tall glow-green">
          <h3>Hardware & Montagem</h3>
          <p>Experiência prática na escolha de componentes, arquitetura de hardware e montagem de computadores de alta performance.</p>
          <div className="skills-tags" style={{ marginTop: '20px' }}>
            <span className="skill-tag">Montagem de PC</span>
            <span className="skill-tag">Otimização de Setup</span>
            <span className="skill-tag">Hardware Enthusiast</span>
            <span className="skill-tag">Manutenção</span>
          </div>
          <div className="bg-icon">🛠️</div>
        </div>

        {/* CARD 3: UI/UX Design */}
        <div className="bento-card glow-purple">
          <h3>UI / UX Design</h3>
          <p>Glassmorphism, Dark Mode e experiências imersivas.</p>
          <div className="skills-tags">
            <span className="skill-tag">Figma</span>
            <span className="skill-tag">Prototipagem</span>
          </div>
          <div className="bg-icon">✨</div>
        </div>

        {/* CARD 4: Ferramentas de Workflow */}
        <div className="bento-card bento-wide glow-blue">
          <h3>Ferramentas de Workflow</h3>
          <div className="marquee-container" style={{ marginTop: '20px' }}>
            <div className="marquee-content">
              <span>GIT • GITHUB • VS CODE • NPM • NODE.JS • GSAP • THREE.JS • </span>
              <span>GIT • GITHUB • VS CODE • NPM • NODE.JS • GSAP • THREE.JS • </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;