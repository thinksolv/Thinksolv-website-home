import React from "react";
import servicesData from "./servicesData";
import SingleService from "./SingleService";
import SectionHeader from "../Common/SectionHeader";

const Services = () => {
  return (
    <section id="services" className="py-16 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionHeader
          headerInfo={{
            title: "Our Services",
            subtitle: "Empowering Business with Cutting-Edge Solutions",
            description:
              "We provide a range of innovative services designed to streamline your business processes and enhance productivity.",
          }}
        />
 
 <div className="container  px-4 py-8">
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-4  justify-center">
        {servicesData.map((service, index) => (
          <SingleService key={index} service={service} />
        ))}
      </div>
    </div>
      </div>
    </section>
  );
};

export default Services;
