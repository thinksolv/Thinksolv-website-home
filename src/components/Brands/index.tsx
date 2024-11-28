'use client'; 
import Image from 'next/image';
import { motion } from 'framer-motion';

const brands = [
  { name: 'OpenAI', src: '/openai.png' },
  { name: 'Amazon', src: '/amazon.png' },
  { name: 'Google', src: '/google.png' },
  { name: 'Airbnb', src: '/airbnb.png' },
  // { name: 'Anthropic', src: '/brands/anthropic.svg' },
  // { name: 'Marriott', src: '/brands/marriott.svg' },
  // { name: 'Shopify', src: '/brands/shopify.svg' },
  // { name: 'URBN', src: '/brands/urbn.svg' },
];

const BrandsSection = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 p-8 bg-white dark:bg-black">
      {brands.map((brand, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="flex items-center justify-center p-4"
        >
          <Image
            src={brand.src}
            alt={brand.name}
            width={150}
            height={50}
            className="object-contain"
          />
        </motion.div>
      ))}
    </div>
  );
};

export default BrandsSection;
