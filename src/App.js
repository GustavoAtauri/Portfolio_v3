import React, { useState } from 'react';
import './App.css';
import Hero from './sections/Hero/Hero';
import Navbar from './layout/Navbar/Navbar';
import Cursor from './components/cursor/Cursor';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';
import Preloader from './components/Preloader/Preloader'; 

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading ? (
        <Preloader onComplete={() => setIsLoading(false)} />
      ) : (
        <div className="App fade-in-site">
          <Cursor />
          <Navbar />
          <main>
            <Hero />
            <Projects />
            <Skills />
          </main>
        </div>
      )}
    </>
  );
}

export default App;