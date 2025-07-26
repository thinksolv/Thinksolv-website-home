"use client"

import { useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import {
  Globe,
  Database,
  Zap,
  CodeXml,
  Shield,
  Clock,
  CheckCircle,
  ArrowRight,
  Star,
  Users,
  TrendingUp,
  Code,
  Server,
  Filter,
  Download,
  Target,
  RefreshCw,
} from "lucide-react"
import { Button } from "../../components/ui/button"
import { Card, CardContent } from "../../components/ui/card"
import HeroSpiderChart from "../../components/sections/hero-spider-chart"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
}

const features = [
  // {
  //   icon: <Globe className="h-6 w-6" />,
  //   title: "Global Data Access",
  //   description: "Extract data from any website worldwide with our advanced scraping technology.",
  // },
  // {
  //   icon: <Zap className="h-6 w-6" />,
  //   title: "Lightning Fast",
  //   description: "High-performance scraping with concurrent processing for maximum efficiency.",
  // },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "100% Legal & Ethical",
    description: "Compliant with robots.txt and terms of service, ensuring ethical data collection.",
  },
  {
    icon: <Database className="h-6 w-6" />,
    title: "Structured Data",
    description: "Clean, organized data delivered in your preferred format (JSON, CSV, XML).",
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Live Monitoring",
    description: "Continuous monitoring and data updates to keep your information current.",
  },
  {
    icon: <RefreshCw className="h-6 w-6" />,
    title: "Auto-scaling",
    description: "Automatically scales to handle large volumes of data extraction requests.",
  },
]

const processSteps = [
  {
    icon: <Target className="h-8 w-8" />,
    title: "Target Analysis",
    description: "We analyze your target websites and identify the best scraping approach.",
  },
  {
    icon: <Code className="h-8 w-8" />,
    title: "Custom Development",
    description: "Build tailored scrapers optimized for your specific data requirements.",
  },
  {
    icon: <Server className="h-8 w-8" />,
    title: "Infrastructure Setup",
    description: "Deploy robust, scalable infrastructure to handle your scraping needs.",
  },
  {
    icon: <Filter className="h-8 w-8" />,
    title: "Data Processing",
    description: "Clean, validate, and structure the extracted data for immediate use.",
  },
  {
    icon: <Download className="h-8 w-8" />,
    title: "Delivery & Integration",
    description: "Deliver data through APIs, databases, or direct file transfers.",
  },
]

// const testimonials = [
//   {
//     name: "Sarah Johnson",
//     company: "TechCorp Inc.",
//     role: "Data Analyst",
//     content:
//       "Their web scraping service transformed our market research capabilities. We now have access to real-time competitor data.",
//     rating: 5,
//   },
//   {
//     name: "Michael Chen",
//     company: "E-commerce Solutions",
//     role: "CTO",
//     content:
//       "Exceptional service quality and reliability. The data accuracy is outstanding and delivery is always on time.",
//     rating: 5,
//   },
//   {
//     name: "Emily Rodriguez",
//     company: "Market Insights",
//     role: "Research Director",
//     content:
//       "Professional team with deep technical expertise. They handled our complex scraping requirements flawlessly.",
//     rating: 5,
//   },
// ]

// const pricingPlans = [
//   {
//     name: "Starter",
//     price: "$99",
//     period: "/month",
//     description: "Perfect for small businesses and startups",
//     features: ["Up to 10,000 pages/month", "5 websites", "Basic data formats", "Email support", "Weekly updates"],
//   },
//   {
//     name: "Professional",
//     price: "$299",
//     period: "/month",
//     description: "Ideal for growing businesses",
//     features: [
//       "Up to 100,000 pages/month",
//       "25 websites",
//       "All data formats",
//       "Priority support",
//       "Daily updates",
//       "API access",
//     ],
//     popular: true,
//   },
//   {
//     name: "Enterprise",
//     price: "Custom",
//     period: "",
//     description: "For large-scale operations",
//     features: [
//       "Unlimited pages",
//       "Unlimited websites",
//       "Custom integrations",
//       "24/7 dedicated support",
//       "Real-time updates",
//       "SLA guarantee",
//     ],
//   },
// ]

export default function WebScrapingService() {
  const [activeStep, setActiveStep] = useState(0)
  const heroRef = useRef(null)
  const featuresRef = useRef(null)
  const processRef = useRef(null)
  const pricingRef = useRef(null)

  const heroInView = useInView(heroRef, { once: true })
  const featuresInView = useInView(featuresRef, { once: true })
  const processInView = useInView(processRef, { once: true })
  const pricingInView = useInView(pricingRef, { once: true })

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % processSteps.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section ref={heroRef} className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white dark:from-red-950/20 dark:to-purple-950/20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div initial="initial" animate={heroInView ? "animate" : "initial"} variants={staggerContainer}>
              <motion.div
                className="inline-flex items-center gap-2 bg-white dark:bg-red-900/30 text-red-700 dark:text-red-300 px-4 py-2 rounded-full text-sm font-medium mb-6"
                variants={fadeInUp}
              >
                <Zap className="h-4 w-4" />
                Data as a Service
              </motion.div>

              <motion.h1
                className="text-4xl md:text-5---xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent"
                variants={fadeInUp}
              >
                Turn Any Website Into Usable Data
                <span className="block text-red-600 dark:text-red-400">- Instantly</span>
              </motion.h1>

              <motion.p className="text-xl text-muted-foreground mb-8 leading-relaxed" variants={fadeInUp}>
                Transform any website into clean, structured data with our enterprise-grade web scraping solutions.
              
              </motion.p>

              <motion.div className="flex flex-col sm:flex-row gap-4 mb-8" variants={fadeInUp}>
                <Button size="lg" className="px-8 py-3 bg-gradient-to-r from-green-600 to-blue-400 text-lg">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="px-8 py-3 text-lg bg-transparent">
                  View Demo
                </Button>
              </motion.div>

              {/* <motion.div className="flex items-center gap-8 text-sm text-muted-foreground" variants={fadeInUp}>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  99.9% Uptime
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  GDPR Compliant
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  24/7 Support
                </div>
              </motion.div> */}
            </motion.div>

            {/* Right Content - Hero Spider Chart */}
            <motion.div
              className="flex justify-center"
              initial="initial"
              animate={heroInView ? "animate" : "initial"}
              variants={scaleIn}
            >
              <HeroSpiderChart />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              { number: "112+", label: "Websites Supported", icon: <Globe className="h-6 w-6" /> },
              { number: "100%", label: "No Code Setup", icon: <CodeXml className="h-6 w-6" /> },
              { number: "99.8%", label: "Success Rate", icon: <TrendingUp className="h-6 w-6" /> },
              { number: "24/7", label: "Support", icon: <Clock className="h-6 w-6" /> },
            ].map((stat, index) => (
              <motion.div key={index} className="text-center" variants={scaleIn}>
                <div className="flex justify-center mb-2 text-red-600 dark:text-red-400">{stat.icon}</div>
                <div className="text-3xl font-bold mb-1">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* Features Section */}
      <section ref={featuresRef} className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            animate={featuresInView ? "animate" : "initial"}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold mb-4">Why Choose Our Web Scraping Service?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Advanced technology meets professional service to deliver unmatched data extraction capabilities.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="initial"
            animate={featuresInView ? "animate" : "initial"}
            variants={staggerContainer}
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={scaleIn}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50/50 dark:from-gray-900 dark:to-gray-800/50">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg text-red-600 dark:text-red-400">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-semibold">{feature.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section with Spider Chart */}
      <section ref={processRef} className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            animate={processInView ? "animate" : "initial"}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold mb-4">Our Scraping Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A systematic approach to deliver high-quality data extraction results.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Process Steps */}
            <motion.div
              className="space-y-6"
              initial="initial"
              animate={processInView ? "animate" : "initial"}
              variants={staggerContainer}
            >
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className={`flex gap-4 p-4 rounded-lg transition-all duration-500 ${
                    activeStep === index
                      ? "bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500"
                      : "hover:bg-muted/50"
                  }`}
                  variants={fadeInUp}
                >
                  <div
                    className={`p-2 rounded-lg transition-colors duration-300 ${
                      activeStep === index ? "bg-red-500 text-white" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {/* <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground">
              Trusted by businesses worldwide for reliable data extraction.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={scaleIn}>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 italic">"{testimonial.content}"</p>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role} at {testimonial.company}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing */}
      {/* <section ref={pricingRef} className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            animate={pricingInView ? "animate" : "initial"}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-muted-foreground">Choose the plan that fits your data extraction needs.</p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
            initial="initial"
            animate={pricingInView ? "animate" : "initial"}
            variants={staggerContainer}
          >
            {pricingPlans.map((plan, index) => (
              <motion.div key={index} variants={scaleIn}>
                <Card className={`h-full relative ${plan.popular ? "ring-2 ring-red-500" : ""}`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-red-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                      <div className="mb-2">
                        <span className="text-4xl font-bold">{plan.price}</span>
                        <span className="text-muted-foreground">{plan.period}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{plan.description}</p>
                    </div>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full " variant={plan.popular ? "default" : "outline"}>
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold mb-6">Start your scraping with us</h2>
            <p className="text-lg text-muted-foreground mb-8">
          We handle projects of any size with full compliance. Need something custom? Contact us 
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8 bg-primary/70 py-3 text-lg">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3 text-lg bg-transparent">
                Talk to Sales
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
