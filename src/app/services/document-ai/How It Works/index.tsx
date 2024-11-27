"use client";
import { motion } from "framer-motion";
import { FileText, Cpu, Database, BarChartIcon as ChartBar, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeader from "@/components/Common/SectionHeader";

const steps = [
  {
    icon: FileText,
    title: "Document Upload",
    description: "Upload your documents in various formats (PDF, DOCX, images). Our platform supports a wide range of input types to ensure compatibility and ease of use, allowing you to quickly integrate existing files into the workflow.",
  },
  {
    icon: Cpu,
    title: "AI Processing",
    description: "Our advanced AI algorithms analyze and extract key information. This step leverages natural language processing (NLP), optical character recognition (OCR), and machine learning models to ensure accuracy and contextual relevance.",
  },
  {
    icon: Database,
    title: "Data Structuring",
    description: "Extracted data is organized into a structured format. The system categorizes, labels, and formats the information, making it ready for further analysis or integration with other tools and platforms.",
  },
  {
    icon: ChartBar,
    title: "Insights Generation",
    description: "AI generates valuable insights from the processed data. By identifying patterns, trends, and anomalies, this step provides actionable intelligence that helps drive data-driven decisions.",
  },
  {
    icon: CheckCircle,
    title: "Results Delivery",
    description: "Access your structured data and insights through our interface. The final output is presented in a user-friendly dashboard or exported in a format of your choice, ensuring seamless integration into your workflows.",
  },
];

const Working = () => {
  return (
    <>

    <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
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
              <Card className="w-full max-w-sm bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-primary rounded-full text-white">
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
