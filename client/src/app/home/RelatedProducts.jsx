"use client";
import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function RelatedProducts() {
  const { t } = useTranslation();

  const products = [
    { img: "/assets/home/RelatedProducts1.png", key: "mechanicalFaceSeals" },
    { img: "/assets/home/RelatedProducts2.png", key: "sintered" },
  ];

  return (
    <div className="Section bg-white" id="Products">
      {/* Title */}
      <h2 className="Heading text-center mb-8">{t("relatedProductsTitle")}</h2>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {products.map((product, idx) => (
          <div key={idx} className="flex flex-col items-center">
            {/* Image container with fixed height */}
            <div className="border border-[#000]25 rounded-lg shadow-sm hover:shadow-xl transition-all duration-200 flex items-center justify-center h-[60vh] w-full">
              <Image
                src={product.img}
                alt={t(product.key)}
                width={933}
                height={512}
                className="h-[55vh] max-w-full object-contain rounded-md transition-transform duration-500 ease-in-out transform hover:scale-105"
              />
            </div>

            {/* Title below image */}
            <p className="text-[#0E509E] text-lg font-medium mt-4 text-center">
              {t(product.key)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
