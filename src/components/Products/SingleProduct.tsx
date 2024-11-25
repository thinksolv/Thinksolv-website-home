import React from "react";
import { Feature } from "@/types/feature";
import { motion } from "framer-motion";
//import { Meteors } from "@/components/ui/meteors"; // Import the Meteors component

const SingleProduct = ({ feature }: { feature: Feature }) => {
  const { icon: Icon, title, description, url } = feature;

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="animate_top z-40 rounded-lg border border-white bg-white p-7.5 shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-hoverdark dark:hover:bg-hoverdark xl:p-12.5 relative overflow-hidden"
    >
      {/* <Meteors number={30} /> Add the Meteors component with fewer meteors */}
      <div className="relative z-10"> {/* Wrap content in a relative z-10 div */}
        <div className="relative flex h-16 w-16 items-center justify-center rounded-[4px] bg-black text-white dark:bg-white dark:text-black">
          <Icon className="text-3xl" />
        </div>
        <h3 className="mb-5 mt-7.5 text-xl font-semibold text-black dark:text-white xl:text-itemtitle">
          {title}
        </h3>
        <p className="text-black dark:text-white">{description}</p>

        {/* Know More Button */}
        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              x: -20,
            },
            visible: {
              opacity: 1,
              x: 0,
            },
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
            <button className="border px-4 py-1 rounded-lg  border-gray-500 text-black hover:text-black dark:text-white hover:bg-white dark:hover:text-black">
            Know More
          </button>
            {/* <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                fill="currentColor"
              />
            </svg> */}
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SingleProduct;

