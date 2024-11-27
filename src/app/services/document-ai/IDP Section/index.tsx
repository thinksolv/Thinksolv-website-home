"use client";

import { Tabs } from "@/components/ui/tabs";
import SectionHeader from "@/components/Common/SectionHeader"; // Import the SectionHeader component

const IDP=()=> {
  const tabs = [
    {
      title: "IDP for any Industry",
      value: "idp",
      content: (
        <TabContent
          title="IDP for any Industry"
          description="Our Intelligent Document Processing software provides a quick, easy-to-use, and reliable solution to improve accuracy and process significantly more documents in a fraction of the time it takes manually. Forget needing to hire a whole new team to manage the increase in your document workload – let intelligent workflows take care of the time-consuming manual work."
        />
      ),
    },
    {
      title: "Finance & Accounting",
      value: "finance",
      content: (
        <TabContent
          title="Finance & Accounting"
          description="Enhance speed, accuracy, and output for your Finance, Accounts Payable & Accounting teams across common repetitive tasks including invoice processing, receipt and utility bill processing, and more."
        />
      ),
    },
    {
      title: "Financial Services",
      value: "financial",
      content: (
        <TabContent
          title="Financial Services"
          description="Simplify mortgage processing and KYC checks with intelligent workflows that save time and reduce errors."
        />
      ),
    },
    {
      title: "Healthcare",
      value: "healthcare",
      content: (
        <TabContent
          title="Healthcare"
          description="Streamline patient registration, onboarding, and records management with our innovative solutions."
        />
      ),
    },
    {
      title: "Government",
      value: "government",
      content: (
        <TabContent
          title="Government"
          description="Improve efficiency in immigration services and document verification with our tailored solutions."
        />
      ),
    },
    {
      title: "Supply Chain",
      value: "supply_chain",
      content: (
        <TabContent
          title="Supply Chain"
          description="Optimize operations with intelligent processing for bills of lading, proof of delivery receipts, and customs declarations."
        />
      ),
    },
    {
      title: "Procurement",
      value: "procurement",
      content: (
        <TabContent
          title="Procurement"
          description="Enhance PO processing, customer and vendor onboarding, and contract management with ease."
        />
      ),
    },
    {
      title: "Legal",
      value: "legal",
      content: (
        <TabContent
          title="Legal"
          description="Simplify document verification and contract administration for legal teams."
        />
      ),
    },
  ];

  return (
    <div className="my-20 mx-auto max-w-6xl px-4">
      {/* Section Header */}
      <SectionHeader
        headerInfo={{
          title: "Our Services",
          subtitle: "Empowering Your Business with Cutting-Edge Solutions",
          description:
            "We provide a range of innovative services designed to streamline your business processes and enhance productivity.",
        }}
      />

      {/* Tabs Section */}
      <div className="mt-10">
        <Tabs tabs={tabs} />
      </div>
    </div>
  );
}

// TabContent Component for Title and Description
const TabContent = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="w-full h-auto rounded-2xl p-6 md:p-8 bg-gradient-to-br from-purple-700 to-violet-900 text-white">
      <h3 className="text-xl md:text-2xl font-semibold mb-4">{title}</h3>
      <p className="text-sm md:text-base">{description}</p>
    </div>
  );
};

export default IDP;