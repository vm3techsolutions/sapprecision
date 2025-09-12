"use client";
import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function QualityAssurance() {
  const { t } = useTranslation();

  const points = [
    { key: "inhouseTesting" },
    { key: "certifications" },
    { key: "materialTraceability" },
    { key: "precisionInspection" },
  ];

  return (
    <section className="relative w-full" id="Quality">
      {/* Desktop Background image */}
      <div className="absolute inset-0 hidden md:block">
        <Image
          src="/assets/home/CenterBanner.png"
          alt={t("qualityAssuranceTitle")}
          fill
          className="object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#363636]/60"></div>
      </div>

      {/* Mobile Background image */}
      <div className="absolute inset-0 block md:hidden">
        <Image
          src="/assets/home/CenterBanner.png"
          alt={t("qualityAssuranceTitle")}
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
          {t("qualityAssuranceTitle")}
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
                {t(item.key)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
