// Centralized content and configuration for WSaaS landing page
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
  id: string
  title: string
  description: string
  thumbnail: string
  tags: string[]
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

export const svgIcons = {
  hero: `<svg viewBox="0 0 400 300" className="w-full h-full">
      <defs>
        <linearGradient id="heroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6b7280" />
          <stop offset="100%" stopColor="#9ca3af" />
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill="url(#heroGradient)" opacity="0.1" rx="12" />
      <rect x="20" y="20" width="360" height="40" fill="url(#heroGradient)" opacity="0.3" rx="8" />
      <rect x="20" y="80" width="280" height="20" fill="url(#heroGradient)" opacity="0.2" rx="4" />
      <rect x="20" y="120" width="320" height="20" fill="url(#heroGradient)" opacity="0.2" rx="4" />
      <rect x="20" y="160" width="200" height="20" fill="url(#heroGradient)" opacity="0.2" rx="4" />
      <circle cx="340" cy="140" r="30" fill="url(#heroGradient)" opacity="0.4" />
      <path d="M330 140 L340 150 L350 130" stroke="white" strokeWidth="2" fill="none" />
    </svg>`,

  wavyBackground: `<svg viewBox="0 0 1200 400" className="absolute inset-0 w-full h-full animate-wave" preserveAspectRatio="none">
      <defs>
        <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f8fafc" />
          <stop offset="50%" stopColor="#f1f5f9" />
          <stop offset="100%" stopColor="#e2e8f0" />
        </linearGradient>
        <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e2e8f0" />
          <stop offset="100%" stopColor="#cbd5e1" />
        </linearGradient>
      </defs>
      <path d="M0,100 C300,150 600,50 1200,100 L1200,400 L0,400 Z" fill="url(#waveGradient1)" opacity="0.6" className="animate-wave-slow" />
      <path d="M0,150 C400,200 800,100 1200,150 L1200,400 L0,400 Z" fill="url(#waveGradient2)" opacity="0.4" className="animate-wave-medium" />
      <path d="M0,200 C200,250 800,150 1200,200 L1200,400 L0,400 Z" fill="#f1f5f9" opacity="0.3" className="animate-wave-fast" />
    </svg>`
};  

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
  headline: "Turn Any Website Into ",
  highlightedText: "Usable Data -Instantly",
  subheadline: "Extract, monitor, and analyze web data at scale with our enterprise-grade scraping platform. Built for developers, trusted by businesses worldwide.",
  primaryCTA: "Start Free Trial",
  secondaryCTA: "Watch Demo",
  wavyBackground: svgIcons.wavyBackground,
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
// Core Features
export const coreFeatures: Feature[] = [
  {
    id: "proxy-rotation",
    title: "Smart Proxy Rotation",
    description: "Automatic proxy management with global IP pools and intelligent rotation",
    icon: `<svg viewBox="0 0 60 60" className="w-10 h-10">
      <rect width="60" height="60" rx="6" fill="#EFF6FF"/>
      <circle cx="30" cy="30" r="20" fill="none" stroke="#3B82F6" strokeWidth="2"/>
      <circle cx="30" cy="30" r="12" fill="none" stroke="#3B82F6" strokeWidth="2"/>
      <circle cx="30" cy="30" r="4" fill="#3B82F6"/>
      <circle cx="30" cy="10" r="3" fill="#3B82F6"/>
      <circle cx="50" cy="30" r="3" fill="#3B82F6"/>
      <circle cx="30" cy="50" r="3" fill="#3B82F6"/>
      <circle cx="10" cy="30" r="3" fill="#3B82F6"/>
    </svg>`,
    category: "Infrastructure",
  },
  {
    id: "anti-detection",
    title: "Anti-Detection Technology",
    description: "Advanced fingerprinting protection and human-like browsing patterns",
    icon: `<svg viewBox="0 0 60 60" className="w-10 h-10">
      <rect width="60" height="60" rx="6" fill="#F0FDF4"/>
      <path d="M30 10 L45 25 L45 45 L15 45 L15 25 Z" fill="white" stroke="#10B981" strokeWidth="2"/>
      <circle cx="30" cy="30" r="8" fill="none" stroke="#10B981" strokeWidth="2"/>
      <circle cx="30" cy="30" r="3" fill="#10B981"/>
      <path d="M25 20 L35 20" stroke="#10B981" strokeWidth="2" strokeLinecap="round"/>
      <rect x="27" y="15" width="6" height="5" rx="1" fill="#10B981"/>
    </svg>`,
    category: "Security",
  },
  {
    id: "real-time-monitoring",
    title: "Real-time Monitoring",
    description: "Live dashboards with alerts, success rates, and performance metrics",
    icon: `<svg viewBox="0 0 60 60" className="w-10 h-10">
      <rect width="60" height="60" rx="6" fill="#FEF3C7"/>
      <rect x="10" y="15" width="40" height="30" rx="4" fill="white" stroke="#F59E0B" strokeWidth="2"/>
      <path d="M15 35 L20 25 L25 30 L30 20 L35 25 L40 15 L45 20" stroke="#F59E0B" strokeWidth="2" fill="none"/>
      <circle cx="25" cy="30" r="2" fill="#F59E0B"/>
      <circle cx="35" cy="25" r="2" fill="#F59E0B"/>
      <rect x="12" y="47" width="6" height="3" rx="1" fill="#F59E0B"/>
      <rect x="20" y="47" width="6" height="3" rx="1" fill="#F59E0B"/>
      <rect x="28" y="47" width="6" height="3" rx="1" fill="#F59E0B"/>
    </svg>`,
    category: "Monitoring",
  },
  {
    id: "data-quality",
    title: "Data Quality Assurance",
    description: "Automated validation, deduplication, and data cleaning pipelines",
    icon: `<svg viewBox="0 0 60 60" className="w-10 h-10">
      <rect width="60" height="60" rx="6" fill="#F3E8FF"/>
      <rect x="15" y="10" width="30" height="40" rx="4" fill="white" stroke="#8B5CF6" strokeWidth="2"/>
      <path d="M22 20 L26 24 L35 15" stroke="#8B5CF6" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <rect x="20" y="30" width="20" height="2" rx="1" fill="#8B5CF6"/>
      <rect x="20" y="35" width="15" height="2" rx="1" fill="#CBD5E1"/>
      <rect x="20" y="40" width="18" height="2" rx="1" fill="#CBD5E1"/>
      <circle cx="45" cy="45" r="8" fill="#8B5CF6"/>
      <path d="M41 45 L44 48 L49 41" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/>
    </svg>`,
    category: "Data",
  },
  {
    id: "scalable-infrastructure",
    title: "Auto-Scaling Infrastructure",
    description: "Handle millions of requests with automatic scaling and load balancing",
    icon: `<svg viewBox="0 0 60 60" className="w-10 h-10">
      <rect width="60" height="60" rx="6" fill="#ECFDF5"/>
      <rect x="10" y="35" width="12" height="15" rx="2" fill="white" stroke="#059669" strokeWidth="2"/>
      <rect x="24" y="25" width="12" height="25" rx="2" fill="white" stroke="#059669" strokeWidth="2"/>
      <rect x="38" y="15" width="12" height="35" rx="2" fill="white" stroke="#059669" strokeWidth="2"/>
      <path d="M44 8 L44 12 M40 10 L48 10" stroke="#059669" strokeWidth="2" strokeLinecap="round"/>
      <path d="M30 18 L30 22 M26 20 L34 20" stroke="#059669" strokeWidth="2" strokeLinecap="round"/>
    </svg>`,
    category: "Infrastructure",
  },
  {
    id: "compliance-tools",
    title: "Compliance & Legal Tools",
    description: "Built-in robots.txt checking, rate limiting, and legal compliance features",
    icon: `<svg viewBox="0 0 60 60" className="w-10 h-10">
      <rect width="60" height="60" rx="6" fill="#FEF2F2"/>
      <rect x="15" y="10" width="30" height="35" rx="4" fill="white" stroke="#DC2626" strokeWidth="2"/>
      <rect x="20" y="15" width="20" height="3" rx="1" fill="#DC2626"/>
      <rect x="20" y="22" width="15" height="2" rx="1" fill="#CBD5E1"/>
      <rect x="20" y="27" width="18" height="2" rx="1" fill="#CBD5E1"/>
      <rect x="20" y="32" width="12" height="2" rx="1" fill="#CBD5E1"/>
      <circle cx="45" cy="45" r="8" fill="#DC2626"/>
      <rect x="42" y="42" width="6" height="6" rx="1" fill="white"/>
      <circle cx="45" cy="40" r="1" fill="white"/>
    </svg>`,
    category: "Compliance",
  },
]

// AI Features
export const aiFeatures: FeatureItem[] = [
  {
    icon: "sparkles",
    title: "Smart Pattern Recognition",
    description: "Automatically identifies and adapts to layout changes, reducing maintenance overhead by 90%."
  },
  {
    icon: "filter",
    title: "Intelligent Data Cleaning",
    description: "ML-powered data validation and cleaning with customizable quality rules and anomaly detection."
  },
  {
    icon: "shield",
    title: "100% Legal & Ethical",
    description: "Compliant with robots.txt and terms of service, ensuring ethical data collection."
  },
  {
    icon: "database" ,
    title: "Structured Data",
    description: "Clean, organized data delivered in your preferred format (JSON, CSV, XML)."
  },
  {
    icon: "clock" ,
    title: "Live Monitoring",
    description: "Continuous monitoring and data updates to keep your information current."
  },
  {
    icon: "" ,
    title: "Auto-scaling",
    description: "Automatically scales to handle large volumes of data extraction requests."
  },
];
// Use Cases
export const useCases: UseCase[] = [
  {
    id: "ecommerce-monitoring",
    title: "E-commerce Price Monitoring",
    description: "Track competitor prices, inventory, and product information across multiple platforms",
    thumbnail: `<svg viewBox="0 0 300 200" className="w-full h-48">
      <rect width="300" height="200" fill="#F8FAFC"/>
      <rect x="20" y="20" width="260" height="160" rx="8" fill="white" stroke="#E2E8F0" strokeWidth="2"/>
      <rect x="40" y="40" width="60" height="60" rx="4" fill="#EFF6FF" stroke="#3B82F6"/>
      <rect x="40" y="110" width="40" height="8" rx="2" fill="#3B82F6"/>
      <rect x="40" y="125" width="50" height="6" rx="2" fill="#CBD5E1"/>
      <rect x="40" y="140" width="35" height="12" rx="2" fill="#10B981"/>
      <rect x="120" y="40" width="60" height="60" rx="4" fill="#EFF6FF" stroke="#3B82F6"/>
      <rect x="120" y="110" width="40" height="8" rx="2" fill="#3B82F6"/>
      <rect x="120" y="125" width="50" height="6" rx="2" fill="#CBD5E1"/>
      <rect x="120" y="140" width="35" height="12" rx="2" fill="#EF4444"/>
      <rect x="200" y="40" width="60" height="60" rx="4" fill="#EFF6FF" stroke="#3B82F6"/>
      <rect x="200" y="110" width="40" height="8" rx="2" fill="#3B82F6"/>
      <rect x="200" y="125" width="50" height="6" rx="2" fill="#CBD5E1"/>
      <rect x="200" y="140" width="35" height="12" rx="2" fill="#F59E0B"/>
    </svg>`,
    tags: ["Retail", "Pricing", "Competition"],
  },
  {
    id: "lead-generation",
    title: "Lead Generation & Prospecting",
    description: "Extract contact information and business data for sales and marketing teams",
    thumbnail: `<svg viewBox="0 0 300 200" className="w-full h-48">
      <rect width="300" height="200" fill="#F8FAFC"/>
      <rect x="20" y="20" width="260" height="160" rx="8" fill="white" stroke="#E2E8F0" strokeWidth="2"/>
      <circle cx="80" cy="70" r="20" fill="#EFF6FF" stroke="#3B82F6" strokeWidth="2"/>
      <circle cx="80" cy="65" r="8" fill="#3B82F6"/>
      <path d="M72 75 Q80 85 88 75" stroke="#3B82F6" strokeWidth="2" fill="none"/>
      <rect x="110" y="55" width="60" height="6" rx="2" fill="#3B82F6"/>
      <rect x="110" y="65" width="80" height="4" rx="2" fill="#CBD5E1"/>
      <rect x="110" y="75" width="70" height="4" rx="2" fill="#CBD5E1"/>
      <rect x="110" y="85" width="50" height="8" rx="2" fill="#10B981"/>
      <circle cx="220" cy="70" r="20" fill="#EFF6FF" stroke="#3B82F6" strokeWidth="2"/>
      <circle cx="220" cy="65" r="8" fill="#3B82F6"/>
      <path d="M212 75 Q220 85 228 75" stroke="#3B82F6" strokeWidth="2" fill="none"/>
      <rect x="40" y="120" width="220" height="40" rx="4" fill="#F0FDF4" stroke="#10B981"/>
      <rect x="50" y="130" width="100" height="4" rx="2" fill="#10B981"/>
      <rect x="50" y="140" width="80" height="4" rx="2" fill="#10B981"/>
      <rect x="50" y="150" width="60" height="4" rx="2" fill="#10B981"/>
    </svg>`,
    tags: ["Sales", "Marketing", "B2B"],
  },
  {
    id: "market-research",
    title: "Market Research & Analytics",
    description: "Gather market intelligence, sentiment analysis, and trend data",
    thumbnail: `<svg viewBox="0 0 300 200" className="w-full h-48">
      <rect width="300" height="200" fill="#F8FAFC"/>
      <rect x="20" y="20" width="260" height="160" rx="8" fill="white" stroke="#E2E8F0" strokeWidth="2"/>
      <rect x="40" y="40" width="220" height="100" rx="4" fill="#F8FAFC" stroke="#E2E8F0"/>
      <path d="M60 120 L80 100 L100 110 L120 80 L140 90 L160 60 L180 70 L200 40 L220 50 L240 30" stroke="#3B82F6" strokeWidth="3" fill="none"/>
      <circle cx="100" cy="110" r="3" fill="#3B82F6"/>
      <circle cx="140" cy="90" r="3" fill="#3B82F6"/>
      <circle cx="180" cy="70" r="3" fill="#3B82F6"/>
      <circle cx="220" cy="50" r="3" fill="#3B82F6"/>
      <rect x="40" y="150" width="40" height="20" rx="2" fill="#10B981"/>
      <rect x="90" y="155" width="40" height="15" rx="2" fill="#F59E0B"/>
      <rect x="140" y="160" width="40" height="10" rx="2" fill="#EF4444"/>
      <rect x="190" y="150" width="40" height="20" rx="2" fill="#8B5CF6"/>
    </svg>`,
    tags: ["Analytics", "Research", "Intelligence"],
  },
  {
    id: "real-estate",
    title: "Real Estate Data Collection",
    description: "Monitor property listings, prices, and market trends across platforms",
    thumbnail: `<svg viewBox="0 0 300 200" className="w-full h-48">
      <rect width="300" height="200" fill="#F8FAFC"/>
      <rect x="20" y="20" width="260" height="160" rx="8" fill="white" stroke="#E2E8F0" strokeWidth="2"/>
      <path d="M60 80 L90 50 L120 80 L120 140 L60 140 Z" fill="#EFF6FF" stroke="#3B82F6" strokeWidth="2"/>
      <rect x="70" y="100" width="15" height="20" fill="#3B82F6"/>
      <rect x="95" y="100" width="15" height="15" fill="#3B82F6"/>
      <rect x="75" y="125" width="20" height="15" fill="#F59E0B"/>
      <path d="M140 90 L170 60 L200 90 L200 140 L140 140 Z" fill="#F0FDF4" stroke="#10B981" strokeWidth="2"/>
      <rect x="150" y="110" width="15" height="20" fill="#10B981"/>
      <rect x="175" y="110" width="15" height="15" fill="#10B981"/>
      <rect x="155" y="125" width="20" height="15" fill="#F59E0B"/>
      <path d="M220 100 L240 80 L260 100 L260 140 L220 140 Z" fill="#FEF2F2" stroke="#EF4444" strokeWidth="2"/>
      <rect x="230" y="120" width="10" height="15" fill="#EF4444"/>
      <rect x="245" y="120" width="10" height="10" fill="#EF4444"/>
      <rect x="235" y="130" width="15" height="10" fill="#F59E0B"/>
      <rect x="40" y="150" width="220" height="20" rx="4" fill="#F1F5F9"/>
      <rect x="50" y="155" width="60" height="4" rx="2" fill="#3B82F6"/>
      <rect x="120" y="155" width="50" height="4" rx="2" fill="#10B981"/>
      <rect x="180" y="155" width="40" height="4" rx="2" fill="#EF4444"/>
    </svg>`,
    tags: ["Real Estate", "Property", "Market"],
  },
  {
    id: "news-monitoring",
    title: "News & Social Media Monitoring",
    description: "Track mentions, sentiment, and trending topics across news and social platforms",
    thumbnail: `<svg viewBox="0 0 300 200" className="w-full h-48">
      <rect width="300" height="200" fill="#F8FAFC"/>
      <rect x="20" y="20" width="260" height="160" rx="8" fill="white" stroke="#E2E8F0" strokeWidth="2"/>
      <rect x="40" y="40" width="220" height="30" rx="4" fill="#EFF6FF" stroke="#3B82F6"/>
      <rect x="50" y="50" width="80" height="4" rx="2" fill="#3B82F6"/>
      <rect x="50" y="58" width="120" height="3" rx="1" fill="#CBD5E1"/>
      <rect x="40" y="80" width="100" height="25" rx="4" fill="#F0FDF4" stroke="#10B981"/>
      <rect x="45" y="87" width="40" height="3" rx="1" fill="#10B981"/>
      <rect x="45" y="93" width="60" height="2" rx="1" fill="#CBD5E1"/>
      <rect x="45" y="98" width="50" height="2" rx="1" fill="#CBD5E1"/>
      <rect x="160" y="80" width="100" height="25" rx="4" fill="#FEF2F2" stroke="#EF4444"/>
      <rect x="165" y="87" width="40" height="3" rx="1" fill="#EF4444"/>
      <rect x="165" y="93" width="60" height="2" rx="1" fill="#CBD5E1"/>
      <rect x="165" y="98" width="50" height="2" rx="1" fill="#CBD5E1"/>
      <rect x="40" y="115" width="220" height="20" rx="4" fill="#F3E8FF" stroke="#8B5CF6"/>
      <rect x="50" y="122" width="100" height="3" rx="1" fill="#8B5CF6"/>
      <rect x="50" y="128" width="80" height="2" rx="1" fill="#CBD5E1"/>
      <rect x="40" y="145" width="220" height="25" rx="4" fill="#FEF3C7" stroke="#F59E0B"/>
      <rect x="50" y="152" width="60" height="3" rx="1" fill="#F59E0B"/>
      <rect x="50" y="158" width="100" height="2" rx="1" fill="#CBD5E1"/>
      <rect x="50" y="163" width="80" height="2" rx="1" fill="#CBD5E1"/>
    </svg>`,
    tags: ["Media", "Social", "Monitoring"],
  },
  {
    id: "financial-data",
    title: "Financial Data Aggregation",
    description: "Collect stock prices, financial reports, and market data for analysis",
    thumbnail: `<svg viewBox="0 0 300 200" className="w-full h-48">
      <rect width="300" height="200" fill="#F8FAFC"/>
      <rect x="20" y="20" width="260" height="160" rx="8" fill="white" stroke="#E2E8F0" strokeWidth="2"/>
      <rect x="40" y="40" width="220" height="100" rx="4" fill="#F8FAFC" stroke="#E2E8F0"/>
      <path d="M60 120 L80 110 L100 90 L120 100 L140 80 L160 85 L180 65 L200 70 L220 50 L240 55" stroke="#10B981" strokeWidth="3" fill="none"/>
      <rect x="70" y="110" width="4" height="10" fill="#10B981"/>
      <rect x="90" y="90" width="4" height="30" fill="#10B981"/>
      <rect x="110" y="100" width="4" height="20" fill="#10B981"/>
      <rect x="130" y="80" width="4" height="40" fill="#10B981"/>
      <rect x="150" y="85" width="4" height="35" fill="#10B981"/>
      <rect x="170" y="65" width="4" height="55" fill="#10B981"/>
      <rect x="190" y="70" width="4" height="50" fill="#10B981"/>
      <rect x="210" y="50" width="4" height="70" fill="#10B981"/>
      <rect x="230" y="55" width="4" height="65" fill="#10B981"/>
      <rect x="40" y="150" width="60" height="20" rx="4" fill="#EFF6FF" stroke="#3B82F6"/>
      <rect x="50" y="157" width="20" height="6" rx="2" fill="#3B82F6"/>
      <rect x="110" y="150" width="60" height="20" rx="4" fill="#F0FDF4" stroke="#10B981"/>
      <rect x="120" y="157" width="20" height="6" rx="2" fill="#10B981"/>
      <rect x="180" y="150" width="60" height="20" rx="4" fill="#FEF2F2" stroke="#EF4444"/>
      <rect x="190" y="157" width="20" height="6" rx="2" fill="#EF4444"/>
    </svg>`,
    tags: ["Finance", "Trading", "Data"],
  },
]


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
export const testimonials: Testimonial[] = [
  {
    id: "sarah-chen",
    name: "Sarah Chen",
    role: "Head of Data",
    company: "TechCorp Inc.",
    content:
      "This platform reduced our data collection time from weeks to hours. The reliability and ease of use are unmatched.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60&text=SC",
  },
  {
    id: "michael-rodriguez",
    name: "Michael Rodriguez",
    role: "CTO",
    company: "DataDriven Solutions",
    content:
      "The AI-powered features and automatic scaling have been game-changers for our business intelligence operations.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60&text=MR",
  },
  {
    id: "emily-watson",
    name: "Emily Watson",
    role: "Research Director",
    company: "Market Insights Pro",
    content: "Compliance features and data quality assurance give us confidence in our market research data.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60&text=EW",
  },
  {
    id: "david-kim",
    name: "David Kim",
    role: "VP of Engineering",
    company: "E-commerce Analytics",
    content: "The platform handles our massive scale requirements effortlessly. Support team is incredibly responsive.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60&text=DK",
  },
]

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
export const faqItems: FaqItem[] = [
  {
    question: "How do you handle websites that frequently change their structure?",
    answer: "Our AI-powered system automatically detects layout changes and adapts extraction patterns in real-time. When changes are detected, the system learns new patterns within minutes, maintaining high success rates without manual intervention."
  },
  {
    question: "What compliance and legal protections do you provide?",
    answer: "We're SOC 2 Type II certified and GDPR compliant. Our platform includes built-in rate limiting, robots.txt respect, and legal compliance tools. We also provide detailed audit logs and can assist with compliance documentation."
  },
  {
    question: "How does pricing work for large-scale scraping?",
    answer: "Our enterprise pricing is based on your specific needs including request volume, data retention, and support requirements. We offer volume discounts and can provide custom SLAs for high-volume customers."
  },
  {
    question: "Can I integrate ScrapeStudio with my existing data pipeline?",
    answer: "Yes! We offer REST APIs, webhooks, and SDKs for 8+ programming languages. We also support direct integration with popular databases, data warehouses, and BI tools like Snowflake, BigQuery, and Tableau."
  },
  {
    question: "What kind of support do you provide?",
    answer: "We offer 24/7 technical support for Enterprise customers, priority support for Pro users, and community support for Starter plans. All plans include comprehensive documentation, tutorials, and code examples."
  }
];

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
