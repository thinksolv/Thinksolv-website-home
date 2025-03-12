"use client"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import SectionHeader from "@/components/Common/SectionHeader"
import { Card, CardContent } from "@/components/ui/card"
import AnimatedGradient from "@/components/ui/animated-gradient"
import { Paintbrush, LayoutGrid, ShoppingCart, Zap, Users, Settings } from "lucide-react"

const features = [
  {
    icon: Paintbrush,
    title: "Theme Customization",
    description: "Tailor your Shopify theme to match your brand identity and improve user experience.",
  },
  {
    icon: LayoutGrid,
    title: "Custom Page Templates",
    description: "Create unique page layouts for product collections, landing pages, and more.",
  },
  {
    icon: ShoppingCart,
    title: "Checkout Optimization",
    description: "Streamline your checkout process to increase conversions and reduce cart abandonment.",
  },
  {
    icon: Zap,
    title: "Performance Enhancements",
    description: "Optimize your store's speed and responsiveness for a better shopping experience.",
  },
  {
    icon: Users,
    title: "User Experience Improvements",
    description: "Enhance navigation, search functionality, and overall usability of your store.",
  },
  {
    icon: Settings,
    title: "Third-party Integrations",
    description: "Seamlessly integrate external tools and services to extend your store's capabilities.",
  },
]

const customizationAreas = [
  {
    title: "Homepage Design",
    description: "Create an engaging and conversion-focused homepage that showcases your brand and products.",
  },
  {
    title: "Product Page Optimization",
    description: "Enhance product pages with custom layouts, image galleries, and upsell features.",
  },
  {
    title: "Navigation Structure",
    description: "Improve site navigation for easy browsing and product discovery.",
  },
  {
    title: "Mobile Responsiveness",
    description: "Ensure your store looks and functions perfectly on all devices.",
  },
  {
    title: "Cart and Checkout Flow",
    description: "Streamline the purchasing process to increase conversions.",
  },
  {
    title: "Custom Functionality",
    description: "Add unique features tailored to your specific business needs.",
  },
]

export default function ShopifyCustomization() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Features />
      <CustomizationAreas />
      <ProcessOverview />
      <Footer />
    </main>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="relative isolate pt-14 pb-20 dark:bg-black">
        <AnimatedGradient />
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-white">
              Shopify Store Customization
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Transform your Shopify store with tailored customizations that reflect your brand and boost conversions
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#contact"
                className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Get a Custom Quote
              </a>
              <a href="#features" className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                Explore Services <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Features() {
  return (
    <section className="py-24 bg-white dark:bg-gray-900" id="features">
      <div className="container mx-auto px-4">
        <SectionHeader
          headerInfo={{
            title: "Our Services",
            subtitle: "Comprehensive Shopify Customization",
            description:
              "We offer a wide range of customization services to enhance your Shopify store's functionality and appearance.",
          }}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white dark:bg-gray-800">
              <CardContent className="p-6">
                <feature.icon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function CustomizationAreas() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <SectionHeader
          headerInfo={{
            title: "Customization Areas",
            subtitle: "Tailored Solutions",
            description:
              "We focus on key areas of your Shopify store to create a unique and effective e-commerce experience.",
          }}
        />
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {customizationAreas.map((area, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{area.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProcessOverview() {
  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <SectionHeader
          headerInfo={{
            title: "Our Process",
            subtitle: "Customization Workflow",
            description:
              "A streamlined approach to deliver high-quality Shopify customizations tailored to your needs.",
          }}
        />
        <div className="mt-16 max-w-3xl mx-auto">
          <ol className="relative border-l border-gray-200 dark:border-gray-700">
            <li className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg
                  className="w-3.5 h-3.5 text-blue-800 dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 12"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5.917 5.724 10.5 15 1.5"
                  />
                </svg>
              </span>
              <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Discovery & Analysis</h3>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                We analyze your current store and discuss your customization goals.
              </p>
            </li>
            <li className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg
                  className="w-3.5 h-3.5 text-blue-800 dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17v1a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v1m3 12V2m-3 5h3M5 7h5m-5 4h5m-5 4h5"
                  />
                </svg>
              </span>
              <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Planning & Design</h3>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                We create a detailed plan and design mockups for your customizations.
              </p>
            </li>
            <li className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg
                  className="w-3.5 h-3.5 text-blue-800 dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 5h5M5 7h5m-5 8h5m-5-2h5m3-6h2m-2 4h2m-2 4h2M10 5h2v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v1Z"
                  />
                </svg>
              </span>
              <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Implementation</h3>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                Our experts implement the customizations, ensuring seamless integration with your existing store.
              </p>
            </li>
            <li className="ml-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg
                  className="w-3.5 h-3.5 text-blue-800 dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15.147 15.085a7.159 7.159 0 0 1-6.189 3.307A6.713 6.713 0 0 1 3.1 15.444c-2.679-4.513.287-8.737.888-9.548A4.373 4.373 0 0 0 5 1.608c1.287.953 6.445 3.218 5.537 10.5 1.5-1.122 2.706-3.01 2.853-6.14 1.433 1.049 3.993 5.395 1.757 9.117Z"
                  />
                </svg>
              </span>
              <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Testing & Launch</h3>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                We thoroughly test the customizations and work with you to launch the updated store.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </section>
  )
}

