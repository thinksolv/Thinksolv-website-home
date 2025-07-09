"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { siteConfig } from "../../config/site";

const Contact = () => {
  const [hasMounted, setHasMounted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: process.env.NEXT_PUBLIC_CONTACT_SUBJECT || "General Inquiry",
    message: "",
  });

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const formData = new FormData();
      formData.append("name", formState.name);
      formData.append("email", formState.email);
      formData.append("subject", formState.subject);
      formData.append("message", formState.message);

      const response = await fetch(
        process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_ID!,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) throw new Error(`HTTP error ${response.status}`);

      setSubmitStatus({
        success: true,
        message: "Thanks for reaching out! We'll get back to you soon.",
      });

      setFormState((prev) => ({
        ...prev,
        name: "",
        email: "",
        message: "",
      }));
    } catch (error) {
      console.error("Submission failed", error);
      setSubmitStatus({
        success: false,
        message: "Submission failed. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="support" className="">
      <div className="relative mx-auto pt-10 lg:px-15 xl:px-20">
        {/* Background */}
        <div className="absolute left-0 top-0 -z-1 h-2/3 w-full rounded-lg bg-gradient-to-t from-transparent to-[#dee7ff47] dark:bg-black"></div>
        <div className="absolute bottom-[-255px] left-0 -z-1 h-full w-full">
          <Image
            src="/shape-dotted-light.svg"
            alt="Dotted"
            className="dark:hidden"
            fill
          />
          <Image
            src="/shape-dotted-dark.svg"
            alt="Dotted"
            className="hidden dark:block"
            fill
          />
        </div>

        <div className="flex flex-col-reverse md:flex-row md:justify-between gap-8 xl:gap-20">
          {/* Left Form */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="w-full md:w-3/5 lg:w-3/4 animate_top rounded-lg bg-white p-7.5 shadow-solid-8 dark:border dark:border-strokedark dark:bg-black xl:p-15"
          >
            <h2 className="mb-15 text-3xl font-semibold text-black dark:text-white">
              Let's Connect
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-7.5 flex flex-col gap-7.5 lg:flex-row lg:gap-14">
                <input
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  type="text"
                  placeholder="Full name"
                  required
                  className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-blue-600 focus:placeholder:text-blue-600 focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                />
                <input
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="Email address"
                  required
                  className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-blue-600 focus:placeholder:text-blue-600 focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                />
              </div>

              <div className="mb-11.5 flex">
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Message"
                  required
                  className="w-full border-b border-stroke bg-transparent focus:border-blue-600 focus:placeholder:text-blue-600 focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"
                ></textarea>
              </div>

              {submitStatus && (
                <div className="mb-4 text-sm font-medium">
                  <p
                    className={`${submitStatus.success ? "text-green-600" : "text-red-600"
                      }`}
                  >
                    {submitStatus.message}
                  </p>
                </div>
              )}

              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center justify-center gap-2 text-center px-6 py-2 font-bold rounded-md border dark:bg-black dark:border-white dark:text-white border-black bg-white text-black text-lg hover:shadow-[5px_5px_0px_0px_rgba(0,0,0)] dark:hover:shadow-[5px_5px_0px_0px_rgba(255,255,255)] transition duration-200 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {isSubmitting && (
                    <span className="loader border-2 border-t-2 border-black dark:border-white border-t-transparent rounded-full w-4 h-4 animate-spin"></span>
                  )}
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </motion.div>

          {/* Right Info */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 0.1 }}
            viewport={{ once: true }}
            className="w-full md:w-2/5 md:p-7.5 lg:w-[26%] xl:pt-15 animate_top"
          >
            <h2 className="mb-12.5 text-3xl font-semibold text-black dark:text-white">
              {siteConfig.contact.findUs.heading}
            </h2>

            {siteConfig.contact.findUs.sections.map((section, index) => (
              <div className="mb-7" key={index}>
                <h3 className="mb-4 text-metatitle3 font-medium text-black dark:text-white">
                  {section.title}
                </h3>
                <p>
                  {section.link ? (
                    <a href={section.link} className="hover:underline">
                      {section.content}
                    </a>
                  ) : (
                    section.content
                  )}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
