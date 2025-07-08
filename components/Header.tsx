"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { Sun, Moon, MenuIcon, XIcon } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../components/ui/navigation-menu";
import MobileNav from "./MobileNav";
import { siteConfig } from "../config/site";

const Header: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setMounted(true);
    const updateTheme = () => {
      const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const currentTheme = theme === "system" ? (systemDark ? "dark" : "light") : theme;
      setIsDarkMode(currentTheme === "dark");
    };
    updateTheme();
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", updateTheme);
    return () => mediaQuery.removeEventListener("change", updateTheme);
  }, [theme]);

  const ThemeToggler = () => {
    if (!mounted) return null;
    return (
      <button
        onClick={() => setTheme(isDarkMode ? "light" : "dark")}
        className="p-2 text-gray-500 transition-colors duration-200 rounded-full hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 dark:text-gray-400 dark:hover:bg-gray-800"
        aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </button>
    );
  };

  return (
    <header className="relative z-50 bg-white dark:bg-black py-3">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3">
            <a href="/" title={siteConfig.name} className="flex items-center">
              <Image
                src={siteConfig.logo.src}
                alt={siteConfig.logo.alt}
                width={siteConfig.logo.width}
                height={siteConfig.logo.height}
                className="rounded px-2"
              />
              <span className="text-2xl font-bold text-black dark:text-white mt-1">
                {siteConfig.brandText.main}
                <span className="text-red-500">{siteConfig.brandText.highlight}</span>
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex items-center">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 w-[200px] lg:w-[250px]">
                    {siteConfig.nav.services.map((item, index) => (
                      <li key={index}>
                        <NavigationMenuLink asChild>
                          <a href={item.href} className="block p-3 rounded-md hover:bg-blue-200 dark:hover:bg-gray-800 transition">
                            {item.label}
                          </a>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 lg:w-[250px]">
                    {siteConfig.nav.products.map((item, index) => (
                      <li key={index}>
                        <NavigationMenuLink asChild>
                          <a href={item.href} target="_blank" rel="noopener noreferrer" className="block p-3 rounded-md hover:bg-blue-200 dark:hover:bg-gray-800 transition">
                            {item.label}
                          </a>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <a href={siteConfig.nav.blog.href} className={navigationMenuTriggerStyle()}>
                    {siteConfig.nav.blog.label}
                  </a>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            <ThemeToggler />
            <a href={siteConfig.nav.contact.href} className="hidden md:block">
              <button className="text-center px-6 py-2 font-bold rounded-md border dark:bg-black dark:border-white dark:text-white border-black bg-white text-black text-lg hover:shadow-[5px_5px_0px_0px_rgba(0,0,0)] dark:hover:shadow-[5px_5px_0px_0px_rgba(255,255,255)] transition duration-200">
                {siteConfig.nav.contact.label}
              </button>
            </a>
            <button
              onClick={() => setExpanded(!expanded)}
              className="md:hidden text-gray-500 dark:text-gray-400 focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {expanded ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <MobileNav expanded={expanded} setExpanded={setExpanded} />
      </div>
    </header>
  );
};

export default Header;
