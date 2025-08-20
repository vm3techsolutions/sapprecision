"use client";
import React from "react";

const features = [
  { number: "01", text: "High strength–to–weight ratio" },
  { number: "02", text: "Precise and consistent dimensions" },
  { number: "03", text: "Cost–effective for large volume production" },
  { number: "04", text: "Excellent wear and corrosion resistance" },
  { number: "05", text: "Self–lubricating" },
  { number: "06", text: "Environmentally friendly" },
];

export default function FeaturesBenefits() {
  return (
    <section className="bg-[#D9D9D9]/12 Section" id="Features">
      {/* Title */}
      <h2 className="Heading text-center mb-8">Features & Benefits</h2>

      {/* Fixed Grid with divider lines */}
      <div className="relative mx-auto grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 max-w-6xl">
        {/* Horizontal line (middle row) – only show on md+ */}
        <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 w-[85%] h-[1.5px] bg-[#0E509E]"></div>

        {/* Vertical line (between col 1 & 2) – only show on md+ */}
        <div className="hidden md:block absolute left-1/3 top-0 h-full w-[1px] bg-[#0E509E]"></div>

        {/* Vertical line (between col 2 & 3) – only show on md+ */}
        <div className="hidden md:block absolute left-2/3 top-0 h-full w-[1px] bg-[#0E509E]"></div>

        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-center p-8"
          >
            <span className="text-3xl md:text-4xl font-bold text-[#FACC48] opacity-40 mb-2 transition-transform duration-500 ease-in-out transform hover:scale-105">
              {feature.number}
            </span>
            <p className="text-[#0E509E] text-md md:text-xl font-semibold">
              {feature.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
