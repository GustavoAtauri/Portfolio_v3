import React from 'react'
import { useMousePosition } from "../../hooks/useMousePosition";
import "./Cursor.css";


const Cursor = () => {
    const { x, y } = useMousePosition();

  return (
    <>
    <div 
        className="cursor-dot"
        style={{left: `${x}px`, top: `${y}px` }}
    ></div>
    <div
        className="cursor-outline"
        style={{ left: `${x}px`, top: `${y}px`}}
    ></div>
    </>
  )
}

export default Cursor