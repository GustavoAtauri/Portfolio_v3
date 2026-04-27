import React, { useState } from 'react';
import './App.css';
import Hero from './sections/Hero/Hero';
import Navbar from './layout/Navbar/Navbar';
import Cursor from './components/cursor/Cursor';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';
import Preloader from './components/Preloader/Preloader'; 
import { AuroraBackground } from './components/ui/aurora-background'; 
import AboutTimeline from './sections/About/AboutTimeline';
import { ReactLenis } from 'lenis/react';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading ? (
        <Preloader onComplete={() => setIsLoading(false)} />
      ) : (
        // 2. O LENIS ABRAÇANDO TODO O CONTEÚDO DO SITE
        <ReactLenis root options={{ lerp: 0.05, smoothWheel: true }}>
          
          <Cursor />
          
          <div className="fixed top-0 left-0 w-full h-screen z-0 pointer-events-none">
            <AuroraBackground className="bg-transparent dark:bg-transparent">
              <div></div>
            </AuroraBackground>
          </div>

          <div className="App fade-in-site relative z-10">
            <Navbar />
            <main>
              <Hero />
              <Projects />
              <AboutTimeline />
              <Skills />
            </main>
          </div>

        </ReactLenis>
      )}
    </>
  );
}

export default App;