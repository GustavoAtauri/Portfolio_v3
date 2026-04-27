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

      // Ajuste de posição para mobile (centralizado e mais alto) vs desktop
      const startX = isMobile ? 0 : -3;
      const startY = isMobile ? 1.5 : -1.5;
      modelRef.current.position.set(startX, startY, 0);

      // O zig-zag só acontece no Desktop
      if (!isMobile) {
        tl.to(modelRef.current.position, { x: 3, ease: "none", duration: 1 }, 0);
        tl.to(modelRef.current.position, { x: -3, ease: "none", duration: 1 }, 1);
        tl.to(modelRef.current.position, { x: 3, ease: "none", duration: 1 }, 2);
      }

      // Rotação constante
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
    <section ref={containerRef} className="timeline-section">
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
        
        {/* CARD 1 (DIREITA) */}
        <div className="timeline-step step-right">
          <div className="timeline-card">
            <h3>2007 - O Inicio</h3>
            <p>Ola, meu nome e gustavo tenho 19 anos sou estudante de engenharia da computacao cursando o terceiro semestre, nascido em 2007 sempre fui uma crianca muito agitada e curiosa, fiz diversos esportes ao decorrer da minha vida, de futebol a kung fu ou ate mesmo ginastica de trampolim, cresci me dedicando a conhecer sobre diversas areas e culturas diferentes, ate eu finalmente encontrar o nicho que eu me apaixonei, a tecnologia</p>
          </div>
        </div>
        
        {/* CARD 2 (ESQUERDA) */}
        <div className="timeline-step step-left">
          <div className="timeline-card">
            <h3>2020 - A Pandemia</h3>
            <p>Aos meus 13 anos, passei por talvez uma das maiores pandemias do seculo, passando quase 2 anos inteiros somente em casa, durante todo esse tempo fui me interessando pela tecnologia, e estava decidido a aprender mais sobre tudo que essa area tinha a me oferecer, comecei a me aprofundar em hardware, aprendi tudo sobre cada componente, entradas, fios, preços, mesmo so tendo um celular em maos na epoca, ate que dois ano depois em 2022 com 15 anos eu consigo montar o meu primeiro computador 100% sozinho</p>
          </div>
        </div>

        {/* CARD 3 (DIREITA) */}
        <div className="timeline-step step-right">
          <div className="timeline-card">
            <h3>2024 - A decisao</h3>
            <p>2024 foi o ano em que me formei no ensino medio, e entao surge aquela famosa pergunta em nossa mente, "para onde eu vou? o que vou escolher para minha vida? qual caminho vou escolher?", foi quando mais uma vez a tecnologia me chamou atenção e pensei "por que nao?, eu ja sei sobre hardware, e se agora eu explorar o outro lado, o software". E foi ai que decidi cursar Engenharia da computação e seguir carreira nessa area de extrema importancia mas tambem muito disputada</p>
          </div>
        </div>

        {/* CARD 4 (ESQUERDA) */}
        <div className="timeline-step step-left">
          <div className="timeline-card">
            <h3>2026 - Dias atuais</h3>
            <p>Finalmente chegamos na atualidade, no hoje, estou cursando meu 3 semestre na faculdade, fiz diversos cursos por fora, entre eles: Excel, Powerpoint, JavaScript, React, Fundamentos em Hardware & Software, entre outros. Sigo cada dia mais me aprofundando e utilizando mais dos meus conhecimentos na pratica, produzindo projetos pessoais, e em busca de uma oportunidade de emprego na area para mostrar que tenho o conhecimento e a dedicacao necessaria para chegar em qualquer lugar em conjunto</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutTimeline;