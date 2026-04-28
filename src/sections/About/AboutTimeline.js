import React, { useRef, useLayoutEffect, Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, useGLTF } from '@react-three/drei';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './AboutTimeline.css';

gsap.registerPlugin(ScrollTrigger);

const TimelineModel = ({ scrollContainer, isMobile }) => {
  const modelRef = useRef(null);
  
  const { scene } = useGLTF(`${process.env.PUBLIC_URL}/assets/retro_computer.glb`);

  useLayoutEffect(() => {
    if (!modelRef.current || !scrollContainer.current) return;

    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: scrollContainer.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1, 
          snap: {
            snapTo: 1 / 3, 
            duration: 0.5, 
            ease: "power1.inOut" 
          }
        }
      });

    
      const startX = isMobile ? 0 : -3;
      const startY = isMobile ? 1.5 : -1.5;
      modelRef.current.position.set(startX, startY, 0);

      if (!isMobile) {
        tl.to(modelRef.current.position, { x: 3, ease: "none", duration: 1 }, 0);
        tl.to(modelRef.current.position, { x: -3, ease: "none", duration: 1 }, 1);
        tl.to(modelRef.current.position, { x: 3, ease: "none", duration: 1 }, 2);
      }

      tl.to(modelRef.current.rotation, { y: Math.PI * 4, ease: "none", duration: 3 }, 0);

    });

    return () => ctx.revert();
  }, [scrollContainer, isMobile]);

  return (
    <primitive 
      ref={modelRef}
      object={scene} 
      scale={isMobile ? 1.4 : 3} 
      rotation={[0.4, 0, 0]} 
    />
  );
};

const AboutTimeline = () => {
  const containerRef = useRef(null);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="sobre" ref={containerRef} className="timeline-section">
       <h2>Minha História</h2>
      <div className="timeline-canvas-container">
        <Canvas 
          camera={{ position: [0, 0, 8], fov: 45 }} 
          dpr={[1, 1.5]}
          gl={{ powerPreference: "high-performance", antialias: false, alpha: true }}
        >
          <Suspense fallback={null}>
            <ambientLight intensity={1.5} />
            <directionalLight position={[10, 10, 5]} intensity={2} />
            
            <Environment preset="city" resolution={256} />
            <TimelineModel scrollContainer={containerRef} isMobile={isMobile} />
          </Suspense>
        </Canvas>
      </div>

      <div className="timeline-content">
        
        {/* CARD 1*/}
        <div className="timeline-step step-right">
          <div className="timeline-card">
            <h3>2007 - O Inicio</h3>
            <p>Olá, meu nome é Gustavo, tenho 19 anos e sou estudante de Engenharia da Computação cursando o terceiro semestre. Nascido em 2007, sempre fui uma criança muito agitada e curiosa, fiz diversos esportes no decorrer da minha vida, de futebol a Kung Fu ou até mesmo ginástica de trampolim. Cresci me dedicando a conhecer sobre diversas áreas e culturas diferentes, até finalmente encontrar o nicho pelo qual me apaixonei: a tecnologia.</p>
          </div>
        </div>
        
        {/* CARD 2*/}
        <div className="timeline-step step-left">
          <div className="timeline-card">
            <h3>2020 - A Pandemia</h3>
            <p>Aos meus 13 anos, passei por talvez uma das maiores pandemias do século, passando quase 2 anos inteiros somente em casa. Durante todo esse tempo, fui me interessando pela tecnologia e estava decidido a aprender mais sobre tudo que essa área tinha a me oferecer. Comecei a me aprofundar em hardware, aprendi tudo sobre cada componente, entradas, fios e preços, mesmo só tendo um celular em mãos na época, até que dois anos depois, em 2022, com 15 anos, consegui montar o meu primeiro computador 100% sozinho.</p>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="timeline-step step-right">
          <div className="timeline-card">
            <h3>2024 - A decisao</h3>
            <p>2024 foi o ano em que me formei no ensino médio, e então surge aquela famosa pergunta em nossa mente: "Para onde eu vou? O que vou escolher para a minha vida? Qual caminho vou escolher?". Foi quando mais uma vez a tecnologia me chamou a atenção e pensei: "Por que não? Eu já sei sobre hardware, e se agora eu explorar o outro lado, o software?". E foi aí que decidi cursar Engenharia da Computação e seguir carreira nessa área de extrema importância, mas também muito disputada.</p>
          </div>
        </div>

        {/* CARD 4 */}
        <div className="timeline-step step-left">
          <div className="timeline-card">
            <h3>2026 - Dias atuais</h3>
            <p>Finalmente chegamos na atualidade, no hoje. Estou cursando meu 3º semestre na faculdade, fiz diversos cursos por fora, entre eles: Excel, PowerPoint, JavaScript, React, Fundamentos em Hardware & Software, entre outros. Sigo cada dia mais me aprofundando e utilizando mais dos meus conhecimentos na prática, produzindo projetos pessoais e em busca de uma oportunidade de emprego na área para mostrar que tenho o conhecimento e a dedicação necessária para chegar a qualquer lugar em conjunto.</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutTimeline;