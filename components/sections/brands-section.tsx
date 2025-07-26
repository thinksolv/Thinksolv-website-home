'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const brands = [
  { name: 'Amazon', src: '/amazon.svg' },
  { name: 'OpenAI', src: '/linkedin.svg' },
  { name: 'Google', src: '/walmart.svg' },
  { name: 'Airbnb', src: '/upwork.svg' },
  { name: 'Groww', src: '/groww.svg' },
  { name: 'Swiggy', src: '/swiggy.svg' },
  { name: 'Skyscanner', src: '/skyscanner.svg' },
];

const BrandsSection = () => {
  const [width, setWidth] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (trackRef.current) {
      setWidth(trackRef.current.scrollWidth / 2);
    }
  }, []);

  return (
    <div className="overflow-hidden  dark:bg-black py-12">
      <div className="relative w-full">
        <motion.div
          ref={trackRef}
          className="flex w-max"
          animate={{ x: [`0%`, `-${width}px`] }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: 25,
            ease: 'linear',
          }}
        >
          {[...brands, ...brands].map((brand, index) => (
            <div
              key={index}
              className="flex items-center justify-center px-6 w-[180px] h-[80px]"
            >
              <div className="relative w-full h-full">
                <Image
                  src={brand.src}
                  alt={brand.name}
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            </div>
          ))}
        </motion.div>
        <p className='flex-grow'>Supported Websites</p>
      </div>
    </div>
  );
};

export default BrandsSection;
