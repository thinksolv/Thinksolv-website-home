"use client";
import { motion } from "framer-motion";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { FaCoins } from "react-icons/fa";
import { FileText, ClipboardList, FileCheck, FileArchive, File } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeader from "@/components/Common/SectionHeader";

const useCases = [
  {
    icon: FileText,
    title: "Utility Bills Parsing",
    description: "Extract and organize data from utility bills to track expenses and manage payments efficiently.",
  },
  {
    icon: LiaFileInvoiceDollarSolid, // Using File for invoice processing
    title: "Invoice Processing",
    description: "Streamline the processing of invoices for automated data extraction and easier bookkeeping.",
  },
  {
    icon: ClipboardList, // Using ClipboardList for purchase orders processing
    title: "Purchase Orders Processing",
    description: "Automate data extraction from purchase orders to maintain inventory and manage procurement seamlessly.",
  },
  {
    icon: FileArchive, // Using FileArchive for receipts processing
    title: "Receipts Processing",
    description: "Digitize and extract key details from receipts to simplify expense reporting and auditing.",
  },
  {
    icon: FileCheck, // Using FileCheck for forms processing
    title: "Forms Processing",
    description: "Extract information from various forms to automate data entry and improve workflow efficiency.",
  },
  {
    icon: FaCoins, // Using FileText for claims processing
    title: "Claims Processing",
    description: "Process claims data accurately and quickly for improved decision-making and customer service.",
  },
];

const UseCases = () => {
  return (
    <>
      <section className="py-16 bg-white dark:bg-black" id="usecases">
        <SectionHeader
          headerInfo={{
            title: "Use Cases",
            subtitle: "Explore Our Advanced Solutions",
            description:
              "Our services cater to various use cases that streamline complex processes and enhance productivity.",
          }}
        />
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex justify-center"
              >
                <Card className="group relative w-full max-w-sm bg-white bg-card border-black shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-black rounded-xl text-white group-hover:bg-blue-600 group-hover:text-white dark:text-black dark:bg-white">
                        <useCase.icon className="w-6 h-6" />
                      </div>
                      <h3 className="ml-4 text-xl font-semibold text-gray-800 dark:text-white">{useCase.title}</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">{useCase.description}</p>
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

export default UseCases;
