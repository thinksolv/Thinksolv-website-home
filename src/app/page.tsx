import React from "react";
import Hero from "@/components/Hero";
import Header from "@/components/Header";
// import Features from "@/components/Features";
import Services from "@/components/Services";
import Product from "@/components/Products";
import About from "@/components/About";
import AnimatedTestimonialsDemo from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BrandsSection from '@/components/Brands';

export default function Home() {
  return (
      <>
      <Header />
      <Hero />
      <BrandsSection />
      <About />
      <Product />
      {/* <Features /> */}
      <Services />
      <AnimatedTestimonialsDemo />
      <FAQ />
      <Contact />
      <Footer />
      </>
  );
}
