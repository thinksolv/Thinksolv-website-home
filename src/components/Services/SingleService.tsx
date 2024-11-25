'use client';

import React, { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { Service } from "@/types/service";

const SingleService = ({ service }: { service: Service }) => {
  const [active, setActive] = useState<Service | null>(null);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  // Close modal on outside click or "Escape" key press
  useOutsideClick(ref, () => setActive(null));
  useEffect(() => {
      const onKeyDown = (event: KeyboardEvent) => {
          if (event.key === "Escape") setActive(null);
      };
      window.addEventListener("keydown", onKeyDown);
      return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
      <>
          {/* Backdrop for active modal */}
          <AnimatePresence>
              {active && (
                  <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="fixed inset-0 bg-black/40 z-10"
                  />
              )}
          </AnimatePresence>

          {/* Expanded Card Modal */}
          <AnimatePresence>
              {active && (
                  <div className="fixed inset-0 grid place-items-center z-[100]">
                      <motion.div
                          layoutId={`card-${active.title}-${id}`}
                          ref={ref}
                          className="w-full max-w-[550px] bg-white dark:white rounded-3xl overflow-hidden shadow-lg"
                      >
                          <Image
                              priority
                              width={600}
                              height={500}
                              src={active.image}
                              alt={active.title}
                              className="h-70 rounded-t-3lg"
                          />
                          <div className="p-6 bg-black dark-bg-white text-white">
                              <h3 className="text-2xl font-semibold text-white dark:text-white">
                                  {active.title}
                              </h3>
                              <p className="text-white dark:text-white mt-4">
                                  {active.description}
                              </p>
                              <a
                                  href={active.url}
                                  target="_blank"
                                  className="inline-block mt-6 "
                                  rel="noopener noreferrer"
                              >
                                  <button className="text-center px-6 py-2 font-bold rounded-md border dark:bg-gray-900 dark:border-white dark:text-white border-black bg-white text-black text-lg  hover:shadow-[5px_5px_0px_0px_rgba(0,0,0)] dark:hover:shadow-[5px_5px_0px_0px_rgba(255,255,255)] transition duration-200">
                                    Explore
                                  </button>
                              </a>
                          </div>
                      </motion.div>
                  </div>
              )}
          </AnimatePresence>

          {/* Single Service Card */}
          <motion.div
              layoutId={`card-${service.title}-${id}`}
              onClick={() => setActive(service)}
              className="cursor-pointer bg-white dark:bg-black rounded-xl shadow-md hover:shadow-lg p-4"
          >
              <Image
                  width={400}
                  height={400}
                  src={service.image}
                  alt={service.title}
                  className="h-65 rounded-sm border-black"
              />
              <h3 className="text-lg font-medium text-black dark:text-white mt-4">
                  {service.title}
              </h3>
              <p className="text-black dark:text-white mt-2">
                  {service.description}
              </p>
          </motion.div>
      </>
  );
};

export default SingleService;
