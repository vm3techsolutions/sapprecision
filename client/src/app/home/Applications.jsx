"use client";
import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function ApplicationsIndustries() {
  const { t } = useTranslation();

  const industries = [
    { key: "construction", img: "/assets/home/Applications1.png" },
    { key: "manufacturing", img: "/assets/home/Applications2.png" },
    { key: "automotive", img: "/assets/home/Applications3.png" },
    { key: "industrial", img: "/assets/home/Applications4.png" },
  ];

  return (
    <section className="bg-white Section" id="Applications">
      {/* Title */}
      <h2 className="Heading text-center mb-8">
        {t("applicationsIndustriesTitle")}
      </h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {industries.map((item) => (
          <div
            key={item.key}
            className="border-2 border-[#0E509E] p-2 rounded-lg overflow-hidden shadow-md bg-white"
          >
            {/* Image */}
            <div className="w-full h-64 relative">
              <Image
                src={item.img}
                alt={t(item.key)}
                fill
                className="object-cover rounded-lg transition-transform duration-500 ease-in-out transform hover:scale-105"
              />
            </div>
            {/* Label */}
            <div className="bg-[#FACC48] py-3 text-center font-semibold rounded-lg text-[#363636] mt-2 hover:bg-[#0E509E] hover:text-white transition">
              {t(item.key)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
