"use client";
import { motion } from "framer-motion";
import { FileText, Cpu, Database, BarChartIcon as ChartBar, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeader from "@/components/Common/SectionHeader";

const steps = [
  {
    icon: FileText,
    title: "Document Upload",
    description: "Upload documents in various formats like PDFs, DOCX, or images for seamless integration.",
  },
  {
    icon: Cpu,
    title: "AI Processing",
    description: "Analyze documents using AI techniques like NLP, OCR, and machine learning for accurate extraction.",
  },
  {
    icon: Database,
    title: "Data Structuring",
    description: "Organize extracted data into structured formats for easy analysis and integration.",
  },
  {
    icon: ChartBar,
    title: "Insights Generation",
    description: "Generate actionable insights by identifying patterns and trends in the data.",
  },
  {
    icon: CheckCircle,
    title: "Results Delivery",
    description: "Access and export results through a user-friendly dashboard or in desired formats.",
  },
];


const Working = () => {
  return (
    <>

    <section className="py-16 bg-white dark:bg-black">
    <SectionHeader
          headerInfo={{
            title: "How It Works",
            subtitle: "Acheieve Your Success With Our Services",
            description:
              "We provide a range of innovative services designed to streamline your business processes and enhance productivity.",
          }}
        />
      <div className="container mx-auto px-4">
        {/* <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">How Document AI Works</h2> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex justify-center"
            >
              <Card className=" group relative w-full max-w-sm bg-white bg-card shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                <CardContent className="p-6">
                  <div className=" flex items-center mb-4">
                    <div className="p-3 bg-black rounded-full text-white group-hover:bg-blue-600 group-hover:text-white">
                      <step.icon className="w-6 h-6" />
                    </div>
                    <h3 className="ml-4 text-xl font-semibold text-gray-800 dark:text-white">{step.title}</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </>  
  );
};

export default Working;
