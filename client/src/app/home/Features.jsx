"use client";
import React from "react";
import { useTranslation } from "react-i18next";

export default function FeaturesBenefits() {
  const { t } = useTranslation();

  const features = [
    { number: "01", text: t("High strength–to–weight ratio") },
    { number: "02", text: t("Precise and consistent dimensions") },
    { number: "03", text: t("Cost–effective for large volume production") },
    { number: "04", text: t("Excellent wear and corrosion resistance") },
    { number: "05", text: t("Self–lubricating") },
    { number: "06", text: t("Environmentally friendly") },
  ];

  return (
    <section className="bg-[#D9D9D9]/12 Section" id="Features">
      {/* Title */}
      <h2 className="Heading text-center mb-8">{t("Features & Benefits")}</h2>

      {/* Fixed Grid with divider lines */}
      <div className="relative mx-auto grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 max-w-6xl">
        {/* Horizontal line */}
        <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 w-[85%] h-[1.5px] bg-[#0E509E]"></div>

        {/* Vertical lines */}
        <div className="hidden md:block absolute left-1/3 top-0 h-full w-[1px] bg-[#0E509E]"></div>
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
