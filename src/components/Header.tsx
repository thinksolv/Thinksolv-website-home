'use client';
import React, { useState } from 'react';
import { MenuIcon, XIcon, Sun, Moon } from 'lucide-react';
import Image from 'next/image';
import { useTheme } from 'next-themes';

const Header: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const { theme, setTheme } = useTheme();

  const ThemeToggler = () => {
    const { theme, setTheme } = useTheme();

    return (
      <button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="p-2 text-gray-500 transition-colors duration-200 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 dark:text-gray-400 dark:hover:bg-gray-800"
        aria-label="Toggle dark mode"
      >
        {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </button>
    );
  };

  return (
    <header className="relative z-10 py-4 md:py-6 bg-white dark:bg-gray-900">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between">
          <div className="flex-shrink-0">
            <a href="#" title="" className="flex rounded outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2">
              <Image
                className="mx-auto"
                src="/Thinksolv Logo.png"
                width={200}
                height={250}
                alt="Thinksolv Logo"
              />
            </a>
          </div>

          <div className="flex md:hidden">
            <button
              type="button"
              className="text-gray-900 dark:text-white"
              onClick={() => setExpanded(!expanded)}
              aria-expanded={expanded}
            >
              {!expanded ? (
                <MenuIcon className="w-7 h-7" />
              ) : (
                <XIcon className="w-7 h-7" />
              )}
            </button>
          </div>

          <nav className="hidden md:flex md:items-center md:justify-center md:space-x-10 md:absolute md:inset-y-0 md:left-1/2 md:-translate-x-1/2 lg:space-x-16">
            <NavLink href="#products" text="Products" />
            <NavLink href="#services" text="Services" />
            <NavLink href="#" text="Blog" />
          </nav>

          <div className="hidden md:flex md:items-center md:space-x-4">
            <ThemeToggler />
            <a
              href="#support"
              title=""
              role="button"
            >
              <button className="text-center px-6 py-2 font-bold rounded-md border dark:bg-gray-900 dark:border-white dark:text-white border-black bg-white text-black text-lg  hover:shadow-[5px_5px_0px_0px_rgba(0,0,0)] dark:hover:shadow-[5px_5px_0px_0px_rgba(255,255,255)] transition duration-200">
               Contact Us
              </button>
            </a>
          </div>
        </div>

        {expanded && (
          <nav className="px-1 py-8 md:hidden">
            <div className="grid gap-y-7">
              <NavLink href="#products" text="Products" />
              <NavLink href="#services" text="Services" />
              <NavLink href="#" text="Blog" />
              <div className="flex items-center space-x-4">
                <ThemeToggler />
                <a
                  href="#supoort"
                  title=""
                  role="button"
                >
                  <button className="text-center px-6 py-2 rounded-md border dark:bg-gray-900 dark:border-white dark:text-white border-black bg-white text-black text-lg  hover:shadow-[5px_5px_0px_0px_rgba(0,0,0)] dark:hover:shadow-[5px_5px_0px_0px_rgba(255,255,255)] transition duration-200">
                Contact Us
              </button>
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

const NavLink: React.FC<{ href: string; text: string }> = ({ href, text }) => (
  <a
    href={href}
    title=""
    className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 dark:text-white dark:hover:text-opacity-75"
  >
    {text}
  </a>
);

export default Header;

