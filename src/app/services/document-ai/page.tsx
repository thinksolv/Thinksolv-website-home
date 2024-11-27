'use client';
import React from 'react';
import HeroSection from './Hero';
import Header from '@/components/Header';
import { motion } from "framer-motion";
import IDP from '../document-ai/IDP Section'
import AnimatedTestimonialsDemo from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import {CheckCircle2} from "lucide-react";


// **Main App**
export default function Landing() {
  return (
    <div>
      <Header />
      <HeroSection />
      <IDP />
      <Benefits />
      <AnimatedTestimonialsDemo />
      <Contact />
      <Footer />
    </div>
  );
}

const benefits = [
  {
    title: "Increased Efficiency",
    description: "Reduce manual work by up to 80% through automated workflows",
    metrics: "80%"
  },
  {
    title: "Cost Savings",
    description: "Lower operational costs with streamlined processes",
    metrics: "40%"
  },
  {
    title: "Time Saved",
    description: "Faster task completion and reduced processing time",
    metrics: "60%"
  },
  {
    title: "Error Reduction",
    description: "Minimize human errors in data entry and processing",
    metrics: "95%"
  }
];

function Benefits() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Real Business Impact
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the tangible benefits of AppSheet automation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="p-6 rounded-xl bg-card border h-full hover:shadow-lg transition-all">
                <div className="text-4xl font-bold text-black mb-4 dark:text-white">
                  {benefit.metrics}
                </div>
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}