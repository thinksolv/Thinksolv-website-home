"use client";

import { siteConfig } from "@/config/site";
import ShinyButton from '@/components/ui/shiny-button';
import SpiderWebBuilder from "@/components/sections/spider-chart";

export default function HeroSection() {
  const { hero } = siteConfig;

  return (
    <div className="w-full flex min-h-[850px] items-center justify-center bg-cover bg-center bg-white dark:bg-black">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-12 py-16 sm:py-20 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8 text-center lg:text-left">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
              {hero.title}{" "}
              <span
                className="bg-clip-text text-red-600"

              >
                {hero.highlighted}
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-500 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Empowering businesses with intelligent data &  workflows.
            </p>
          </div>

          {/* CTA Button */}
          <div className="space-y-4">
            <a href={hero.buttonHref} rel="noopener noreferrer" className="inline-block group">

              <ShinyButton>
                {hero.buttonText}
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

        {/* Right Side: Spider Animation in Box */}
        <div className="relative w-full flex items-center justify-center">
          <div className="relative w-full max-w-[500px] aspect-square mx-auto lg:mx-0">
            {/* <SpiderWebBuilder /> */}
          </div>

        </div>


      </div>
    </div>
  );
}
