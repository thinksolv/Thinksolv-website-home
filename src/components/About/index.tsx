'use client';
import { motion } from 'framer-motion';
import Image from 'next/image'; 
import { Sparkles } from 'lucide-react';


const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section id='about'>
      <div className="relative overflow-hidden bg-gray-50 dark:bg-black  py-10 sm:py-10">
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
                Official Google Workspace™ Build Partner
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl"
            >
              A Perfect Agency for <br/>Business of All Size
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400"
            >
              Empowering businesses with innovative solutions through AppSheet development,
              workflow automation, and Document AI technologies.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
      {/* Solutions Section */}
      <div className="relative bg-gray-50 dark:bg-black py-20 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80"
                  alt="Team collaboration"
                  className="h-full w-full object-cover"
                  width={600}
                  height={450}
                  layout="responsive"
                  priority // Optimized loading
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-black dark:bg-white rounded-2xl p-6 shadow-xl">
                <p className="text-3xl font-bold text-white dark:text-black">2000+</p>
                <p className="text-blue-300">Satisfied Clients</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:pl-12"
            >
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                Reduce Work with Powerful Solutions
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-white">
                Our integrations are designed to simplify processes, enhance productivity,
                and deliver tangible results for businesses of all sizes. With our expertise
                and thoughtful approach, we help you build smarter systems that work for you.
              </p>
              <div className="mt-8 space-y-4 ">
                {[
                  'Custom workflow automation',
                  'Intelligent document processing',
                  'Seamless integration with existing systems',
                ].map((item, index) => (
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
                <a href="#support"><button className="text-center px-6 py-2 font-bold rounded-md border dark:bg-gray-900 dark:border-white dark:text-white border-black bg-white text-black text-lg  hover:shadow-[5px_5px_0px_0px_rgba(0,0,0)] dark:hover:shadow-[5px_5px_0px_0px_rgba(255,255,255)] transition duration-200">
                Get Started
              </button></a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
    
  );
}
export default About;