import { Feature } from "@/types/feature";
import { FaFilePdf, FaFileWord, FaSyncAlt, FaMarkdown, FaWordpress } from "react-icons/fa";
import { BiMerge } from "react-icons/bi";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: FaFilePdf,
    title: "Docs to PDF Pro",
    description: "Converts Google Docs to high-quality PDFs. ",
    url: "https://www.docstopdf.pro",
  },
  
  {
    id: 3,
    icon: BiMerge,
    title: "Merge Docs Pro",
    description: "Combines multiple Google Docs into one single document and optionally exports the output as PDF.",
    url: "https://www.mergedocs.pro",
  },
  {
    id: 5,
    icon: FaMarkdown,
    title: "Docs to Markdown Pro",
    description: "Converts Google Docs to clean and optimized Markdown or HTMl files.",
    url: "https://www.docstomarkdown.pro",
  },
  {
    id: 6,
    icon: FaWordpress,
    title: "Docs to WordPress Pro",
    description: "Publishes Google Docs content as a clean HTML directly to your WordPress site.",
    url: "https://www.docstowp.pro",
  },
  {
    id: 4,
    icon: FaSyncAlt,
    title: "Bulk Converter Pro",
    description: "Converts files from one format to another.",
    url: "https://www.bulkconverter.pro",
  },{
    id: 2,
    icon: FaFileWord,
    title: "PDF to Docs Pro",
    description: "Converts PDF documents into editable Google Docs.",
    url: "https://www.pdftodocs.com",
  }
];

export default featuresData;

