import React, { useEffect, useState } from 'react';
import './Preloader.css';

const Preloader = ({ onComplete }) => {
    const [isFadingOut, setIsFadingOut] = useState(false);

    useEffect(() => {
        const fadeOutTimer = setTimeout(() => {
            setIsFadingOut(true);
        }, 4500);

        const completeTimer = setTimeout(() => {
            onComplete();
        }, 5000);

        return () => {
            clearTimeout(fadeOutTimer);
            clearTimeout(completeTimer);
        };
    }, [onComplete]);

    return (
    <div className={`preloader-container ${isFadingOut ? 'fade-out' : ''}`}>
      <div className="crt-screen">
        
        <div className="scanlines"></div>
        
        <div className="terminal-content">
          <div className="system-text">
            <p className="glitch" data-text="INICIANDO SISTEMA...">INICIANDO SISTEMA<span className="animated-dots"></span></p>
            <p>Carregando módulos [React, JS, CSS]<span className="animated-dots"></span> OK</p>
            <p>Estabelecendo conexão segura<span className="animated-dots"></span> OK</p>
            <p>Renderizando interface de Gustavo<span className="animated-dots"></span></p>
          </div>

          <div className="loading-wrapper">
            <span className="loading-percentage">CARREGANDO<span className="animated-dots"></span></span>
            <div className="loading-bar-container">
              <div className="loading-bar-fill"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;