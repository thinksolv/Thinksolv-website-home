import {
  FaFilePdf,
  FaFileWord,
  FaSyncAlt,
  FaMarkdown,
  FaWordpress,
} from "react-icons/fa";
import { BiMerge } from "react-icons/bi";
import  {Wrench, Home, Package, Book } from "lucide-react"

export const siteConfig = {
  name: "Thinksolv Technologies",
  tagline: "Building Solutions Thoughtfully",
  logo: {
    src: "/favicon.ico",
    alt: "Thinksolv Logo",
    width: 60,
    height: 55,
  },
  brandText: {
    main: "thinksol",
    highlight: "v.",
  },
  description: "Building thoughtful software products and browser extensions to enhance productivity and simplify workflows.",
  metaDescription: "Thinksolv is a software company focused on crafting AI-powered tools, Chrome extensions, and scalable digital solutions for modern businesses and individuals.",
  url: "https://thinksolv.com",
  ogImage: "https://thinksolv.com/og.jpg", // Replace with actual path or CDN URL if hosted elsewhere
  links: {
    twitter: "https://twitter.com/thinksolv",
    youtube: "https://www.youtube.com/@thinksolv", // Update with correct handle if different
    linkedin: "https://linkedin.com/company/thinksolv",
  },
  keywords: [
    "Thinksolv",
    "Software Company",
    "Productivity Tools",
    "Browser Extensions",
    "AI Tools",
    "Next.js",
    "ChatGPT Extensions",
    "Gemini Extensions",
    "Custom Solutions",
    "Tech Innovation",
  ],

  nav: {
    services: [
      { label: "Document AI", href: "/services/document-ai" },
    ],
    products: [
      { label: "Merge Docs Pro", href: "https://www.mergedocs.pro" },
      { label: "Docs to PDF Pro", href: "https://www.docstopdf.pro" },
      { label: "Docs to Markdown Pro", href: "https://www.docstomarkdown.pro" },
      { label: "Docs to WP Pro", href: "https://www.docstowp.pro" },
      { label: "Bulk Converter Pro", href: "https://www.bulkconverter.pro" },
      { label: "PDF to Docs Pro", href: "https://www.pdftodocs.com" },
    ],
    blog: { label: "Blog", href: "/blog" },
    contact: { label: "Contact Us", href: "/contact" },
  },

  hero: {
    title: "Building Solutions",
    highlighted: "Thoughtfully",
    gradient: "linear-gradient(to right, #2772ed, #E91C24)",
    buttonText: "Explore",
    buttonHref: "#products",
    partners: [
      {
        src: "/Google_Cloud_Partner_vr.png",
        alt: "Google Cloud Partner",
        width: 300,
        height: 200,
      },
      {
        src: "/Shopify-Partner-Logo.webp",
        alt: "Shopify Partner",
        width: 200,
        height: 150,
      },
    ],
    backgroundPattern: "https://cdn.rareblocks.xyz/collection/clarity/images/hero/1/background-pattern.png",
  },

  about: {
    heroBadge: {
      text: "Official Google Cloud™ Build Partner",
      icon: "Sparkles", // (optional if you're importing dynamically)
    },
    heading: "A Perfect Agency for Businesses of All Sizes",
    subheading:
      "Helping businesses with Google Workspace automation, AppSheet development, Document AI, and integrations with tools like ClickUp, HubSpot, and more.",

    // Solutions Section
    solutions: {
      heading: "Reduce Work with Efficient Solutions",
      description:
        "Our integrations streamline processes, improve productivity, and deliver measurable results. We help you build efficient systems tailored to your business needs.",
      image: {
        src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80",
        alt: "Team collaboration",
        width: 600,
        height: 450,
      },
      stat: {
        value: "100+",
        label: "Satisfied Clients",
      },
      points: [
        "Google Workspace integration with tools like ClickUp, HubSpot, and others",
        "Automated document workflows",
        "Intelligent document processing",
        "Custom workflow automations",
      ],
      ctaText: "Get Started",
      ctaHref: "/contact",
    },
  },

  products: {
    title: "Our Products",
    subtitle: "Streamline Your Workflow with Our Ready-to-Use Products",
    description:
      "Our thoughtfully crafted products are designed to automate tasks and optimize workflows, helping your business operate more efficiently.",
    items: [
      {
        id: 1,
        icon: FaFilePdf,
        title: "Docs to PDF Pro",
        description: "Converts Google Docs to high-quality PDFs.",
        url: "https://www.docstopdf.pro",
      },
      {
        id: 2,
        icon: FaFileWord,
        title: "PDF to Docs Pro",
        description: "Converts PDF documents into editable Google Docs.",
        url: "https://www.pdftodocs.com",
      },
      {
        id: 3,
        icon: BiMerge,
        title: "Merge Docs Pro",
        description:
          "Combines multiple Google Docs into one single document and optionally exports the output as PDF.",
        url: "https://www.mergedocs.pro",
      },
      {
        id: 4,
        icon: FaSyncAlt,
        title: "Bulk Converter Pro",
        description: "Converts files from one format to another.",
        url: "https://www.bulkconverter.pro",
      },
      {
        id: 5,
        icon: FaMarkdown,
        title: "Docs to Markdown Pro",
        description:
          "Converts Google Docs to clean and optimized Markdown or HTML files.",
        url: "https://www.docstomarkdown.pro",
      },
      {
        id: 6,
        icon: FaWordpress,
        title: "Docs to WordPress Pro",
        description:
          "Publishes Google Docs content as clean HTML directly to your WordPress site.",
        url: "https://www.docstowp.pro",
      },
    ],
  },

  services: {
    title: "Your Technology Partner",
    subtitle: "A Partnership for Success",
    description:
      "As your trusted technology partner, we understand your needs and deliver bespoke solutions to drive growth and efficiency.",
    items: [
      {
        id: 1,
        title: "Document AI",
        description: "Use AI-powered tools to extract, organize, and analyze document data.",
        image: "/document-ai.png",
        url: "/services/document-ai",
      },
      {
        id: 2,
        title: "AppSheet Development",
        description: "Create custom apps without coding using Google’s AppSheet platform.",
        image: "/appsheet.png",
        url: "/services/appsheet-development",
      },
      // {
      //   id: 3,
      //   title: "Workflow Automation",
      //   description: "Automate business processes and save time with smart workflows.",
      //   image: "/workflow.png",
      //   url: "/services/workflow-automation",
      // },
      // {
      //   id: 4,
      //   title: "Cloud Integration",
      //   description: "Seamlessly integrate your systems with cloud services for enhanced collaboration.",
      //   image: "/cloud.jpg",
      //   url: "/services/cloud-integration",
      // },
      // {
      //   id: 5,
      //   title: "Custom Software Solutions",
      //   description: "Tailored software development to meet your business’s unique needs.",
      //   image: "/custom-software.jpg",
      //   url: "/services/custom-software",
      // },
      // {
      //   id: 6,
      //   title: "Business Intelligence",
      //   description: "Leverage data analytics to make informed decisions and optimize operations.",
      //   image: "/business.jpg",
      //   url: "/services/business-intelligence",
      // }
    ],
  },

  funFact: {
    title: "Trusted by Global Companies.",
    description:
      "We provide tailored Google Workspace automation and integration solutions, helping businesses worldwide streamline workflows and boost productivity.",
    stats: [
      {
        label: "World Wide Clients",
        value: "100+",
      },
      {
        label: "App Users",
        value: "25K+",
      },
      // Add more stats as needed
      // {
      //   label: "Awards Won",
      //   value: "865",
      // },
    ],
  },

  faq: {
    title: "Frequently Asked Questions",
    items: [
      {
        question: "What services do you offer?",
        answer:
          "We specialize in Google Workspace automation, AppSheet development, Document AI, and integrations with platforms like ClickUp, HubSpot, Slack, and others to enhance productivity.",
      },
      {
        question: "Can you help integrate Google Workspace with third-party tools?",
        answer:
          "Yes, we build custom integrations for Google Workspace with platforms such as ClickUp, HubSpot, Slack, and other productivity tools to streamline business workflows.",
      },
      {
        question: "What industries benefit from your products and services?",
        answer:
          "Our ready-to-use solutions serve industries like IT, education, healthcare, and any organization using Google Workspace for document management and automation.",
      },
      {
        question: "Can you develop custom solutions for unique business needs?",
        answer:
          "Absolutely, we work closely with clients to design and implement bespoke solutions tailored to their specific requirements.",
      },
      {
        question: "Do you offer ready-to-use products?",
        answer:
          "Yes, our products like Merge Docs Pro, Docs to Markdown Pro, and Docs to PDF Pro are ready to install and use, enabling immediate productivity gains.",
      },
      {
        question: "Do you offer solutions for document management?",
        answer:
          "Yes, our products simplify document management tasks like merging multiple Google Docs into one and converting documents into markdown formats effortlessly.",
      },
      {
        question: "How can your products save time for my team?",
        answer:
          "Our tools automate repetitive tasks such as merging documents, formatting content, and syncing data between Google Workspace and other platforms, freeing your team to focus on higher-value activities.",
      },
      {
        question: "What makes your products stand out?",
        answer:
          "Our products are built to be user-friendly, require minimal setup, and integrate seamlessly with Google Workspace, providing instant value with minimal effort.",
      },
    ],
  },

  contact: {
    header: {
      title: "Contact",
      subtitle: "Contact Us",
      description:
        "Reach out to us today to ask any questions about our products or discover how we can help your business automate tasks, streamline processes, boost productivity, and save valuable time.",
    },
    form: {
      subject: "General Inquiry",
    },
    findUs: {
      heading: "Find us",
      sections: [
        {
          title: "Our Location",
          content:
            "Thinksolv Technologies Pvt Ltd, Forge Factory, KCT Tech Park, Coimbatore - 641 049, India.",
        },
        {
          title: "Email Address",
          content: "vikram@thinksolv.com",
          link: "mailto:vikram@thinksolv.com",
        },
      ],
    },
  },

  footer: {
    logo: {
      src: "/favicon.ico",
      alt: "Thinksolv Logo",
    },
    address: `Thinksolv Technologies Pvt Ltd,\nForge Factory, KCT Tech Park,\nCoimbatore - 641 049, India.`,
    links: [
      { label: "Home", href: "/" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
    products: [
      { label: "Merge Docs Pro", href: "https://www.mergedocs.pro" },
      { label: "Docs to PDF Pro", href: "https://www.docstopdf.pro" },
      { label: "Docs to Markdown Pro", href: "https://www.docstomarkdown.pro" },
      { label: "Docs to WP Pro", href: "https://www.docstowp.pro" },
      { label: "Bulk Converter Pro", href: "https://www.bulkconverter.pro" },
      { label: "PDF to Docs Pro", href: "https://www.pdftodocs.com" },
    ],
    services: [
      { label: "Document AI", href: "/services/document-ai" },
    ],
    social: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/vikramaruchamy/",
        icon: "linkedin",
      },
      {
        label: "Twitter",
        href: "https://x.com/vikramaruchamy",
        icon: "twitter",
      },
    ],
  },
};

