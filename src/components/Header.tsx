'use client';
import React, { useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
import Image from 'next/image';

const Header: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <header className="relative z-10 py-4 md:py-6">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between">
          <div className="flex-shrink-0">
            <a href="#" title="" className="flex rounded outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2">
            <Image
              className="mx-auto"
              src="/Thinksolv Logo.png"
              width={200}
              height={250}
              alt=""
            />
            </a>
          </div>

          <div className="flex md:hidden">
            <button
              type="button"
              className="text-gray-900"
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
            <NavLink href="#" text="Features" />
            <NavLink href="#" text="Pricing" />
            <NavLink href="#" text="Support" />
          </nav>

          <div className="hidden md:flex">
            <a
              href="#"
              title=""
              className="inline-flex items-center justify-center px-6 py-3 text-base font-bold leading-7 text-white transition-all duration-200 bg-gray-900 border border-transparent rounded hover:bg-gray-600 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              role="button"
            >
              Try for free
            </a>
          </div>
        </div>

        {expanded && (
          <nav className="px-1 py-8 md:hidden">
            <div className="grid gap-y-7">
              <NavLink href="#" text="Features" />
              <NavLink href="#" text="Pricing" />
              <NavLink href="#" text="Support" />
              <a
                href="#"
                title=""
                className="inline-flex items-center justify-center px-6 py-3 text-base font-bold leading-7 text-white transition-all duration-200 bg-gray-900 border border-transparent rounded hover:bg-gray-600 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                role="button"
              >
                Try for free
              </a>
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
    className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
  >
    {text}
  </a>
);

export default Header;

