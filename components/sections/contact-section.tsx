"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { siteConfig } from "../../config/site";
import SectionGradient from "../ui/section-gradient";

const Contact = () => {
  const [hasMounted, setHasMounted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null);

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    inquiry: "",
    message: "",
  });

  useEffect(() => setHasMounted(true), []);
  if (!hasMounted) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const formData = new FormData();
      formData.append("name", formState.name);
      formData.append("email", formState.email);
      formData.append("subject", formState.inquiry || siteConfig.contact.form.subject);
      formData.append("message", formState.message);

      const response = await fetch(process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_ID!, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error(`HTTP error ${response.status}`);

      setSubmitStatus({ success: true, message: "Thanks! We'll get back to you soon." });
      setFormState({ name: "", email: "", inquiry: "", message: "" });
    } catch (error) {
      console.error("Submit failed", error);
      setSubmitStatus({ success: false, message: "Submission failed. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const { header, findUs } = siteConfig.contact;

  return (
    <section id="contact" className="bg-white dark:bg-black text-black dark:text-white py-20">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        <div className="relative text-center mb-16">
          <SectionGradient />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            {header.title}
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-gray-700 dark:text-gray-300 font-medium max-w-2xl mx-auto">
            {header.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">{findUs.heading}</h3>
            <div className="space-y-6 text-sm">
              {findUs.sections.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <Mail size={20} />
                  <div>
                    <p className="font-bold">{item.title}</p>
                    <p className="mt-2">
                      {item.link ? (
                        <a href={item.link} className="hover:text-primary">
                          {item.content}
                        </a>
                      ) : (
                        item.content
                      )}
                    </p>
                  </div>
                </div>
              ))}
              <div className="mt-6">
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps?q=KCT+Tech+Park,+Coimbatore,+India&output=embed"
                  width="100%"
                  height="250"
                  className="rounded-lg border-none"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-100 dark:bg-[#111] p-8 rounded-xl border border-primary dark:border-primary/50"
          >
            <div className="space-y-6">
              <input
                type="text"
                name="name"
                value={formState.name}
                onChange={handleChange}
                placeholder="Name"
                required
                className="w-full px-4 py-2 bg-transparent border rounded focus:outline-none"
              />

              <input
                type="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="w-full px-4 py-2 bg-transparent border rounded focus:outline-none"
              />

              <textarea
                name="message"
                value={formState.message}
                onChange={handleChange}
                rows={4}
                placeholder="Message"
                required
                className="w-full px-4 py-2 bg-transparent border rounded focus:outline-none"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-black dark:bg-white text-white dark:text-black font-semibold py-2 rounded hover:opacity-90 transition disabled:opacity-50"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {submitStatus && (
                <p className={`text-sm mt-4 ${submitStatus.success ? "text-green-600" : "text-red-600"}`}>
                  {submitStatus.message}
                </p>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
