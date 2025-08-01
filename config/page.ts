// Centralized content and configuration for WSaaS landing page
import { FaShoppingCart, FaChartLine, FaHome, FaBullhorn, FaUsers, FaNewspaper, FaDollarSign, FaUniversity, FaCode } from 'react-icons/fa';
import { IconType } from 'react-icons';

export interface CTAButton {
  text: string
  variant: "primary" | "secondary"
  href: string
}

export interface Feature {
  id: string
  title: string
  description: string
  icon: string
  category?: string
}

export interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

export interface PricingPlan {
  id: string
  name: string
  price: {
    monthly: number
    yearly: number
  }
  description: string
  features: string[]
  popular?: boolean
  cta: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  content: string
  rating: number
  avatar: string
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface UseCase {
  heading: string;
  description: string;
  items: {
    id: string;
    title: string;
    description: string;
    tags: string[];
    icon: IconType;
  }[];
}

export interface Integration {
  id: string
  name: string
  logo: string
  category: string
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
  icon: string;
}
  

export const animationConfig = {
  fadeIn: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  },
  slideIn: {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 }
  },
  staggerChildren: {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }
};
// Hero Section Content
export const heroContent = {
  badge: "Data as a Service",
  headline: "Transform Any Content Source Into",
  highlightedText: "Actionable Data",
  subheadline: "Extract and analyze web data at scale with our enterprise-grade scraping platform.",
  primaryCTA: "/contact",
  secondaryCTA: "Watch Demo",
  // trustBadges: [
  //   "SOC 2 Certified",
  //   "GDPR Compliant",
  //   "99.9% Uptime",
  //   "24/7 Support"
  // ],
  stats: [
    { value: "10M+", label: "Pages Scraped Daily" },
    { value: "99.9%", label: "Uptime Guarantee" },
    { value: "500+", label: "Enterprise Clients" },
    { value: "24/7", label: "Expert Support" }
  ]
};

// Value Proposition
export const valueProposition = {
  title: "Why Choose Our Web Scraping Platform?",
  subtitle: "Built for scale, designed for reliability, optimized for compliance",
  comparisons: [
    {
      feature: "Setup Time",
      us: "5 minutes",
      competitors: "2-4 weeks",
      advantage: true,
    },
    {
      feature: "Success Rate",
      us: "99.9%",
      competitors: "85-90%",
      advantage: true,
    },
    {
      feature: "Proxy Management",
      us: "Automatic",
      competitors: "Manual",
      advantage: true,
    },
    {
      feature: "Compliance",
      us: "Built-in",
      competitors: "DIY",
      advantage: true,
    },
  ],
}

// How It Works Steps
export const howItWorks = {
  title: "How Web Scraper Pro Works ?",
  subtitle: "From API call to structured data in seconds",
  steps: [
    {
      id: "configure",
      number: 1,
      title: "Configure Your Request",
      description: "Define your target URLs, extraction rules, and output format through our intuitive API or dashboard",
      icon: "settings",
      details: [
        "Simple REST API integration",
        "Visual scraping rule builder",
        "Custom headers and cookies",
        "Proxy rotation settings"
      ]
    },
    {
      id: "process",
      number: 2,
      title: "AI-Powered Processing",
      description: "Our intelligent system navigates anti-bot measures, handles JavaScript, and extracts your data",
      icon: "cpu",
      details: [
        "Advanced fingerprint randomization",
        "CAPTCHA solving integration",
        "JavaScript rendering engine",
        "Smart retry mechanisms"
      ]
    },
    {
      id: "deliver",
      number: 3,
      title: "Receive Structured Data",
      description: "Get clean, structured data in your preferred format with detailed metadata and quality scores",
      icon: "download",
      details: [
        "JSON, CSV, XML output formats",
        "Real-time webhooks",
        "Data validation & cleaning",
        "Extraction confidence scores"
      ]
    }
  ],
  cta: {
    text: "Try Interactive Demo",
    variant: "primary" as const,
    href: "#demo",
    icon: "play-circle"
  }
};

// AI Features
export const Features = [  
  {
    icon: 'Sparkles',
    title: 'Custom Scrapers',
    description:
      'We build tailor-made scrapers for your exact data needs just tell us what you want to extract.',
  },
  {
    icon: 'Users',
    title: 'Built for Teams',
    description:
      'Add teammates, set roles, and collaborate seamlessly all in one workspace.',
  },
  {
    icon: 'Filter',
    title: 'Anti-bot Bypass & Proxy Rotation',
    description:
      'Advanced anti bot evasion with smart proxy rotation and custom headers to avoid blocking.',
  },
  {
    icon: 'Shield',
    title: 'Scheduled Scraping & Automation',
    description:
      'Automate scraping jobs to run hourly, daily, or weekly no manual triggers needed.',
  },
  {
    icon: 'Database',
    title: 'Clean, Structured Data Delivery',
    description:
      'Get ready-to-use data in CSV, JSON, or API with optional cleaning, formatting, and deduplication.',
  },
  {
    icon: 'Cpu',
    title: 'Smart Monitoring & Alerts',
    description:
      'Track scraping status and get notified instantly if a job fails or a source changes.',
  },
  {
    icon: 'FaFileAlt',
    title: 'PDF & Media Extraction',
    description:
      'Download PDFs, videos, and other embedded assets from websites for deeper data coverage.',
  },
  {
    icon: 'Network',
    title: 'API Integration Ready',
    description:
      'Push scraped data to your internal tools or third-party apps via REST APIs and webhooks.',
  },
];


// Use Cases
export const useCases: UseCase = {
  heading: 'Where Intelligence Turns',
  description: 'Explore the most impactful and high-demand scraping use cases across industries.',
  items: [
    {
      id: 'ecommerce',
      title: 'E-commerce Price Monitoring',
      description: 'Track competitor prices, inventory, and product info.',
      tags: ['Retail', 'Competition'],
      icon: FaShoppingCart,
    },
    {
      id: 'lead-generation',
      title: 'Lead Generation & Prospecting',
      description: 'Extract contact info and business data for sales/marketing.',
      tags: ['Sales', 'B2B'],
      icon: FaUsers,
    },
    {
      id: 'market-research',
      title: 'Market Research & Analytics',
      description: 'Get market intelligence, trends, and sentiment analysis.',
      tags: ['Research', 'Trends'],
      icon: FaChartLine,
    },
    {
      id: 'real-estate',
      title: 'Real Estate Data Collection',
      description: 'Monitor listings, prices, and trends from property platforms.',
      tags: ['Housing', 'Investment'],
      icon: FaHome,
    },
    {
      id: 'media-monitoring',
      title: 'News & Social Media Monitoring',
      description: 'Track mentions, trends, and sentiment social platforms.',
      tags: ['Media', 'Monitoring'],
      icon: FaNewspaper,
    },
    {
      id: 'financial-data',
      title: 'Financial Data Aggregation',
      description: 'Collect stock prices, reports, and market data.',
      tags: ['Finance', 'Trading'],
      icon: FaDollarSign,
    },
    {
      id: 'gov-legal',
      title: 'Legal & Government Data',
      description: 'Extract legislation, regulations, and public records.',
      tags: ['Government', 'Compliance'],
      icon: FaUniversity,
    },
    {
      id: 'ad-monitoring',
      title: 'Ad & Marketing Monitoring',
      description: 'Track ad placements, campaigns, and branding efforts.',
      tags: ['Marketing', 'Ads'],
      icon: FaBullhorn,
    },
    {
      id: 'ml-datasets',
      title: 'ML Dataset Creation',
      description: 'Scrape data to build clean, labeled ML datasets.',
      tags: ['Machine Learning', 'AI'],
      icon: FaCode,
    },
  ],
};


// Pricing Plans
export const pricingPlans: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    price: { monthly: 49, yearly: 39 },
    description: "Perfect for small projects and testing",
    features: [
      "10,000 requests/month",
      "5 concurrent scrapers",
      "Basic proxy rotation",
      "Email support",
      "Standard data exports",
      "7-day data retention",
    ],
    cta: "Start Free Trial",
  },
  {
    id: "professional",
    name: "Professional",
    price: { monthly: 199, yearly: 159 },
    description: "Ideal for growing businesses and teams",
    features: [
      "100,000 requests/month",
      "25 concurrent scrapers",
      "Advanced proxy rotation",
      "Priority support",
      "All data export formats",
      "30-day data retention",
      "API access",
      "Custom scheduling",
    ],
    popular: true,
    cta: "Start Free Trial",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: { monthly: 999, yearly: 799 },
    description: "For large-scale operations and enterprises",
    features: [
      "Unlimited requests",
      "Unlimited concurrent scrapers",
      "Premium proxy network",
      "24/7 dedicated support",
      "Custom integrations",
      "Unlimited data retention",
      "SLA guarantee",
      "On-premise deployment",
      "Custom compliance features",
    ],
    cta: "Contact Sales",
  },
]

// Testimonials
// export const testimonials: Testimonial[] = [
//   {
//     id: "sarah-chen",
//     name: "Sarah Chen",
//     role: "Head of Data",
//     company: "TechCorp Inc.",
//     content:
//       "This platform reduced our data collection time from weeks to hours. The reliability and ease of use are unmatched.",
//     rating: 5,
//     avatar: "/placeholder.svg?height=60&width=60&text=SC",
//   },
//   {
//     id: "michael-rodriguez",
//     name: "Michael Rodriguez",
//     role: "CTO",
//     company: "DataDriven Solutions",
//     content:
//       "The AI-powered features and automatic scaling have been game-changers for our business intelligence operations.",
//     rating: 5,
//     avatar: "/placeholder.svg?height=60&width=60&text=MR",
//   },
//   {
//     id: "emily-watson",
//     name: "Emily Watson",
//     role: "Research Director",
//     company: "Market Insights Pro",
//     content: "Compliance features and data quality assurance give us confidence in our market research data.",
//     rating: 5,
//     avatar: "/placeholder.svg?height=60&width=60&text=EW",
//   },
//   {
//     id: "david-kim",
//     name: "David Kim",
//     role: "VP of Engineering",
//     company: "E-commerce Analytics",
//     content: "The platform handles our massive scale requirements effortlessly. Support team is incredibly responsive.",
//     rating: 5,
//     avatar: "/placeholder.svg?height=60&width=60&text=DK",
//   },
// ]

// Security & Compliance
export const securityFeatures = {
  title: "Enterprise-Grade Security & Compliance",
  subtitle: "Built with security and compliance at its core",
  badges: [
    {
      name: "SOC 2 Type II",
      icon: "/placeholder.svg?height=80&width=80&text=SOC2",
      description: "Audited security controls",
    },
    {
      name: "GDPR Compliant",
      icon: "/placeholder.svg?height=80&width=80&text=GDPR",
      description: "European data protection",
    },
    {
      name: "ISO 27001",
      icon: "/placeholder.svg?height=80&width=80&text=ISO",
      description: "Information security management",
    },
    {
      name: "CCPA Ready",
      icon: "/placeholder.svg?height=80&width=80&text=CCPA",
      description: "California privacy compliance",
    },
  ],
  features: [
    "End-to-end encryption",
    "Role-based access control",
    "Audit logs and monitoring",
    "Data residency options",
    "Regular security assessments",
    "Incident response procedures",
  ],
}

// FAQ
export const faq = {
  title: "Frequently Asked",
  span: "Questions",
  description: "Everything you need to know about our web scraping solution.",
  items: [
    {
      question: "What is your web scraper used for?",
      answer:
        "Our web scraper automates the extraction of structured data from websites, helping businesses gather market insights, product details, pricing intelligence, and more.",
    },
    {
      question: "What data formats do you support for exports?",
      answer:
        "You can export scraped data in formats such as JSON, CSV, or directly to Google Sheets, APIs, or databases depending on your integration needs.",
    },
    {
      question: "Can I schedule scraping tasks?",
      answer:
        "Yes, our platform supports task scheduling so you can run scrapers at regular intervals—hourly, daily, or weekly—without manual intervention.",
    },
    {
      question: "Can I scrape dynamic websites with JavaScript content?",
      answer:
        "Absolutely. Our scraper can handle JavaScript-heavy sites by rendering pages with headless browser technology to capture dynamic content.",
    },
    {
      question: "Do you offer ready-made scraping templates?",
      answer:
        "Yes, we provide pre-built scraping templates for common use cases such as e-commerce sites, job boards, and real estate listings, so you can get started quickly.",
    },
    {
      question: "Can I customize the scraping logic for my needs?",
      answer:
        "Yes, we support custom scraping configurations and offer visual tools or scripting options to define exactly what and how you want to extract data.",
    },
    {
      question: "How do you handle anti-bot measures?",
      answer:
        "We use techniques such as rotating proxies, user-agent spoofing, and CAPTCHA bypass mechanisms to reduce the chance of being blocked by target websites.",
    },
  ],
}

// CTA Content
export const ctaContent = {
  main: {
    title: "Ready to Transform Your Data Collection?",
    subtitle: "Join thousands of companies already using our platform to scale their data operations",
    primaryCta: { text: "Start Free Trial", href: "#pricing" },
    secondaryCta: { text: "Schedule Demo", href: "#demo" },
  },
  sticky: {
    text: "Start Free Trial",
    href: "#pricing",
  },
}
