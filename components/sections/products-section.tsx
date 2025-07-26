"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionGradient from "../ui/section-gradient";
import { siteConfig } from "../../config/site";
import ShinyButton from "../ui/shiny-button";
import { IconType } from "react-icons";

interface Product {
  id: number;
  icon: IconType;
  title: string;
  description: string;
  url: string;
}

const Product = () => {
  const { title, subtitle, description, items, buttontext } = siteConfig.products;

  return (
    <section
      id="products"
      className="relative flex flex-col lg:flex-row max-w-7xl dark:bg-black mx-auto py-16 sm:py-24 px-4 sm:px-6 lg:px-8 gap-16"
    >
      {/* LEFT: Sticky Header with Abstract Shapes */}
      <div className="lg:w-1/2 relative">
        <div className="sticky top-[120px] z-10 flex flex-col gap-8 sm:gap-10">
          {/* Gradient Background Shape */}
          <SectionGradient className="-left-1/3 -top-16 md:left-15" />
          {/* Text Content */}
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white leading-tight">
              {title}
            </h2>
            <p className="mt-4 text-lg sm:text-xl text-gray-700 dark:text-gray-300 font-medium">
              {subtitle}
            </p>
            <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT: Product Cards */}
      <div className="lg:w-1/2 w-full">
        <div className="flex flex-col sm:flex-wrap sm:flex-row lg:flex-col gap-6">
          {items.map((product: Product, index) => {
            const { icon: Icon, title, description, url, id } = product;

            return (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
className="flex flex-col sm:flex-row gap-6 border border-primary dark:border-primary/50 hover:border-l-[6px] hover:border-primary rounded-2xl bg-white dark:bg-[#111] p-6 w-full shadow-md hover:shadow-lg transition-all"
              >
                {/* Icon */}
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 shrink-0">
                  <Icon className="text-3xl text-black dark:text-white" />
                </div>

                {/* Content */}
                <div className="flex flex-col">
                  <h3 className="text-xl sm:text-2xl font-semibold text-black dark:text-white">
                    {title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-2 leading-relaxed">
                    {description}
                  </p>

                  {/* Explore Button */}
                  <div className="mt-4">
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block group"
                    >
                       <ShinyButton>
                                      {buttontext}
                                      <svg
                                        className="w-5 h-5 transition-transform duration-300"
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
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Product;
