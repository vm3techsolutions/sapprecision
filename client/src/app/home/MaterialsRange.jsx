"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function SinteredProducts() {
  const { t } = useTranslation();

  return (
    <section className="Section bg-white" id="Overview">
      {/* Description */}
      <p className="text-center mx-auto text-gray-700 mb-8">
        {t("SinteredDescription")}
      </p>

      {/* Two Equal Boxes */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-12">
        
        {/* Box 1 */}
        <div className="bg-[#0E509E] hover:bg-[#FACC48] transition text-white p-6 rounded-md sm:w-80 sm:h-44 flex flex-col items-center justify-center text-center">
          <Image
            src="/assets/home/Materials.png" 
            alt={t("Materials")}
            width={60}
            height={60}
            className="mb-3 transition-transform duration-500 ease-in-out transform hover:scale-105"
          />
          <h3 className="text-xl font-semibold">{t("Materials")}</h3>
          <p className="text-sm mt-1">{t("MaterialsList")}</p>
        </div>

        {/* Box 2 */}
        <div className="bg-[#0E509E] hover:bg-[#FACC48] transition text-white p-6 rounded-md sm:w-80 sm:h-44 flex flex-col items-center justify-center text-center">
          <Image
            src="/assets/home/SizeRange.png" 
            alt={t("Size Range")}
            width={60}
            height={60}
            className="mb-3 transition-transform duration-500 ease-in-out transform hover:scale-105"
          />
          <h3 className="text-xl font-semibold">{t("Size Range")}</h3>
          <p className="text-sm mt-1">{t("SizeRangeValues")}</p>
        </div>
      </div>
    </section>
  );
}
