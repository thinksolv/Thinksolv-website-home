import { Service } from "@/types/service";

const servicesData: Service[] = [
  {
    id: 1,
    title: "AppSheet Development",
    description: "Create custom apps without coding using Google’s AppSheet platform.",
    image: "/appsheet.png", // Your image path here
    url: "/services/appsheet-development",
  },
  {
    id: 2,
    title: "Document AI",
    description: "Use AI-powered tools to extract, organize, and analyze document data.",
    image: "/document-ai.png", // Your image path here
    url: "/services/document-ai",
  },
  {
    id: 3,
    title: "Workflow Automation",
    description: "Automate business processes and save time with smart workflows.",
    image: "/workflow.png", // Your image path here
    url: "/services/workflow-automation",
  },
  {
    id: 4,
    title: "Cloud Integration",
    description: "Seamlessly integrate your systems with cloud services for enhanced collaboration.",
    image: "/cloud-integration.avif", // Your image path here
    url: "/services/cloud-integration",
  },
  // {
  //   id: 5,
  //   title: "Custom Software Solutions",
  //   description: "Tailored software development to meet your business’s unique needs.",
  //   image: "/images/custom-software.jpg", // Your image path here
  //   url: "/services/custom-software",
  // },
  {
    id: 6,
    title: "Business Intelligence",
    description: "Leverage data analytics to make informed decisions and optimize operations.",
    image: "/business.webp", // Your image path here
    url: "/services/business-intelligence",
  },
];

export default servicesData;
