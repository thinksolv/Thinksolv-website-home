"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import {
  MenuIcon,
  XIcon,
  ChevronDown,
  Settings,
  Package,
  BookOpen,
  Phone,
  Sun,
  Moon,
} from "lucide-react"

import MobileNav from "../../components/MobileNav"
import { siteConfig } from "../../config/site"
import {
  temVariants,
  backVariants,
  glowVariants,
  dropdownVariants,
  sharedTransition,
} from "../../lib/framer-animations"
import { cn } from "../../lib/utils"

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()

  return (
    <motion.button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label="Toggle Theme"
      className="p-2 rounded-md border dark:border-white border-black hover:bg-accent/30 transition"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 text-white" />
      ) : (
        <Moon className="h-5 w-5 text-black" />
      )}
    </motion.button>
  )
}

const AnimatedMenuItem = ({
  children,
  icon,
  href,
  hasDropdown = false,
  dropdownItems = [],
  iconColor,
  gradient,
  dropdownKey,
}: {
  children: React.ReactNode
  icon?: React.ReactNode
  href?: string
  hasDropdown?: boolean
  dropdownItems?: Array<{ label: string; href: string }>
  iconColor?: string
  gradient?: string,
  dropdownKey?: string
}) => {
  const [isHovered, setIsHovered] = useState(false)
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const handleMouseEnter = () => {
    if (timeoutId) {
      clearTimeout(timeoutId)
      setTimeoutId(null)
    }
    setIsHovered(true)
    if (hasDropdown && dropdownKey) setActiveDropdown(dropdownKey)
  }

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setIsHovered(false)
      setActiveDropdown(null)
    }, 200)
    setTimeoutId(id)
  }

  return (
    <motion.div
      className="relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.a
        href={href}
        className={cn(
          "flex items-center gap-3 px-5 py-2 rounded-xl transition-all duration-300",
          isHovered && iconColor ? `${iconColor} text-foreground` : "text-foreground/80"
        )}
        whileHover={{ scale: 1.05 }}
      >
        {icon && (
          <span
            className={cn(
              "transition-colors duration-300",
              isHovered && iconColor ? iconColor : "text-foreground/60"
            )}
          >
            {icon}
          </span>
        )}
        <span className="font-medium transition">{children}</span>
        {hasDropdown && (
          <motion.div
            animate={{ rotate: isHovered ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="h-4 w-4" />
          </motion.div>
        )}
      </motion.a>

      {hasDropdown && activeDropdown === dropdownKey && (
        <motion.div
          className="absolute top-full left-0 mt-3 w-72 bg-background/95 backdrop-blur-xl border border-border/50 rounded-2xl shadow-2xl z-50 overflow-hidden"
          variants={dropdownVariants}
          transition={sharedTransition}
          initial="initial"
          animate="hover"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="divide-y divide-border/40">
            {dropdownItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                className="flex items-center justify-between px-4 py-3 gap-2 text-muted-foreground hover:text-foreground group transition-colors duration-300"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                whileHover={{
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  x: 5,
                }}
              >
                <div className="flex items-center gap-2">
                  <motion.div className="w-2 h-2 rounded-full bg-current opacity-0 group-hover:opacity-100 transition duration-200" />
                  <span className="text-sm font-medium group-hover:font-semibold transition">
                    {item.label}
                  </span>
                </div>
                {dropdownKey === "products" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14 3h7m0 0v7m0-7L10 14"
                    />
                  </svg>
                )}
              </motion.a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.div>
  )
}


const Header = () => {
  const [expanded, setExpanded] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-100",
        scrolled ? "bg-background/80 backdrop-blur-md border-b" : "bg-transparent border-b",
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <motion.div
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <a href="/" title={siteConfig.name} className="flex items-center">
              <Image
                src={siteConfig.logo.src || "/placeholder.svg"}
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
          </motion.div>

          <motion.nav
            className="hidden md:flex items-center gap-4 p-3 rounded-3xl bg-gradient-to-r from-background/60 via-background/40 to-background/60 backdrop-blur-xl border border-border/30 shadow-xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <AnimatedMenuItem
              icon={<Settings className="h-5 w-5" />}
              hasDropdown
              dropdownItems={siteConfig.nav.services}
              gradient="radial-gradient(circle, rgba(34,197,94,0.2) 0%, rgba(22,163,74,0.1) 50%, rgba(21,128,61,0) 100%)"
              iconColor="text-green-500"
              dropdownKey="services"
            >
              Services
            </AnimatedMenuItem>

            <AnimatedMenuItem
              icon={<Package className="h-5 w-5" />}
              hasDropdown
              dropdownItems={siteConfig.nav.products}
              gradient="radial-gradient(circle, rgba(249,115,22,0.2) 0%, rgba(234,88,12,0.1) 50%, rgba(194,65,12,0) 100%)"
              iconColor="text-orange-500"
              dropdownKey="products"
            >
              Products
            </AnimatedMenuItem>

            <AnimatedMenuItem
              icon={<BookOpen className="h-5 w-5" />}
              href={siteConfig.nav.blog.href}
              gradient="radial-gradient(circle, rgba(239,68,68,0.2) 0%, rgba(220,38,38,0.1) 50%, rgba(185,28,28,0) 100%)"
              iconColor="text-red-500"
            >
              {siteConfig.nav.blog.label}
            </AnimatedMenuItem>
            <AnimatedMenuItem
              icon={<Phone className="h-5 w-5" />}
              href={siteConfig.nav.contact.href}
              gradient="radial-gradient(circle, rgba(239,68,68,0.2) 0%, rgba(220,38,38,0.1) 50%, rgba(185,28,28,0) 100%)"
              iconColor="text-blue-500"
            >
              {siteConfig.nav.contact.label}
            </AnimatedMenuItem>
          </motion.nav>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            {/* <a href={siteConfig.nav.contact.href} className="hidden md:block">
              <motion.button
                className="text-center px-6 py-2 font-bold rounded-md border dark:bg-black dark:border-white dark:text-white border-black bg-white text-black text-lg hover:shadow-[5px_5px_0px_0px_rgba(0,0,0)] dark:hover:shadow-[5px_5px_0px_0px_rgba(255,255,255)] transition duration-200"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {siteConfig.nav.contact.label}
              </motion.button>
            </a> */}
            <motion.button
              onClick={() => setExpanded(!expanded)}
              className="md:hidden text-gray-500 dark:text-gray-400 focus:outline-none"
              aria-label="Toggle mobile menu"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {expanded ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
        <MobileNav expanded={expanded} setExpanded={setExpanded} />
      </div>
    </header>
  )
}

export default Header
