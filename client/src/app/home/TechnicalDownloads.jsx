"use client";
import React from "react";
import { useTranslation } from "react-i18next";

export default function TechnicalResources() {
  const { t } = useTranslation();

  const resources = [
    { key: "productDataSheet" },
    { key: "dimensionTables" },
    { key: "coatingOptions" },
    { key: "maintenanceGuide" },
  ];

  return (
    <section className="Section bg-white" id="Downloads">
      {/* Title */}
      <h2 className="Heading text-center mb-8">
        {t("technicalDownloadsTitle")}
      </h2>

      {/* Resources Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
        {resources.map((item, index) => (
          <div
            key={index}
            className="bg-[#0E509E] text-white text-center py-10 rounded-md flex flex-col items-center justify-center space-y-2 hover:bg-[#FACC48] transition"
          >
            <p className="text-sm sm:text-base md:text-lg font-medium uppercase tracking-wide">
              {t(item.key)}
            </p>
            <span className="text-lg sm:text-xl font-bold">{">>"}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
