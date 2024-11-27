import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black overflow-hidden relative">
      <div className="container mx-auto px-4 py-8 sm:py-4 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-6 items-center">
          {/* Left Content */}
          <div className="space-y-4 sm:space-y-6 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-800 dark:text-white">
                <span className="relative inline-block">
                  Seamless Document Solutions with AI
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full transform scale-x-0 animate-expand" />
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-lg mx-auto lg:mx-0"
            >
              Experience the future of document handling with AI-driven features designed to transform your business processes.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
            >
              <button className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white rounded-lg font-medium flex items-center gap-2 transition-transform transform hover:scale-105 shadow-lg hover:shadow-xl">
                Get Started Free
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="px-4 sm:px-6 py-2 sm:py-3 bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-lg font-medium border border-gray-200 dark:border-gray-600 transition-transform transform hover:scale-105 shadow-md hover:shadow-lg">
                Watch Demo
              </button>
            </motion.div>
          </div>

          {/* Right Content (New Hero Image) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="relative w-full max-w-lg mx-auto lg:max-w-none"
          >
            <img
              src="/path/to/hero-image.jpg"
              alt="Document Solutions"
              className="object-cover w-full h-full rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
