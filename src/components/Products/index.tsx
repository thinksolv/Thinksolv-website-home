"use client";
import React from "react";
import featuresData from "./productsData";
import SingleProduct from "./SingleProduct";
import SectionHeader from "../Common/SectionHeader";

const Product = () => {
  return (
    <section id="products" className="py-10 lg:py-15 xl:py-20 bg-gray-100 dark:bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          headerInfo={{
            title: "Our Products",
            subtitle: "Streamlining Your Workflow with Powerful Solutions",
            description: "A team of passionate professionals delivering cutting-edge products designed to elevate your business and streamline operations.",
          }}
        />
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuresData.map((feature) => (
            <SingleProduct key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;

