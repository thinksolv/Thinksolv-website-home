import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface DiagonalImageProps {
  position: 'top' | 'bottom';
  images: string[];
  currentIndex: number;
}

const DiagonalImage: React.FC<DiagonalImageProps> = ({ position, images, currentIndex }) => {
  const positionStyles = {
    top: {
      container: 'absolute top-0 right-0 transform translate-x-4 sm:translate-x-6 md:translate-x-8',
      initial: { opacity: 0, y: -50 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 50 },
    },
    bottom: {
      container: 'absolute bottom-0 left-0 transform -translate-x-4 sm:-translate-x-6 md:-translate-x-8',
      initial: { opacity: 0, y: 50 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -50 },
    },
  }[position];

  return (
    <div className={`${positionStyles.container} w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64 aspect-square`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={positionStyles.initial}
          animate={positionStyles.animate}
          exit={positionStyles.exit}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          className="relative w-full h-full"
        >
          <div className="w-full h-full rounded-2xl overflow-hidden shadow-lg">
            <img
              src={images[currentIndex]}
              alt={`Document AI ${position} image`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent" />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default DiagonalImage;
    