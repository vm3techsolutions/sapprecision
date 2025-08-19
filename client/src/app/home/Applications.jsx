"use client";
import React from "react";
import Image from "next/image";

const industries = [
  { name: "Construction", img: "/assets/home/Applications1.png" },
  { name: "Manufacturing", img: "/assets/home/Applications2.png" },
  { name: "Automotive", img: "/assets/home/Applications3.png" },
  { name: "Industrial", img: "/assets/home/Applications4.png" },
];

export default function ApplicationsIndustries() {
  return (
    <section className="bg-white Section">
      {/* Title */}
      <h2 className="Heading text-center mb-8">
        Applications & Industries
      </h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {industries.map((item, index) => (
          <div
            key={index}
            className="border-2 border-[#0E509E] p-2 rounded-lg overflow-hidden shadow-md bg-white"
          >
            {/* Image */}
            <div className="w-full h-64 relative ">
              <Image
                src={item.img}
                alt={item.name}
                fill
                className="object-cover rounded-lg transition-transform duration-500 ease-in-out transform hover:scale-105"
              />
            </div>
            {/* Label */}
            <div className="bg-[#FACC48] py-3 text-center font-semibold rounded-lg text-[#363636] mt-2 hover:bg-[#0E509E] hover:text-white transition">
              {item.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
