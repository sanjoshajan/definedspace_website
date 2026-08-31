'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface InteractiveCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  tiltIntensity?: number;
  glareEffect?: boolean;
}

export default function InteractiveCard({
  children,
  className = '',
  onClick,
  tiltIntensity = 12,
  glareEffect = true,
}: InteractiveCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = (mouseX / width - 0.5) * 2; // -1 to 1
    const yPct = (mouseY / height - 0.5) * 2; // -1 to 1

    setRotateX(-yPct * tiltIntensity);
    setRotateY(xPct * tiltIntensity);

    if (glareEffect) {
      setGlarePosition({
        x: (mouseX / width) * 100,
        y: (mouseY / height) * 100,
        opacity: 0.15,
      });
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
    setGlarePosition((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <motion.div
      ref={cardRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        y: isHovered ? -8 : 0,
        scale: isHovered ? 1.02 : 1,
      }}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 30,
        mass: 0.8,
      }}
      style={{
        transformStyle: 'preserve-3d',
        perspective: 1000,
      }}
      className={`relative overflow-hidden rounded-2xl transition-shadow duration-300 ${
        isHovered
          ? 'shadow-2xl ring-1 ring-black/10'
          : 'shadow-sm hover:shadow-md'
      } ${className}`}
    >
      {/* Glare Reflection Sheen */}
      {glareEffect && (
        <div
          className="pointer-events-none absolute inset-0 z-20 transition-opacity duration-300 rounded-2xl"
          style={{
            background: `radial-gradient(circle 200px at ${glarePosition.x}% ${glarePosition.y}%, rgba(255,255,255,0.4), transparent 75%)`,
            opacity: glarePosition.opacity,
          }}
        />
      )}

      {/* Card Content with 3D Depth */}
      <div style={{ transform: 'translateZ(10px)' }} className="w-full h-full">
        {children}
      </div>
    </motion.div>
  );
}
