import { Feature } from "@/types/feature";
import { FaFilePdf, FaFileWord, FaSyncAlt, FaMarkdown, FaWordpress } from "react-icons/fa";
import { BiMerge } from "react-icons/bi";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: FaFilePdf,
    title: "Docs to PDF",
    description: "Easily convert Google Docs to high-quality PDFs Within Seconds. ",
    url: "https://www.docstopdf.pro",
  },
  {
    id: 2,
    icon: FaFileWord,
    title: "PDF to Docs",
    description: "Seamlessly transform PDF documents into editable Google Docs.",
    url: "https://www.pdftodocs.com",
  },
  {
    id: 3,
    icon: BiMerge,
    title: "Merge Docs Pro",
    description: "Combine multiple Google Docs into one single document seamlessly.",
    url: "https://www.mergedocs.pro",
  },
  {
    id: 4,
    icon: FaSyncAlt,
    title: "Bulk Converter Pro",
    description: "Process large batches of file conversions effortlessly.",
    url: "https://www.bulkconverter.pro",
  },
  {
    id: 5,
    icon: FaMarkdown,
    title: "Docs to Markdown Pro",
    description: "Convert Google Docs to clean and optimized Markdown files.",
    url: "https://www.docstomarkdown.pro",
  },
  {
    id: 6,
    icon: FaWordpress,
    title: "Docs to WordPress Pro",
    description: "Publish Google Docs content directly to your WordPress site with ease.",
    url: "https://www.docstowp.pro",
  },
];

export default featuresData;

