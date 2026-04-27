import React, { useEffect, useRef } from 'react';
import './Cursor.css';
import { useMousePosition } from "../../hooks/useMousePosition";

const Cursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current) {
        requestAnimationFrame(() => {
          cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
        });
      }
    };

    window.addEventListener('mousemove', moveCursor);

    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return <div className="cursor" ref={cursorRef}></div>;
};

export default Cursor;