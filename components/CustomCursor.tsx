'use client';

import { useState, useEffect } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: Event) => {
      const target = e.target as HTMLElement;
      const isClickable = target.tagName === 'A' || 
                          target.tagName === 'BUTTON' || 
                          target.onclick !== null ||
                          target.classList.contains('nav-links');
      setIsPointer(isClickable);
    };

    const handleMouseOut = () => {
      setIsPointer(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <>
      {/* Main cursor dot */}
      <div
        style={{
          position: 'fixed',
          left: position.x,
          top: position.y,
          width: isPointer ? '32px' : '12px',
          height: isPointer ? '32px' : '12px',
          borderRadius: '50%',
          background: isPointer 
            ? 'rgba(99, 102, 241, 0.2)' 
            : 'rgba(99, 102, 241, 0.8)',
          pointerEvents: 'none',
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.2s ease, height 0.2s ease, background 0.2s ease',
          zIndex: 9999,
          mixBlendMode: 'screen',
        }}
      />
      
      {/* Cursor ring */}
      <div
        style={{
          position: 'fixed',
          left: position.x,
          top: position.y,
          width: isPointer ? '48px' : '32px',
          height: isPointer ? '48px' : '32px',
          borderRadius: '50%',
          border: '2px solid rgba(99, 102, 241, 0.3)',
          pointerEvents: 'none',
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.3s ease, height 0.3s ease',
          zIndex: 9998,
          mixBlendMode: 'screen',
        }}
      />
    </>
  );

  
}