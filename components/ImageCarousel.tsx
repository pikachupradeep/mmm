'use client';

import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const images: string[] = [
  '/carousel/img1.png',
  '/carousel/img2.png',
  '/carousel/img3.png',
  '/carousel/img4.png',
  '/carousel/img5.png',
  '/carousel/img6.png',
  '/carousel/img7.png',
  '/carousel/img8.png',
  '/carousel/img9.png',
];

const DUPLICATION = 10; // repeat images 10 times
const VISIBLE_COUNT = 4; // show 4 images at once
const GAP_PX = 16; // space between images

const InfiniteImageCarousel: React.FC = () => {
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
      const totalGapWidth = GAP_PX * (VISIBLE_COUNT - 1);
      setImageWidth((containerWidth - totalGapWidth) / VISIBLE_COUNT);
    }
  }, [containerWidth]);

  // Calculate total scroll width for duplicated images
  const totalWidth = images.length * DUPLICATION * (imageWidth + GAP_PX);

  const translateX = useTransform(x, (v) => `${v % totalWidth}px`);

  // Scroll to the RIGHT with reset logic
  useEffect(() => {
    let animationFrame: number;

    const animate = () => {
      const currentX = x.get();
      const nextX = currentX + speed;

      x.set(nextX >= totalWidth ? 0 : nextX);

      animationFrame = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, [x, totalWidth]);

  return (
    <div
      ref={containerRef}
      className="overflow-hidden bg-white border-t"
      style={{ width: '100%' }}
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
              className="rounded-lg"
              key={`${dupIndex}-${idx}`}
              src={src}
              alt={`img-${idx}`}
              draggable={false}
              style={{
                width: imageWidth,
                flexShrink: 0,
                height: 'auto',
              }}
            />
          ))
        )}
      </motion.div>
    </div>
  );
};

export default InfiniteImageCarousel;
