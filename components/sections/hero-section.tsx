"use client";

import React from "react";
import Image from "next/image";
import { siteConfig } from "../../config/site";
import { NeonGradientCard } from "../../components/ui/neon-gradient-card";

const MainHero: React.FC = () => {
  const { hero } = siteConfig;

  return (
    <section className="relative py-12 sm:py-16 lg:pb-40 bg-white dark:bg-black transition-colors duration-200">
      {/* Background pattern */}
      <div className="absolute bottom-0 right-0 overflow-hidden">
        <img
          className="w-full h-auto origin-bottom-right transform scale-150 lg:w-auto lg:mx-auto lg:object-cover lg:scale-75 opacity-50 dark:opacity-10 transition-opacity duration-200"
          src={hero.backgroundPattern}
          alt="Background pattern"
        />
      </div>

      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-12 lg:items-center lg:grid-cols-2 xl:grid-cols-2 mt-20">
          {/* Hero text */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold leading-tight text-gray-900 dark:text-white sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight font-pj transition-colors duration-200">
              {hero.title}{" "}
              <span
                style={{
                  background: hero.gradient,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  opacity: 0.75,
                }}
              >
                {hero.highlighted}
              </span>
            </h1>

            <a href={hero.buttonHref} className="inline-flex px-8 py-4 mt-8 text-lg">
              <button className="text-center px-6 py-2 font-bold rounded-md border dark:bg-black dark:border-white dark:text-white border-black bg-white text-black text-lg hover:shadow-[5px_5px_0px_0px_rgba(0,0,0)] dark:hover:shadow-[5px_5px_0px_0px_rgba(255,255,255)] transition duration-200">
                {hero.buttonText}
              </button>
            </a>
          </div>

          {/* Hero logos */}
          <div className="flex flex-row items-center justify-center space-x-10">
            {hero.partners.map((partner, idx) => (
              <NeonGradientCard
                key={idx}
                size={250}
                className="flex items-center justify-center"
              >
                <div className="flex items-center justify-center w-full h-full">
                  <Image
                    className="object-cover rounded-full"
                    src={partner.src}
                    width={partner.width}
                    height={partner.height}
                    alt={partner.alt}
                  />
                </div>
              </NeonGradientCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainHero;