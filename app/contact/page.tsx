import React from "react";
import Contact from "../../components/sections/contact-section";
import SectionHeader from "../../components/Common/SectionHeader";
import { Metadata } from "next";
import { siteConfig } from "../../config/site";

export const metadata: Metadata = {
  title: "Contact Thinksolv",
  description: "This is the contact page for Thinksolv",
};

const ContactPage = () => {
  const { header } = siteConfig.contact;

  return (
    <>
      <div className="pt-5">
        <SectionHeader headerInfo={header} />
      </div>
      <div className="pb-10 pt-10">
        <Contact />
      </div>
    </>
  );
};

export default ContactPage;
