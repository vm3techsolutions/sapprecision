"use client";
import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const galleryImages = [
  "/assets/home/Gallery.png",
  "/assets/home/Gallery.png",
  "/assets/home/Gallery.png",
  "/assets/home/Gallery.png",
];

export default function Gallery() {
  const { t } = useTranslation();

  return (
    <div className="Section bg-white" id="Gallery">
      {/* Title */}
      <h2 className="Heading text-center">{t("galleryTitle")}</h2>

      {/* Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-4">
        {galleryImages.map((img, idx) => (
          <div key={idx}>
            <Image
              src={img}
              width={933}
              height={512}
              alt={`${t("galleryTitle")} ${idx + 1}`}
              className="w-full rounded-lg shadow-sm object-cover transition-transform duration-500 ease-in-out transform hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
