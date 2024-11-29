'use client';

import React from "react";
import Image from "next/image";
import { Service } from "@/types/service";

const SingleService = ({ service }: { service: Service }) => {
  return (
<div
      className="group relative flex flex-col rounded-lg bg-white dark:bg-black shadow-md hover:shadow-lg transition-all max-w-xs mx-auto"
    >
      {/* Image Section */}
      <Image
        width={300} // Adjusted width for smaller cards
        height={350} // Adjusted height for smaller cards
        src={service.image}
        alt={service.title}
        className="h-40 rounded-t-xl justify-center"
      />

      {/* Text Section */}
      <div className="p-4  justify-between flex-grow dark:bg-hoverdark rounded-lg">
        <div>
          <h3 className="text-xl font-semibold text-black dark:text-white">
            {service.title}
          </h3>
          <p className="mt-2 text-sm text-black dark:text-white">{service.description}</p>
        </div>

        {/* Button Section */}
        <div className="mt-6 opacity-1">
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

      {/* Hover Overlay */}
      
    </div>
  );
};

export default SingleService;
