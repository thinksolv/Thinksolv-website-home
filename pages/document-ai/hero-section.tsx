"use client"
import { heroContent } from "@/config/data"
import ShinyButton from "@/components/ui/shiny-button"
import GradientText from "../../components/ui/gradient-text"
// import SpiderWebBuilder from "@/components/sections/spider-chart"; // Uncomment if you want to use it

export default function HeroSection() {
  return (
    <div className="w-full flex  items-center justify-center bg-cover bg-center bg-white dark:bg-black">
      <div className="w-full max-w-7xl px-4 sm:px-8 py-24 lg:py-32 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Side - Text Content */}
        <div className="flex-1 text-center lg:text-left space-y-6">
          <h1 className="text-5xl lg:text-6xl font-medium font-geist text-gray-900 dark:text-white leading-tight">
            {heroContent.headline}
            <GradientText className=" block" gradient="from-red-600 via-red-500 to-red-600">{heroContent.highlightedText}</GradientText>
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            {heroContent.subheadline}
          </p>
          <div className="pt-2">
            <a href={heroContent.primaryCTA} rel="noopener noreferrer" className="inline-block group">
              <ShinyButton >
                {heroContent.secondaryCTA}
                <svg className="w-5 h-5 ml-2 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </ShinyButton>
            </a>
          </div>
        </div>
        {/* Right Side - Image / Spider Web / Placeholder */}
        <div className="flex-1 flex justify-center items-center">
          {/* Replace below with your image or <SpiderWebBuilder /> */}
          <div className="w-full max-w-lg aspect-square bg-gray-200 dark:bg-gray-800 rounded-xl shadow-inner">
            
          </div>
        </div>
      </div>
    </div>
  )
}
