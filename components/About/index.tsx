"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles } from "lucide-react";
import { siteConfig } from "../../config/site";

const About = () => {
  const { about } = siteConfig;

  return (
    <div>
      {/* Hero Section */}
      <section id="about">
        <div className="relative overflow-hidden bg-gray-50 dark:bg-black py-10 sm:py-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
          >
            <div className="text-center">
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="flex justify-center mb-8"
              >
                <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  <Sparkles className="h-4 w-4 mr-2" />
                  {about.heroBadge.text}
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl"
              >
                {about.heading}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400"
              >
                {about.subheading}
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions Section */}
      <div className="relative bg-gray-50 dark:bg-black py-20 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src={about.solutions.image.src}
                  alt={about.solutions.image.alt}
                  className="h-full w-full object-cover"
                  width={about.solutions.image.width}
                  height={about.solutions.image.height}
                  layout="responsive"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-black dark:bg-white rounded-2xl p-6 shadow-xl">
                <p className="text-3xl font-bold text-white dark:text-black">
                  {about.solutions.stat.value}
                </p>
                <p className="text-blue-300">{about.solutions.stat.label}</p>
              </div>
            </motion.div>

            {/* Right */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:pl-12"
            >
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                {about.solutions.heading}
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-white">
                {about.solutions.description}
              </p>

              <div className="mt-8 space-y-4">
                {about.solutions.points.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <div className="h-2 w-2 rounded-full bg-blue-600" />
                    <p className="text-gray-700 dark:text-white">{item}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                viewport={{ once: true }}
                className="mt-10"
              >
                <a href={about.solutions.ctaHref}>
                  <button className="text-center px-6 py-2 font-bold rounded-md border dark:bg-gray-900 dark:border-white dark:text-white border-black bg-white text-black text-lg hover:shadow-[5px_5px_0px_0px_rgba(0,0,0)] dark:hover:shadow-[5px_5px_0px_0px_rgba(255,255,255)] transition duration-200">
                    {about.solutions.ctaText}
                  </button>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
