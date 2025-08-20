"use client";
import React from "react";

const resources = [
  { name: "PRODUCT DATA-SHEET" },
  { name: "DIMENSION TABLES" },
  { name: "COATING/MATERIAL OPTIONS" },
  { name: "MAINTENANCE OR INSTALLATION GUIDE" },
];

export default function TechnicalResources() {
  return (
    <section className="Section bg-white" id="Downloads">
      {/* Title */}
      <h2 className="Heading text-center mb-8">
        Technical Downloads & Resources
      </h2>

      {/* Resources Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
        {resources.map((item, index) => (
          <div
            key={index}
            className="bg-[#0E509E] text-white text-center py-10 rounded-md flex flex-col items-center justify-center space-y-2 hover:bg-[#FACC48] transition"
          >
            <p className="text-sm sm:text-base md:text-lg font-medium uppercase tracking-wide">
              {item.name}
            </p>
            <span className="text-lg sm:text-xl font-bold">{">>"}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
