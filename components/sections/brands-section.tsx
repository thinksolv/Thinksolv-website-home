'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const brands = [
  { name: 'OpenAI', src: '/openai.png' },
  { name: 'Amazon', src: '/amazon.png' },
  { name: 'Google', src: '/google.png' },
  { name: 'Airbnb', src: '/airbnb.png' },
  // Add more brands here
];

const BrandsSection = () => {
  return (
    <div className="overflow-hidden py-8 bg-white dark:bg-black">
      <motion.div
        className="flex space-x-16 animate-slide"
        animate={{ x: ['100%', '-100%'] }}
        transition={{ repeat: Infinity, duration: 15, ease: 'linear' }}
      >
        {[...brands, ...brands].map((brand, index) => (
          <div
            key={index}
            className="flex items-center justify-center px-4 grayscale hover:grayscale-0 transition duration-300"
          >
            <Image
              src={brand.src}
              alt={brand.name}
              width={150}
              height={50}
              className="object-contain"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default BrandsSection;
