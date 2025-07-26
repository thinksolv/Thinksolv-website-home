"use client";

import { siteConfig } from "@/config/site";
import { useState } from "react";
import { CheckCircle } from "lucide-react";
import SectionGradient from "@/components/ui/section-gradient";
import Image from "next/image";

export default function Services() {
  const { title, description, items } = siteConfig.services;
  const [activeIndex, setActiveIndex] = useState(0);

  const activeService = items[activeIndex];

  return (
    <section className="max-w-7xl mx-auto py-20 px-4 sm:px-6">
      {/* Section Header */}
      <div className="relative text-center mb-16">
        <SectionGradient />
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white relative z-10">
          {title}
        </h2>
        <p className="mt-4 text-lg sm:text-xl text-gray-700 dark:text-gray-300 font-medium relative z-10 max-w-2xl mx-auto">
          {description}
        </p>
      </div>

      {/* Tabs Header */}
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10 px-2">
        {items.map((service, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`px-4 sm:px-6 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 border ${
              activeIndex === index
                ? "bg-black text-white dark:bg-white dark:text-black border-black dark:border-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 border-transparent"
            }`}
          >
            {service.title}
          </button>
        ))}
      </div>

      {/* Responsive Card */}
      <div className="w-full max-w-[850px] mx-auto rounded-2xl shadow-md border border-primary/50 dark:border-primary/50 bg-white dark:bg-[#111] overflow-hidden transition-all duration-300 flex flex-col sm:flex-col">
        {/* Image Section */}
        <div className="h-[200px] sm:h-[220px] flex items-center justify-center bg-gray-50 dark:bg-black p-4">
          <Image
            src={activeService.image}
            alt={activeService.title}
            width={250}
            height={250}
            className="rounded-md object-contain max-h-[160px] sm:max-h-[180px] w-full"
          />
        </div>

        {/* Text Section */}
        <div className="p-4 sm:p-6">
          <div className="overflow-y-auto flex flex-col gap-y-4 max-h-[300px] sm:max-h-[280px] pr-1">
            <h3 className="text-xl sm:text-2xl font-semibold text-black dark:text-white">
              {activeService.title}
            </h3>

            <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
              {activeService.description}
            </p>

            <ul className="space-y-2">
              {activeService.features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-gray-600 dark:text-gray-400 text-sm"
                >
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
