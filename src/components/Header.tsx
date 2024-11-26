"use client";
import React, { useState } from "react";
import { Menu, MenuItem, ProductItem, HoveredLink } from "../components/ui/navbar-menu";
import { MenuIcon, XIcon, Sun, Moon } from "lucide-react";
import Image from "next/image";
import { useTheme } from "next-themes";

const Header: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const { theme, setTheme } = useTheme();

  const ThemeToggler = () => (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 text-gray-500 transition-colors duration-200 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 dark:text-gray-400 dark:hover:bg-gray-800"
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
          <div className="hidden md:flex items-center space-x-10 border:bg-black">
            <Menu setActive={setActive}>
              <MenuItem setActive={setActive} active={active} item="Services">
                <div className="flex flex-col space-y-4 text-sm">
                  <HoveredLink href="/branding">Documnet AI</HoveredLink>
                  <HoveredLink href="/interface-design">Workflow Automations</HoveredLink>
                  <HoveredLink href="/web-dev">Appsheet Development</HoveredLink>
                  <HoveredLink href="/web-dev">Google Cloud Functions</HoveredLink>
                  <HoveredLink href="/seo">Search Engine Optimzation</HoveredLink>
                </div>
              </MenuItem>
              <MenuItem setActive={setActive} active={active} item="Products">
              <div className="flex flex-col space-y-4 text-sm ">
                <HoveredLink href="https://www.docstopdf.pro" target="_blank">Docs to PDF</HoveredLink>
                  <HoveredLink href="https://www.pdftodocs.com" target="_blank">PDF to Docs</HoveredLink>
                  <HoveredLink href="https://www.docstowp.pro" target="_blank">Docs to WP Pro</HoveredLink>
                  <HoveredLink href="https://www.mergedocs.pro" target="_blank">Merge Docs Pro</HoveredLink>
                  <HoveredLink href="https://www.bulkconverter.pro" target="_blank">Bulk Converter Pro</HoveredLink>
                  <HoveredLink href="https://www.docstomarkdown.pro" target="_blank">Docs to Markdown Pro</HoveredLink>
                </div>  
                  {/*<div className="grid grid-cols-2 gap-4 text-sm p-4"> 
                  <ProductItem
                    title="Docs to PDF"
                    href="https://www.docstopdf.pro"
                    src="/docstopdf.png"
                    description="Convert documents to PDF easily."
                  />
                  <ProductItem
                    title="PDF to Docs"
                    href="https://www.pdftodocs.com"
                    src="/pdftodocs.png"
                    description="Convert PDF to Google Docs effortlessly."
                  />
                  <ProductItem
                    title="Merge Docs Pro"
                    href="https://www.mergedocs.pro"
                    src="/mergedocs.png"
                    description="Seamlessly merge google documents."
                  />
                  <ProductItem
                    title="Bulk Converter Pro"
                    href="https://www.bulkconverter.pro"
                    src="/builkconverter.png"
                    description="Efficiently batch convert files."
                  />
                  <ProductItem
                    title="Docs to WP Pro"
                    href="https://www.docstowp.pro"
                    src="/docstowp.png"
                    description="Productive conversion from docs to WP"
                  />
                  <ProductItem
                    title="Docs to Markdown Pro"
                    href="https://www.docstomarkdown.pro"
                    src="/docstomd.png"
                    description="Convert Docs to Markdown easily."
                  /> 
                   </div>*/}
              </MenuItem>
              <MenuItem setActive={setActive} active={active} item="Blog">
                {/* <div className="flex flex-col space-y-4 text-sm">
                  {/* <HoveredLink href="/hobby">Hobby</HoveredLink>
                  <HoveredLink href="/individual">Individual</HoveredLink>
                  <HoveredLink href="/team">Team</HoveredLink>
                  <HoveredLink href="/enterprise">Enterprise</HoveredLink> 
                </div> */}
              </MenuItem>
            </Menu>
          </div>

          {/* Right Section */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggler />
            <a href="#support">
            <button className="text-center px-5 py-2 font-bold rounded-md border dark:bg-gray-900 dark:border-white dark:text-white border-black bg-white text-black text-lg  hover:shadow-[5px_5px_0px_0px_rgba(0,0,0)] dark:hover:shadow-[5px_5px_0px_0px_rgba(255,255,255)] transition duration-200">
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
                  <ProductItem
                    title="Docs to PDF"
                    href="/docs-to-pdf"
                    src="/path/to/image1.jpg"
                    description="Convert documents to PDF easily."
                  />
                  <ProductItem
                    title="Merge Docs Pro"
                    href="/merge-docs"
                    src="/path/to/image2.jpg"
                    description="Seamlessly merge documents."
                  />
                </div>
              </MenuItem>
            </Menu>
            <a href="#support">
            <button className="text-center px-6 py-2 font-bold rounded-md border dark:bg-gray-900 dark:border-white dark:text-white border-black bg-white text-black text-lg  hover:shadow-[5px_5px_0px_0px_rgba(0,0,0)] dark:hover:shadow-[5px_5px_0px_0px_rgba(255,255,255)] transition duration-200">
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
