"use client";

import { Button } from "@/components/ui/button";
import { CreditCard } from "lucide-react";
import { siteConfig } from "@/config/site";
import SpiderWebBuilder from "@/components/sections/spider-chart";

export default function HeroSection() {
  const { hero } = siteConfig;

  return (
    <div
      className="w-full flex py-30 items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${hero.backgroundPattern})` }}
    >
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-12 py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8 text-center lg:text-left">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              {hero.title}{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: hero.gradient }}
              >
                {hero.highlighted}
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Chatbase is the complete platform for building & deploying AI support agents for your business.
            </p>
          </div>
          <div className="space-y-4">
            <Button
              className="bg-black hover:bg-gray-800 text-white px-8 py-3 text-lg font-medium rounded-lg"
              asChild
            >
              <a href={hero.buttonHref}>{hero.buttonText}</a>
            </Button>
          </div>
        </div>

        {/* Right Side: Spider Animation */}
        <div className="relative w-full h-[500px] rounded-2xl shadow-2xl">
          <SpiderWebBuilder />
        </div>
      </div>
    </div>
  );
}
