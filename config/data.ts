import { FaShoppingCart, FaChartLine, FaHome, FaBullhorn, FaUsers, FaNewspaper, FaDollarSign, FaUniversity, FaCode } from 'react-icons/fa';
import { IconType } from 'react-icons';
import { title } from 'process';

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

export const heroContent = {
  badge: "AI Document Intelligence",
  headline: "Turn Any Documents Into",
  highlightedText: "Intelligent Insights",
  subheadline: "Automate document processing with our enterprise-grade solutions.",
  primaryCTA: "/contact",
  secondaryCTA: "Watch Demo",
  stats: [
    { value: "1B+", label: "Documents Processed" },
    { value: "99.9%", label: "Accuracy Guarantee" },
    { value: "500+", label: "Enterprise Clients" },
    { value: "24/7", label: "Expert Support" }
  ]
};

export const valueProposition = {
  title: "Why Choose Our Document AI Platform?",
  subtitle: "Fast, accurate, and scalable document understanding",
  comparisons: [
    {
      feature: "Setup Time",
      us: "5 minutes",
      competitors: "2-4 weeks",
      advantage: true,
    },
    {
      feature: "Accuracy Rate",
      us: "99.9%",
      competitors: "85-90%",
      advantage: true,
    },
    {
      feature: "Custom Templates",
      us: "Auto-generated",
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

export const howItWorks = {
  title: "How Document AI Works",
  subtitle: "From upload to structured data in seconds",
  steps: [
    {
      id: "upload",
      number: 1,
      title: "Upload or Ingest Documents",
      description: "Send scanned or digital documents via API, UI, or integrations",
      icon: "upload",
      details: [
        "Batch or real-time uploads",
        "Supports PDF, DOCX, Images",
        "Multi-source ingestion",
        "OCR support included"
      ]
    },
    {
      id: "understand",
      number: 2,
      title: "AI-Powered Extraction",
      description: "Our system identifies, classifies, and extracts key fields from any document",
      icon: "brain-circuit",
      details: [
        "Pre-trained and custom models",
        "Key-value pair detection",
        "Multi-language support",
        "Table & form recognition"
      ]
    },
    {
      id: "deliver",
      number: 3,
      title: "Deliver Clean Structured Data",
      description: "Get ready-to-use data with validation, confidence scores, and export formats",
      icon: "download",
      details: [
        "JSON, XML, CSV formats",
        "API/webhook integration",
        "Data quality checks",
        "Audit-ready output"
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


export const Features = [
  {
    icon: 'ScanText',
    title: 'OCR + Intelligent Parsing',
    description: 'Extract text, tables, forms, and handwriting from any document with high accuracy.',
  },
  {
      icon: 'Sliders',
      title: 'Auto-Classification & Templates',
      description: 'Classify documents automatically and apply reusable templates for faster processing.',
    },
    {
      icon: 'Users',
      title: 'Built for Teams',
      description: 'Collaborate with teammates, manage permissions, and track usage in shared workspaces.',
    },
    {
    icon: 'Clock',
    title: 'Scheduled Workflows',
    description: 'Run document processing tasks on schedule—daily, weekly, or on event triggers.',
  },
  {
      icon: 'Bell',
      title: 'Smart Monitoring & Alerts',
      description: 'Get alerts on failed extractions, low confidence scores, or abnormal document formats.',
    },
    {
      icon: 'Database',
      title: 'Clean, Structured Output',
      description: 'Receive enriched, validated data in formats ready for databases, APIs, or analytics tools.',
    },
];


export const useCases: UseCase = {
  heading: 'Where Document Intelligence',
  description: 'Explore how our Document AI transforms manual paperwork into automated workflows.',
  items: [
    {
      id: 'invoices',
      title: 'Invoice & Billing Automation',
      description: 'Extract totals, taxes, and payment terms from invoices automatically.',
      tags: ['Finance', 'Accounts Payable'],
      icon: FaDollarSign,
    },
    {
      id: 'contracts',
      title: 'Contract Understanding',
      description: 'Identify clauses, parties, and expiry dates from legal contracts.',
      tags: ['Legal', 'Compliance'],
      icon: FaUniversity,
    },
    {
      id: 'insurance-claims',
      title: 'Insurance Claims Processing',
      description: 'Automate intake and evaluation of forms, ID proofs, and medical reports.',
      tags: ['Healthcare', 'Insurance'],
      icon: FaHome,
    },
    {
      id: 'hr-onboarding',
      title: 'HR Document Automation',
      description: 'Extract info from resumes, ID proofs, tax forms during employee onboarding.',
      tags: ['HR', 'Automation'],
      icon: FaUsers,
    },
    {
      id: 'regulatory-filings',
      title: 'Regulatory Compliance Docs',
      description: 'Parse data from public filings, licenses, and disclosure forms.',
      tags: ['Government', 'Risk'],
      icon: FaNewspaper,
    },
    {
      id: 'bank-statements',
      title: 'Bank Statement Parsing',
      description: 'Digitize and analyze transactions from PDF statements.',
      tags: ['Finance', 'Lending'],
      icon: FaChartLine,
    },
    {
      id: 'research-docs',
      title: 'Academic & Research Papers',
      description: 'Extract metadata and citations from scientific publications.',
      tags: ['Education', 'R&D'],
      icon: FaCode,
    },
    {
      id: 'ad-review',
      title: 'Ad Copy & Compliance Review',
      description: 'Extract and monitor ad assets across documents and PDFs.',
      tags: ['Marketing', 'Audits'],
      icon: FaBullhorn,
    },
  ],
};

export const faq = {
  title: "Frequently Asked",
  span: "Questions",
  description: "Everything you need to know about our Document AI platform.",
  items: [
    {
      question: "What type of documents do you support?",
      answer:
        "We support PDFs, scanned images, Word docs, spreadsheets, and even handwritten notes using OCR.",
    },
    {
      question: "How accurate is the data extraction?",
      answer:
        "Our models offer up to 99.9% accuracy with confidence scores and validation pipelines to ensure output quality.",
    },
    {
      question: "Can I integrate with my existing systems?",
      answer:
        "Yes, we provide API access, webhooks, and integrations with tools like Zapier, Google Drive, and databases.",
    },
    {
      question: "Do you support multi-language documents?",
      answer:
        "Yes, we support over 100 languages and can extract from multilingual documents.",
    },
    {
      question: "Can I build custom extraction rules?",
      answer:
        "Absolutely. You can define your own rules using templates, visual mappers, or train custom models.",
    },
    {
      question: "Is the platform compliant with data privacy laws?",
      answer:
        "Yes. We’re SOC 2, GDPR, and ISO 27001 compliant, with options for on-prem or region-specific processing.",
    },
    {
      question: "How do you handle low-quality scans?",
      answer:
        "We use enhanced OCR, image preprocessing, and AI-based noise reduction to extract even from poor-quality scans.",
    },
  ],
}
