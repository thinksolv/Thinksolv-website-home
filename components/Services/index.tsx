'use client';

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeader from "../Common/SectionHeader";
import { siteConfig } from "../../config/site";

const Services = () => {
  const { title, subtitle, description, items } = siteConfig.services;

  return (
    <section id="services" className="py-16 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          headerInfo={{
            title,
            subtitle,
            description,
          }}
        />

        <div className="container px-4 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 justify-center">
            {items.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative flex flex-col rounded-lg bg-white dark:bg-black shadow-md hover:shadow-lg transition-all max-w-xs mx-auto"
              >
                {/* Image */}
                <Image
                  width={300}
                  height={350}
                  src={service.image}
                  alt={service.title}
                  className="h-40 rounded-t-xl object-cover w-full"
                />

                {/* Text */}
                <div className="p-4 justify-between flex-grow dark:bg-hoverdark rounded-lg">
                  <div>
                    <h3 className="text-xl font-semibold text-black dark:text-white">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm text-black dark:text-white">
                      {service.description}
                    </p>
                  </div>

                  {/* Button */}
                  <div className="mt-6">
                    <a
                      href={service.url}
                      rel="noopener noreferrer"
                      className="inline-block"
                    >
                      <button className="text-center px-4 py-2 font-bold rounded-md border dark:bg-black dark:border-white dark:text-white border-black bg-white text-black text-lg hover:shadow-[5px_5px_0px_0px_rgba(0,0,0)] dark:hover:shadow-[5px_5px_0px_0px_rgba(255,255,255)] transition duration-200">
                        Explore
                      </button>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
