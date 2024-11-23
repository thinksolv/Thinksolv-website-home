import React from 'react';
import Image from 'next/image';
import { Cover } from "@/components/ui/cover";
import { NeonGradientCard } from "@/components/ui/neon-gradient-card";

const Hero: React.FC = () => {
  return (
    <section className="relative py-12 sm:py-16 lg:pb-40 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="absolute bottom-0 right-0 overflow-hidden">
        <img
          className="w-full h-auto origin-bottom-right transform scale-150 lg:w-auto lg:mx-auto lg:object-cover lg:scale-75 opacity-50 dark:opacity-10 transition-opacity duration-200"
          src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/1/background-pattern.png"
          alt=""
        />
      </div>

      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-4 lg:items-center lg:grid-cols-2 xl:grid-cols-2">
          <div className="text-center xl:col-span-1 lg:text-left md:px-16 lg:px-0 xl:pr-20">
            <h1 className="text-4xl font-bold leading-tight text-gray-900 dark:text-white sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight font-pj transition-colors duration-200">
              Building Solutions 
              <Cover>Thoughtfully</Cover>
            </h1>
        
            <a
              href="#services"
              title=""
              className="inline-flex px-8 py-4 mt-8 text-lg"
              role="button"
            >
              <button className="text-center px-6 py-2 font-bold rounded-md border dark:bg-gray-900 dark:border-white dark:text-white border-black bg-white text-black text-lg  hover:shadow-[5px_5px_0px_0px_rgba(0,0,0)] dark:hover:shadow-[5px_5px_0px_0px_rgba(255,255,255)] transition duration-200">
                Learn More
              </button>
            </a>
          </div>

          <div className="flex">
            <div className="w-[20%]">
              {/* Left side content */}
            </div>

            <div className="w-[60%] flex justify-end">
              <NeonGradientCard className="max-w-sm items-center justify-center text-center">
                <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#3b82f6] from-35% to-[#10b981] bg-clip-text text-center text-6xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
                  <Image
                    className="mx-auto"
                    src="/Google_Cloud_Partner_vr.png"
                    width={300}
                    height={250}
                    alt="Google Cloud Partner"
                  />
                </span>
              </NeonGradientCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

