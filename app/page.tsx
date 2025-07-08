import React from "react";
import MainHero from "../components/hero-section";
// import Features from "../components/Features";
import Services from "../components/Services";
import Product from "../components/Products";
import About from "../components/About";
import FunFact from "../components/FunFact";
// import Map from "../components/Map";
import AnimatedTestimonialsDemo from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
// import BrandsSection from '../components/Brands';

export default function Home() {
  return (
    <>
      <MainHero />
      {/* <BrandsSection /> */}
      <About />
      <Product />
      {/* <Features /> */}
      <Services />
      <FunFact />
      {/* <Map /> */}
      {/*<AnimatedTestimonialsDemo />*/}
      <FAQ />
      <Contact />
    </>
  );
}
