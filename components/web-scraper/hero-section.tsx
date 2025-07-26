'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { heroContent, animationConfig } from '@/config/page';
import { Play, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-gray-50 to-stone-50 dark:from-[#0a0a0a] dark:via-[#111] dark:to-[#1a1a1a] overflow-hidden transition-colors duration-300">
      
      {/* Wavy Background */}
      <div className="absolute inset-0 opacity-80 dark:opacity-30">
        <svg viewBox="0 0 1200 400" className="absolute inset-0 w-full h-full animate-wave" preserveAspectRatio="none">
          <defs>
            <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="50%" stopColor="#e5e8fc" />
              <stop offset="100%" stopColor="#dbe2ff" />
            </linearGradient>
            <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e0e4ff" />
              <stop offset="100%" stopColor="#e9ecfe" />
            </linearGradient>
          </defs>
          <path d="M0,100 C300,150 600,50 1200,100 L1200,400 L0,400 Z" fill="url(#waveGradient1)" opacity="0.6" className="animate-wave-slow" />
          <path d="M0,150 C400,200 800,100 1200,150 L1200,400 L0,400 Z" fill="url(#waveGradient2)" opacity="0.4" className="animate-wave-medium" />
          <path d="M0,200 C200,250 800,150 1200,200 L1200,400 L0,400 Z" fill="#eef0ff" opacity="0.2" className="animate-wave-fast" />
        </svg>
      </div>

      {/* Background Blobs */}
      <div className="absolute inset-0 opacity-20 dark:opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-slate-200 dark:bg-slate-700 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-gray-200 dark:bg-gray-700 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-stone-200 dark:bg-stone-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 pt-20 pb-50 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column */}
          <motion.div className="space-y-8" initial="initial" animate="animate" variants={animationConfig.staggerChildren}>
            <motion.div variants={animationConfig.fadeIn}>
              <Badge className="bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700 transition-colors duration-200">
                {heroContent.badge}
              </Badge>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
              variants={animationConfig.fadeIn}
            >
              {heroContent.headline}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-gray-700 dark:from-indigo-400 dark:to-blue-500">
                {heroContent.highlightedText}
              </span>
            </motion.h1>

            <motion.p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed" variants={animationConfig.fadeIn}>
              {heroContent.subheadline}
            </motion.p>

            <motion.div className="flex flex-col sm:flex-row gap-4" variants={animationConfig.fadeIn}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-slate-600 to-gray-700 hover:from-slate-700 hover:to-gray-800 text-white dark:from-indigo-500 dark:to-blue-600 dark:hover:from-indigo-600 dark:hover:to-blue-700 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                {heroContent.primaryCTA}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-slate-300 hover:border-slate-500 text-slate-700 hover:text-slate-600 dark:border-slate-600 dark:text-white dark:hover:text-gray-200 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <Play className="mr-2 h-5 w-5" />
                {heroContent.secondaryCTA}
              </Button>
            </motion.div>

            {/* <motion.div className="flex flex-wrap gap-6" variants={animationConfig.fadeIn}>
              {heroContent.trustBadges.map((badge, index) => (
                <div key={index} className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>{badge}</span>
                </div>
              ))}
            </motion.div> */}
          </motion.div>

          {/* Right Column */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative bg-white dark:bg-[#1a1a2c] rounded-2xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-500 hover:scale-105">
              <div className="space-y-6">
                {/* Hero SVG Block */}
                <div className="w-full h-64 bg-gradient-to-br from-[#f5f7ff] to-[#e8ebff] dark:from-[#2a2e4f] dark:to-[#1c1f33] rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#6a7efc] to-[#899bff] dark:from-indigo-500 dark:to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="w-8 h-8 text-white">
                        <path
                          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-[#4a5efc] dark:text-indigo-400">Dashboard Overview</h3>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4">
                  {heroContent.stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      className="text-center p-4 bg-[#eef2ff] dark:bg-[#2d3350] rounded-lg hover:bg-[#e3e8ff] dark:hover:bg-[#3a4065] transition-colors duration-200"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="text-2xl font-bold text-black dark:text-white">{stat.value}</div>
                      <div className="text-sm text-gray-700 dark:text-gray-300">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
