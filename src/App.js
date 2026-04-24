import React, { useState } from 'react';
import './App.css';
import Hero from './sections/Hero/Hero';
import Navbar from './layout/Navbar/Navbar';
import Cursor from './components/cursor/Cursor';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';
import Preloader from './components/Preloader/Preloader'; 
import { AuroraBackground } from './components/ui/aurora-background'; 

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading ? (
        <Preloader onComplete={() => setIsLoading(false)} />
      ) : (
        /* O Fragmento vazio <> </> permite termos o fundo e o site lado a lado */
        <>
          {/* 1. A AURORA FICA AQUI FORA, TOTALMENTE TRAVADA NA TELA */}
          <div className="fixed top-0 left-0 w-full h-screen z-0 pointer-events-none">
            <AuroraBackground className="bg-transparent dark:bg-transparent">
              <div></div>
            </AuroraBackground>
          </div>

          {/* 2. O SEU SITE VEM AQUI, ROLANDO POR CIMA DA AURORA */}
          <div className="App fade-in-site relative z-10">
            <Cursor />
            <Navbar />
            <main>
              <Hero />
              <Projects />
              <Skills />
            </main>
          </div>
        </>
      )}
    </>
  );
}

export default App;