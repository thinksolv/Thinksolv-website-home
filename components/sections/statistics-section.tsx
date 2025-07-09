"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig } from "../../config/site";

const FunFact = () => {
  const { title, description, stats } = siteConfig.funFact;

  return (
    <section className="px-4 py-20 md:px-8 lg:py-22.5 2xl:px-0">
      <div className="relative z-1 mx-auto max-w-c-1390 rounded-lg bg-gradient-to-t from-[#F8F9FF] to-[#DEE7FF] py-22.5 dark:bg-blacksection dark:bg-gradient-to-t dark:from-transparent dark:to-transparent xl:py-27.5">
        {/* Background Shapes */}
        <Image
          width={335}
          height={384}
          src="/shape/shape-04.png"
          alt="Man"
          className="absolute -left-15 -top-25 -z-1 lg:left-0"
        />
        <Image
          width={132}
          height={132}
          src="/shape/shape-05.png"
          alt="Doodle"
          className="absolute bottom-0 right-0 -z-1"
        />
        <Image
          fill
          src="/shape/shape-dotted-light-02.svg"
          alt="Dotted"
          className="absolute left-0 top-0 -z-1 dark:hidden"
        />
        <Image
          fill
          src="/shape/shape-dotted-dark-02.svg"
          alt="Dotted"
          className="absolute left-0 top-0 -z-1 hidden dark:block"
        />

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1 }}
          viewport={{ once: true }}
          className="mx-auto mb-12.5 px-4 text-center md:w-4/5 md:px-0 lg:mb-17.5 lg:w-2/3 xl:w-1/2"
        >
          <h2 className="mb-4 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
            {title}
          </h2>
          <p className="mx-auto lg:w-11/12 dark:text-white">{description}</p>
        </motion.div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 lg:gap-42.5">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 + index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="mb-2.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                {stat.value}
              </h3>
              <p className="text-lg lg:text-para2 dark:text-white">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FunFact;
