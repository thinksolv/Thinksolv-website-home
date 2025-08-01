'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from '@/config/site';
import ShinyButton from '../ui/shiny-button';
import GradientText from '../ui/gradient-text';
import DotBadge from '../ui/dotbadge';
import type { Variants } from 'framer-motion';

export default function ServiceTabs() {
  const { items, span, title, description } = siteConfig.services;
  const [activeTab, setActiveTab] = useState(items[0]?.id ?? '');
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  const handleTabChange = (id: string) => {
    const currentIndex = items.findIndex((item) => item.id === activeTab);
    const newIndex = items.findIndex((item) => item.id === id);
    setDirection(newIndex > currentIndex ? 'right' : 'left');
    setActiveTab(id);
  };

  const tabContentVariants: Variants = {
    enter: (direction: string) => ({
      x: direction === 'right' ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 }
      }
    },
    exit: (direction: string) => ({
      x: direction === 'right' ? -100 : 100,
      opacity: 0,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 }
      }
    })
  };

  const tabUnderlineVariants: Variants = {
    hidden: { scaleX: 0, originX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const featureItemVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <div className="w-full flex flex-col items-center justify-center py-14 px-4 overflow-hidden">
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="flex justify-center mb-8">
          <DotBadge label="Services" textSize="text-md" />
        </div>
        <div className="text-center max-w-4xl mb-8">
          <h2 className="text-4xl lg:text-5xl font-medium font-geist mb-7">
            {title}
            <GradientText className="mx-3">{span}</GradientText>
          </h2>
          <motion.p
            className="text-gray-600 font-geist text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            {description}
          </motion.p>
        </div>
      </motion.div>

      {/* Tabs */}
      <motion.div
        className="flex justify-center gap-16 mb-16 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        viewport={{ once: true }}
      >
        {items.slice(0, 2).map((item) => {
          const isActive = item.id === activeTab;

          return (
            <div
              key={item.id}
              className="flex flex-col items-center cursor-pointer"
              onClick={() => handleTabChange(item.id)}
            >
              <motion.span
                className={`text-xl font-medium font-geist ${isActive ? 'text-black dark:text-white' : 'text-gray-400'}`}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                {item.label}
              </motion.span>
              {isActive && (
                <motion.div
                  className="h-1 bg-secondary/50 mt-2 w-full rounded"
                  variants={tabUnderlineVariants}
                  initial="hidden"
                  animate="visible"
                  style={{ width: '100%' }}
                />
              )}
            </div>
          );
        })}
      </motion.div>

      {/* Tab Content */}
      <div className="w-full max-w-5xl min-h-[480px] mx-auto bg-white shadow-xl rounded-xl overflow-hidden border border-bordercolor">
        <AnimatePresence custom={direction}>
          {items.map((item) =>
            item.id === activeTab ? (
              <motion.div
                key={item.id}
                className="flex flex-col lg:flex-row w-full"
                custom={direction}
                variants={tabContentVariants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                {/* Left Section */}
                <motion.div
                  className="bg-black text-white px-8 py-10 lg:w-1/3 flex flex-col items-center justify-center space-y-4"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { delay: 0.1, duration: 0.3 }
                  }}
                >
                  <motion.div
                    initial={{ scale: 0.8, rotate: -15 }}
                    animate={{ scale: 1, rotate: 0 }}
                  >
                    <item.icon className="w-13 h-13 text-red-400" />
                  </motion.div>
                  <motion.span
                    className="font-semibold font-geist text-2xl text-center"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{
                      y: 0,
                      opacity: 1,
                      transition: { delay: 0.2, duration: 0.3 }
                    }}
                  >
                    {item.title}
                  </motion.span>
                </motion.div>

                {/* Right Section */}
                <motion.div
                  className="px-10 py-10 text-left flex-1"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { delay: 0.4, duration: 0.6 }
                  }}
                >
                  <motion.h2
                    className="text-3xl font-medium font-geist text-black mb-6"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{
                      y: 0,
                      opacity: 1,
                      transition: { delay: 0.5, duration: 0.6 }
                    }}
                  >
                    {item.title}
                  </motion.h2>
                  <motion.p
                    className="text-gray-600 font-medium font-geist text-lg mb-6"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{
                      y: 0,
                      opacity: 1,
                      transition: { delay: 0.6, duration: 0.6 }
                    }}
                  >
                    {item.description}
                  </motion.p>
                  <motion.ul
                    className="space-y-4 text-gray-700 text-base font-medium font-geist mb-8"
                    initial="hidden"
                    animate="visible"
                  >
                    {item.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        variants={featureItemVariants}
                        custom={idx}
                      >
                        • {feature}
                      </motion.li>
                    ))}
                  </motion.ul>
                  {item.url && (
                    <a
                      href={item.url}
                      rel="noopener noreferrer"
                      className="inline-block group"
                    >
                      <ShinyButton>
                        Learn More
                        <svg
                          className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </ShinyButton>
                    </a>
                  )}
                </motion.div>
              </motion.div>
            ) : null
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
