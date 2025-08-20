"use client";
import React from "react";
import Image from "next/image";

const points = [
  { text: "In-house testing: Density, strength, porosity" },
  { text: "Certifications: ISO 9001, IATF 16949, etc." },
  { text: "Material traceability" },
  { text: "Precision inspection equipment (CMM, etc.)" },
];

export default function QualityAssurance() {
  return (
    <section className="relative w-full" id="Quality">
      {/* Desktop Background image */}
      <div className="absolute inset-0 hidden md:block">
        <Image
          src="/assets/home/CenterBanner.png" // desktop image
          alt="Quality Assurance"
          fill
          className="object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#363636]/60"></div>
      </div>

      {/* Mobile Background image */}
      <div className="absolute inset-0 block md:hidden">
        <Image
          src="/assets/home/CenterBanner.png" // mobile image
          alt="Quality Assurance"
          fill
          className="object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#363636]/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-16 text-center text-white">
        {/* Title */}
        <h2 className="text-xl sm:text-3xl md:text-4xl font-medium mb-10 md:mb-16">
          Quality & R&amp;D Assurance
        </h2>

        {/* Points */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12">
          {points.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center space-y-3"
            >
              {/* Circle */}
              <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full bg-[#FACC48]"></div>
              {/* Text */}
              <p className="text-[#FACC48] text-sm sm:text-base md:text-lg font-medium sm:mb-10">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
