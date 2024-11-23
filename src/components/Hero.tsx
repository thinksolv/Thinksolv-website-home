import React from 'react';
import Image from 'next/image';
import { Cover } from './ui/cover';
import { NeonGradientCard } from "@/components/ui/neon-gradient-card";
import ShinyButton from "@/components/ui/shiny-button";

const Hero: React.FC = () => {
  return (
    <section className="relative py-12 sm:py-16 lg:pb-40">
      <div className="absolute bottom-0 right-0 overflow-hidden">
        <img
          className="w-full h-auto origin-bottom-right transform scale-150 lg:w-auto lg:mx-auto lg:object-cover lg:scale-75"
          src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/1/background-pattern.png"
          alt=""
        />
      </div>

      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-4 lg:items-center lg:grid-cols-2 xl:grid-cols-2">
          <div className="text-center xl:col-span-1 lg:text-left md:px-16 lg:px-0 xl:pr-20">
            <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight font-pj">
              Building Solutions <Cover>Thoughtfully</Cover>
            </h1>
            {/* <p className="mt-2 text-lg text-gray-600 sm:mt-6 font-inter">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula massa in enim luctus. Rutrum arcu.
            </p> */}

            <a
              href="#services"
              title=""
              className="inline-flex px-8 py-4 mt-8 text-lg font-bold text-black "
              role="button"
            >
               <button className="inline-flex h-14 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                Learn More
                </button>
            </a>

            {/* <div className="mt-8 sm:mt-16">
              <div className="flex items-center justify-center lg:justify-start">
                {[...Array(5)].map((_, index) => (
                  <Star key={index} className="w-5 h-5 text-[#FDB241]" fill="currentColor" />
                ))}
              </div>

              <blockquote className="mt-6">
                <p className="text-lg font-bold text-gray-900 font-pj">Best code editor in market!</p>
                <p className="mt-3 text-base leading-7 text-gray-600 font-inter">
                  Consectetur adipiscing elit. Vehicula massa in enim luctus. Rutrum arcu, aliquam nulla tincidunt gravida. Cursus convallis dolor semper pretium ornare.
                </p>
              </blockquote>

              <div className="flex items-center justify-center mt-3 lg:justify-start">
                <img
                  className="flex-shrink-0 object-cover w-6 h-6 overflow-hidden rounded-full"
                  src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/1/avatar-female.png"
                  alt=""
                />
                <p className="ml-2 text-base font-bold text-gray-900 font-pj">Denny Jones</p>
              </div>
            </div> */}
          </div>

          

          <div className="flex">
  {/* Left side taking 70% of width */}
  <div className="w-[15%]">
    {/* Left side content */}
  </div>

  {/* Right side taking 30% of width */}
  <div className="w-[60%] flex justify-end">
    <NeonGradientCard className="max-w-sm items-center justify-center text-center">
      <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-6xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
        <Image
          className="mx-auto"
          src="/Google_Cloud_Partner_vr.png"
          width={300}
          height={250}
          alt=""
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

