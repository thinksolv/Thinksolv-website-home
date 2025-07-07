"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";

const Footer = () => {
  const [year, setYear] = useState<number | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setYear(new Date().getFullYear());
    setIsClient(true); // Mark client render
  }, []);

  const socialIcons: Record<string, JSX.Element> = {
    linkedin: (
      <svg
        className="fill-[#D1D8E0] transition-all duration-300 hover:fill-primary"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M6.94 5C6.94 5.53 6.73 6.04 6.35 6.41C5.98 6.79 5.47 7 4.94 7C4.41 7 3.9 6.79 3.52 6.41C3.15 6.04 2.94 5.53 2.94 5C2.94 4.47 3.15 3.96 3.52 3.58C3.9 3.21 4.41 3 4.94 3C5.47 3 5.98 3.21 6.35 3.58C6.73 3.96 6.94 4.47 6.94 5ZM7 8.48H3V21H7V8.48ZM13.32 8.48H9.34V21H13.28V14.43C13.28 10.77 18.05 10.43 18.05 14.43V21H22V13.07C22 6.9 14.94 7.13 13.28 10.16L13.32 8.48Z" />
      </svg>
    ),
    twitter: (
      <svg
        className="fill-[#D1D8E0] transition-all duration-300 hover:fill-primary"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M22.16 5.66C21.4 6 20.59 6.22 19.76 6.31C20.63 5.79 21.29 4.97 21.6 4C20.78 4.49 19.88 4.83 18.94 5.01C18.31 4.34 17.48 3.89 16.57 3.74C15.66 3.59 14.73 3.75 13.92 4.18C13.1 4.62 12.46 5.31 12.08 6.15C11.7 6.99 11.61 7.93 11.82 8.83C10.16 8.75 8.53 8.31 7.04 7.56C5.56 6.81 4.25 5.75 3.2 4.46C2.83 5.1 2.63 5.82 2.63 6.56C2.63 8.01 3.37 9.29 4.49 10.04C3.83 10.02 3.18 9.84 2.6 9.52V9.57C2.6 10.54 2.93 11.47 3.54 12.22C4.16 12.97 5.01 13.48 5.95 13.67C5.34 13.84 4.69 13.86 4.06 13.74C4.33 14.58 4.85 15.3 5.55 15.82C6.25 16.35 7.1 16.63 7.97 16.65C7.1 17.33 6.11 17.83 5.05 18.13C3.98 18.43 2.87 18.51 1.78 18.38C3.69 19.61 5.92 20.26 8.19 20.26C15.88 20.26 20.09 13.89 20.09 8.36C20.09 8.18 20.08 8 20.08 7.82C20.89 7.23 21.6 6.5 22.16 5.66Z" />
      </svg>
    ),
  };

  return (
    <footer className="border-t border-stroke bg-white dark:border-strokedark dark:bg-black mt-10">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <div className="py-15">
          <div className="flex flex-wrap gap-8 lg:justify-between lg:gap-0">
            {/* Logo Section */}
            {isClient && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="w-1/2 lg:w-1/4"
              >
                <div className="flex items-center space-x-3">
                  <a href="/" title="Thinksolv Technologies" className="flex items-center">
                    <Image
                      src={siteConfig.footer.logo.src}
                      alt={siteConfig.footer.logo.alt}
                      width={60}
                      height={55}
                      className="rounded px-2"
                    />
                    <span className="text-2xl font-bold text-black dark:text-white mt-1">
                      thinksol<span className="text-red-500">v.</span>
                    </span>
                  </a>
                </div>
                <p className="mb-10 mt-5">{siteConfig.tagline}</p>
              </motion.div>
            )}

            {/* Links Section */}
            <div className="grid gap-8 w-full lg:flex lg:justify-between lg:gap-0 lg:w-2/3 xl:w-9/12 md:grid-cols-2">
              <FooterList title="Links" items={siteConfig.footer.links} isClient={isClient} />
              <FooterList title="Products" items={siteConfig.footer.products} isClient={isClient} />
              <FooterList title="Services" items={siteConfig.footer.services} isClient={isClient} />
              {/* Address */}
              {isClient && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="animate_top"
                >
                  <h4 className="mt-7 mb-4 text-itemtitle2 font-medium text-black dark:text-white">
                    Address
                  </h4>
                  <p className="mb-4 whitespace-pre-line w-[100%]">
                    {siteConfig.footer.address}
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-center gap-5 border-t border-stroke py-7 dark:border-strokedark lg:flex-row lg:justify-between">
          <p>
            &copy; {year ?? "____"} Owned and Maintained By {siteConfig.name} Ltd. All rights
            reserved.
          </p>

          {/* Social Icons */}
          <ul className="flex items-center gap-5">
            {siteConfig.footer.social.map((social) => (
              <li key={social.href}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  {socialIcons[social.icon]}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// Modified to accept `isClient` and render motion only when true
const FooterList = ({
  title,
  items,
  isClient,
}: {
  title: string;
  items: { label: string; href: string }[];
  isClient: boolean;
}) => {
  if (!isClient) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.1 }}
      className="animate_top"
    >
      <h4 className="mt-7 mb-4 text-itemtitle2 font-medium text-black dark:text-white">
        {title}
      </h4>
      <ul>
        {items.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="mb-3 inline-block hover:text-primary"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};
