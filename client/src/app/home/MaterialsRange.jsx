"use client";
import Image from "next/image";

export default function SinteredProducts() {
  return (
    <section className="Section bg-white " id="Overview">
      {/* Description */}
      <p className="text-center mx-auto text-gray-700 mb-8">
        Sintered products are metal components formed by compacting and heating
        powdered metal without melting. This results in strong, durable, and
        precise parts used in a variety of applications, including automotive,
        appliances, industrial machines, and more.
      </p>

      {/* Two Equal Boxes */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-12">
        
        {/* Box 1 */}
        <div className="bg-[#0E509E] hover:bg-[#FACC48] transition text-white p-6 rounded-md sm:w-80 sm:h-44 flex flex-col items-center justify-center text-center">
          <Image
            src="/assets/home/Materials.png" 
            alt="Materials"
            width={60}
            height={60}
            className="mb-3 transition-transform duration-500 ease-in-out transform hover:scale-105"
          />
          <h3 className="text-xl font-semibold">Materials</h3>
          <p className="text-sm mt-1">Fe, Cu, Bronze, SS</p>
        </div>

        {/* Box 2 */}
        <div className="bg-[#0E509E] hover:bg-[#FACC48] transition text-white p-6 rounded-md sm:w-80 sm:h-44 flex flex-col items-center justify-center text-center">
          <Image
            src="/assets/home/SizeRange.png" 
            alt="Size Range"
            width={60}
            height={60}
            className="mb-3 transition-transform duration-500 ease-in-out transform hover:scale-105"
          />
          <h3 className="text-xl font-semibold">Size Range</h3>
          <p className="text-sm mt-1">5 mm to 200 mm dia</p>
        </div>
      </div>
    </section>
  );
}
