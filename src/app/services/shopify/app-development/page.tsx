"use client"

import { motion } from "framer-motion"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import SectionHeader from "@/components/Common/SectionHeader"
import { Card, CardContent } from "@/components/ui/card"
import AnimatedGradient from "@/components/ui/animated-gradient"
import {
  ShoppingBag,
  Palette,
  Zap,
  Code, 
  Smartphone,
  LineChart,
  ShoppingCart,
  Users,
  Wand2,
  CheckCircle2,
  Rocket,
} from "lucide-react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.02,
    },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
}

const services = [
  {
    icon: Code,
    title: "Shopify App Development",
    description: "Custom app solutions to extend your store's functionality and improve user experience.",
  },
  {
    icon: Palette,
    title: "Shopify Theme Development",
    description: "Stunning, responsive themes tailored to your brand and optimized for conversions.",
  },
  {
    icon: Zap,
    title: "Shopify Integration",
    description: "Seamless integration with third-party services and APIs to enhance your store's capabilities.",
  },
  {
    icon: Wand2,
    title: "Shopify Customization",
    description: "Tailored modifications to make your store unique and aligned with your business needs.",
  },
  {
    icon: LineChart,
    title: "Performance Optimization",
    description: "Speed up your store and improve SEO to boost conversions and user satisfaction.",
  },
  {
    icon: Smartphone,
    title: "Mobile Commerce Solutions",
    description: "Create seamless shopping experiences across all devices with mobile-first design.",
  },
]

const benefits = [
  {
    title: "Increased Sales",
    description: "Boost your conversion rates with optimized store design and functionality",
    metrics: "30%",
  },
  {
    title: "Time Saved",
    description: "Automate processes and streamline operations for efficiency",
    metrics: "50%",
  },
  {
    title: "Customer Satisfaction",
    description: "Enhance user experience leading to higher customer retention",
    metrics: "95%",
  },
  {
    title: "Scalability",
    description: "Build a robust foundation for your growing e-commerce business",
    metrics: "∞",
  },
]

const steps = [
  {
    icon: ShoppingCart,
    title: "Requirements Gathering",
    description: "We analyze your e-commerce needs and define project scope.",
  },
  {
    icon: Palette,
    title: "Design & Planning",
    description: "Our experts create a tailored Shopify solution design.",
  },
  {
    icon: Code,
    title: "Development & Testing",
    description: "We build, customize, and rigorously test your Shopify store.",
  },
  {
    icon: Rocket,
    title: "Launch & Support",
    description: "Seamless deployment with ongoing support and optimization.",
  },
]

export default function ShopifyServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <Benefits />
      <Process />
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
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="text-center">
            <motion.h1 variants={itemVariants}>
              <div className="max-w-3xl mx-auto text-center mb-10">
                <h1 className="animate-fade-up text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-white">
                  Elevate Your E-commerce with our
                  <span className="bg-gradient-to-r from-blue-600 via-blue-600 to-blue-600 bg-clip-text text-transparent">
                    {" "}
                    Shopify Services
                  </span>
                </h1>
              </div>
            </motion.h1>
            <motion.p variants={itemVariants} className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Unlock the full potential of your online store with our professional Shopify development and customization
              services.
            </motion.p>

            <motion.div variants={itemVariants} className="">
              <a href="#services">
                <button className="text-center px-6 py-2 font-bold rounded-md border dark:bg-black dark:border-white dark:text-white border-black bg-white text-black text-lg hover:shadow-[5px_5px_0px_0px_rgba(0,0,0)] dark:hover:shadow-[5px_5px_0px_0px_rgba(255,255,255)] transition duration-200">
                  Explore Our Services
                </button>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {[
              {
                icon: ShoppingBag,
                title: "Custom Solutions",
                description: "Tailor-made Shopify stores and apps for your unique needs",
              },
              {
                icon: Zap,
                title: "Rapid Development",
                description: "Quick turnaround without compromising on quality",
              },
              {
                icon: Users,
                title: "Expert Support",
                description: "Dedicated team of Shopify specialists at your service",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="group relative bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-black dark:border-white shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 dark:bg-black"
              >
                <div
                  className={`mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black text-white group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200 dark:bg-white`}
                >
                  <feature.icon className="h-6 w-6 dark:text-black" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section className="py-16 bg-white dark:bg-black" id="services">
      <SectionHeader
        headerInfo={{
          title: "Our Services",
          subtitle: "Comprehensive Shopify Solutions",
          description:
            "We offer a wide range of Shopify services to help you build, grow, and optimize your online store.",
        }}
      />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex justify-center"
            >
              <Card className="group relative w-full max-w-sm bg-white bg-card border-black dark:border-white shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-black rounded-full text-white group-hover:bg-blue-600 group-hover:text-white dark:bg-white dark:text-black">
                      <service.icon className="w-6 h-6" />
                    </div>
                    <h3 className="ml-4 text-xl font-semibold text-gray-800 dark:text-white">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Benefits() {
  return (
    <section className="py-24 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Shopify Success Metrics</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the tangible benefits of our Shopify services
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="group relative p-6 rounded-xl bg-card border border-black h-full shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                <div className="text-4xl font-bold text-black mb-4 dark:text-white group-hover:text-blue-600">
                  {benefit.metrics}
                </div>
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Process() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Shopify Development Process</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A streamlined approach to bringing your Shopify vision to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="group relative p-6 rounded-xl bg-white dark:bg-gray-800 border border-black dark:border-gray-700 h-full shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                <div className="text-4xl font-bold text-blue-600 mb-4">{index + 1}</div>
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <step.icon className="h-5 w-5 text-blue-500" />
                  {step.title}
                </h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}