"use client";

import React from "react";
import { motion } from "framer-motion";
import { siteConfig } from "../../config/site";
import SectionHeader from "../Common/SectionHeader";
import { IconType } from "react-icons";

interface Feature {
  id: number;
  icon: IconType;
  title: string;
  description: string;
  url: string;
}

const Product = () => {
  const { title, subtitle, description, items } = siteConfig.products;

  return (
    <section
      id="products"
      className="py-10 lg:py-15 xl:py-20 bg-gray-100 dark:bg-black"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          headerInfo={{
            title,
            subtitle,
            description,
          }}
        />

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((feature: Feature) => {
            const { icon: Icon, title, description, url, id } = feature;
            return (
              <motion.div
                key={id}
                variants={{
                  hidden: { opacity: 0, y: -10 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="animate_top z-40 rounded-lg border border-white bg-white p-7.5 shadow-solid-5 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-hoverdark dark:hover:bg-hoverdark xl:p-12.5 relative overflow-hidden"
              >
                <div className="group relative z-10">
                  <div className="relative flex h-16 w-16 items-center justify-center group-hover:bg-blue-600 group-hover:text-white rounded-[4px] bg-black text-white dark:bg-white dark:text-black">
                    <Icon className="text-3xl" />
                  </div>
                  <h3 className="mb-5 mt-7.5 text-xl font-semibold text-black dark:text-white xl:text-itemtitle">
                    {title}
                  </h3>
                  <p className="text-black dark:text-white">{description}</p>

                  <motion.div
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 1, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="animate_left md:w-2/5 lg:w-1/2 mt-4"
                  >
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group mt-7.5 inline-flex items-center gap-2.5 text-white hover:text-primary dark:text-white dark:hover:text-primary"
                    >
                      <button className="text-center px-3 py-1 font-bold rounded-md border dark:bg-gray-900 dark:border-white dark:text-white border-black bg-white text-black text-lg hover:shadow-[5px_5px_0px_0px_rgba(0,0,0)] dark:hover:shadow-[5px_5px_0px_0px_rgba(255,255,255)] transition duration-200">
                        Explore
                      </button>
                    </a>
                  </motion.div>
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
