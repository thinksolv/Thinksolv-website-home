import React from 'react';
import Image from 'next/image';
import { Cover } from './ui/cover';

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
            <p className="mt-2 text-lg text-gray-600 sm:mt-6 font-inter">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula massa in enim luctus. Rutrum arcu.
            </p>

            <a
              href="#"
              title=""
              className="inline-flex px-8 py-4 mt-8 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border border-transparent rounded sm:mt-10 font-pj hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              role="button"
            >
              Try our free editor
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

          <div className="xl:col-span-1">
            <Image
              className="mx-auto"
              src="/Google_Cloud_Partner_vr.png"
              width={300}
              height={250}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

