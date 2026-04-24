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
        {/* Efeito de scanlines de TV antiga */}
        <div className="scanlines"></div>
        
        <div className="terminal-content">
          <div className="system-text">
            <p className="glitch" data-text="INICIANDO SISTEMA...">INICIANDO SISTEMA...</p>
            <p>Carregando módulos [React, JS, CSS]... OK</p>
            <p>Estabelecendo conexão segura... OK</p>
            <p>Renderizando interface de Gustavo...</p>
          </div>

          <div className="loading-wrapper">
            <span className="loading-percentage">CARREGANDO...</span>
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