'use client';

import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const images: string[] = [
  '/img1.png',
  '/img2.png',
  '/img3.png',
  '/img4.png',
  
];

const DUPLICATION = 10; // repeat images 10 times
const VISIBLE_COUNT = 4; // show 4 images at once
const GAP_PX = 16; // space between images

const NavCarousel: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [imageWidth, setImageWidth] = useState(0);

  const x = useMotionValue(0);
  const speed = 0.2;

  // Update container width on mount & resize
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) setContainerWidth(containerRef.current.offsetWidth);
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  // Calculate image width to fit exactly 4 images + gaps inside container
  useEffect(() => {
    if (containerWidth) {
      // Total gaps between 4 images = 3 gaps
      const totalGapWidth = GAP_PX * (VISIBLE_COUNT - 1);
      setImageWidth((containerWidth - totalGapWidth) / VISIBLE_COUNT);
    }
  }, [containerWidth]);

  // Calculate total scroll width for duplicated images
  const totalWidth = images.length * DUPLICATION * (imageWidth + GAP_PX);

  const translateX = useTransform(x, (v) => `${v % totalWidth}px`);

  useEffect(() => {
    let animationFrame: number;
    const animate = () => {
      x.set(x.get() - speed);
      animationFrame = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, [x]);

  return (
    <div
      ref={containerRef}
      className="overflow-hidden"
      style={{ width: '100%' }} // full width of parent/navbar
    >
      <motion.div
        className="flex"
        style={{
          x: translateX,
          minWidth: totalWidth,
          gap: GAP_PX,
        }}
      >
        {[...Array(DUPLICATION)].flatMap((_, dupIndex) =>
          images.map((src, idx) => (
            <img
              key={`${dupIndex}-${idx}`}
              src={src}
              alt={`img-${idx}`}
              draggable={false}
              style={{
                width: imageWidth,
                flexShrink: 0,
                height: '3rem',
                objectFit: 'cover'
              }}
            />
          ))
        )}
      </motion.div>
    </div>
  );
};

export default NavCarousel;
