import React from "react";
import Contact from "@/components/Contact";
import SectionHeader from "@/components/Common/SectionHeader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support Page - Solid SaaS Boilerplate",
  description: "This is Support page for Solid Pro",
  // other metadata
};

const SupportPage = () => {
  return (
    <>
    <Header />
    <div className="pt-5">
    <SectionHeader 
          headerInfo={{
            title: "Contact",
            subtitle: "Start to Build a Healthy Network",
            description:
              "Discover our innovative services designed to streamline your business processes and boost productivity. Get in touch with us today!"
          }}
        />
     </div>   
    <div className="pb-10 pt-10">
      <Contact />
    </div>
    <Footer />
  </>  
  );
};

export default SupportPage;
