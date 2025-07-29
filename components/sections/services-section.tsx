"use client";

import Link from "next/link";
import { useState } from "react";
import ShinyButton from "../ui/shiny-button";
import DotBadge from '@/components/ui/dotbadge';
import { Globe, FileText } from "lucide-react";
import GradientText from "../ui/gradient-text";

export default function ServicesShowcase() {
  const [activeService, setActiveService] = useState(0);
  const [isToggling, setIsToggling] = useState(false);

  const services = [
    {
      id: 1,
      title: "Web Scraping Service",
      subtitle: "Intelligent Data Extraction",
      description:
        "Extract valuable data from any website with our advanced technology",
      primaryColor: "#007bbf",
      borderColor: "#d4d0d0ff",
      lightColor: "#e6f3fa",
      icon: <Globe className="w-8 h-8" />,
      link: "/services/web-scraping"
    },
    {
      id: 2,
      title: "Document AI Service",
      subtitle: "Intelligent Document Processing",
      description:
        "Transform documents into structured data using advanced AI technology",
      primaryColor: "#007bbf",
      borderColor: "#d4d0d0ff",
      lightColor: "#e6f3fa",
      icon: <FileText className="w-8 h-8" />,
      link: "/services/document-ai"
    },
  ];

  const currentService = services[activeService];

  return (
    <div className="bg-white dark:bg-black relative overflow-hidden transition-all duration-1000">
      <section className="relative py-16 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center  space-y-6">
            <DotBadge label="Services" textSize="lg:text-md" className="lg:mb-4" />
            <h1 className="text-4xl lg:text-5xl font-medium font-geist text-gray-900 dark:text-white mb-6 leading-tight">
              Areas of
              <GradientText className="ml-3">Expertise</GradientText>
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              AI-driven solutions for modern business automation
            </p>
          </div>

          {/* Service Switch Buttons */}
          <div className="flex justify-center mt-12">
            <div className="flex gap-4">
              {services.map((service, index) => (
                <button
                  key={service.id}
                  onClick={() => {
                    setIsToggling(true);
                    setTimeout(() => {
                      setActiveService(index);
                      setIsToggling(false);
                    }, 150);
                  }}
                  className={`text-lg font-medium transition-all duration-300 border-b-2 ${index === activeService
                      ? "text-black dark:text-white border-primary"
                      : "text-gray-500 border-transparent hover:border-gray-300 hover:text-black dark:hover:text-white"
                    }`}
                >
                  {service.title.includes("Web") ? "Web Scraping" : "Document AI"}
                </button>
              ))}
            </div>
          </div>

          {/* Service Card */}
          <div
            className={`relative bg-white/95 dark:bg-black backdrop-blur-xl rounded-3xl p-6 lg:p-10 transition-all duration-500 border boder-bodercolor hover:shadow-xl mt-10 ${isToggling ? "scale-95 opacity-50" : "scale-100 opacity-100"
              }`}
          >
            <div className="text-center space-y-8">
              <div className="flex justify-center">
                <div
                  className="p-6 rounded-3xl transition-all duration-500 hover:scale-110 shadow-lg"
                  style={{ backgroundColor: currentService.lightColor }}
                >
                  <div style={{ color: currentService.primaryColor }}>
                    {currentService.icon}
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h2 className="text-3xl lg:text-3xl font-medium font-geist text-gray-900 dark:text-white mb-5 transition-all duration-500">
                    {currentService.title}
                  </h2>
                  {/* <p
                    className="text-lg font-semibold tracking-wide uppercase transition-all duration-500"
                    style={{ color: currentService.primaryColor }}
                  >
                    {currentService.subtitle}
                  </p> */}
                </div>

                <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto transition-all duration-500">
                  {currentService.description}
                </p>
              </div>

              <Link href={currentService.link}>
                <ShinyButton className="mt-5">
                  Learn More
                  <svg
                    className="w-5 h-5 transition-transform duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </ShinyButton>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
