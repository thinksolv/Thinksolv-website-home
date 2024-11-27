"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useTheme } from "next-themes";
import Image from "next/image";
import { Menu, MenuItem, HoveredLink } from "../components/ui/navbar-menu";
import { Sun, Moon, MenuIcon, XIcon } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Header: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const { theme, setTheme } = useTheme();

  const ThemeToggler = () => (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 text-gray-500 transition-colors duration-200 rounded-full hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 dark:text-gray-400 dark:hover:bg-gray-800"
      aria-label="Toggle dark mode"
    >
      {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  );

  return (
    <header className="relative z-50 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" title="Thinksolv Technologies">
              <Image
                src="/Thinksolv Logo.png"
                alt="Thinksolv Logo"
                width={180}
                height={50}
                className="rounded"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex items-center ">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 w-[200px] lg:w-[250px]">
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="/branding" className="block p-3 rounded-md hover:bg-blue-200 dark:hover:bg-gray-800 transition">
                          Document AI
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="/interface-design" className="block p-3 rounded-md hover:bg-blue-200 dark:hover:bg-gray-800 transition">
                          Workflow Automations
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="/web-dev" className="block p-3 rounded-md hover:bg-blue-200 dark:hover:bg-gray-800 transition">
                          Appsheet Development
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="/seo" className="block p-3 rounded-md hover:bg-blue-200 dark:hover:bg-gray-800 transition">
                          Business Intelligence
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4  lg:w-[250px]">
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="https://www.docstopdf.pro" target="_blank" className="block p-3 rounded-md hover:bg-blue-200 dark:hover:bg-gray-800 transition">
                          Docs to PDF
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="https://www.pdftodocs.com" target="_blank" className="block p-3 rounded-md hover:bg-blue-200 dark:hover:bg-gray-800 transition">
                          PDF to Docs
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="https://www.docstowp.pro" target="_blank" className="block p-3 rounded-md hover:bg-blue-200 dark:hover:bg-gray-800 transition">
                          Docs to WP Pro
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="https://www.mergedocs.pro" target="_blank" className="block p-3 rounded-md hover:bg-blue-200 dark:hover:bg-gray-800 transition">
                          Merge Docs Pro
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="https://www.bulkconverter.pro" target="_blank" className="block p-3 rounded-md hover:bg-blue-200 dark:hover:bg-gray-800 transition">
                          Bulk Converter Pro
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="https://www.docstomarkdown.pro" target="_blank" className="block p-3 rounded-md hover:bg-blue-200 dark:hover:bg-gray-800 transition">
                          Docs to Markdown Pro
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <a href="/blog" className={navigationMenuTriggerStyle()}>
                    Blog
                  </a>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Right Section */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggler />
            <a
              href="#support"
              className=""
            >
              <button className="text-center px-6 py-2 font-bold rounded-md border dark:bg-gray-900 dark:border-white dark:text-white border-black bg-white text-black text-lg  hover:shadow-[5px_5px_0px_0px_rgba(0,0,0)] dark:hover:shadow-[5px_5px_0px_0px_rgba(255,255,255)] transition duration-200">
                Contact Us
              </button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-gray-500 dark:text-gray-400 focus:outline-none"
            >
              {expanded ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {expanded && (
          <nav className="md:hidden space-y-6 mt-4 px-4">
            <Menu setActive={setActive}>
              <MenuItem setActive={setActive} active={active} item="Services">
                <div className="flex flex-col space-y-2 text-sm hover:text-primary">
                  <HoveredLink href="/web-dev">Web Development</HoveredLink>
                  <HoveredLink href="/interface-design">Interface Design</HoveredLink>
                  <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
                  <HoveredLink href="/branding">Branding</HoveredLink>
                </div>
              </MenuItem>
              <MenuItem setActive={setActive} active={active} item="Products">
                <div className="grid grid-cols-1 gap-4 text-sm">
                  <HoveredLink href="https://www.docstopdf.pro" target="_blank">Docs to PDF</HoveredLink>
                  <HoveredLink href="https://www.pdftodocs.com" target="_blank">PDF to Docs</HoveredLink>
                  <HoveredLink href="https://www.docstowp.pro" target="_blank">Docs to WP Pro</HoveredLink>
                  <HoveredLink href="https://www.mergedocs.pro" target="_blank">Merge Docs Pro</HoveredLink>
                </div>
              </MenuItem>
            </Menu>
            <a href="#support">
              <button className="px-6 py-2 font-bold rounded-md border bg-white text-black hover:shadow-md transition duration-200">
                Contact Us
              </button>
            </a>
            <ThemeToggler />
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
