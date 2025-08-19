"use client";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Ajay Kumar",
    text: "This handy tool helps you create dummy text for all your layout needs. We are gradually adding new. This handy tool helps you create dummy text for all your layout needs.",
    image: "/assets/home/Testimonials.png",
    rating: 5,
  },
  {
    name: "Pooja Sharma",
    text: "Excellent service and quality. Highly recommend for all industrial needs.",
    image: "/assets/home/Testimonials.png",
    rating: 5,
  },
  {
    name: "Ravi Verma",
    text: "Professional and efficient team. Delivered exactly what was promised.",
    image: "/assets/home/Testimonials.png",
    rating: 4,
  },
  {
    name: "Sneha Patel",
    text: "Very satisfied with the product and support provided.",
    image: "/assets/home/Testimonials.png",
    rating: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="flex flex-col md:flex-row items-center bg-white Section">
      {/* Left side */}
      <div className="w-full md:w-2/4 flex flex-col items-center px-6 mb-8 md:mb-0 text-center">
        <span className="bg-[#0E509E] text-white px-4 py-1 rounded-md text-lg font-medium mb-4">
          TESTIMONIALS
        </span>
        <h2 className="text-2xl md:text-3xl font-semibold text-[#151616]">
          Client’s Feedback & Reviews
        </h2>
      </div>

      {/* Right side */}
      <div className="w-full md:w-2/4 bg-[#FACC48] flex items-center justify-center px-6 py-10 relative ">
        {/* Prev Button - outside card */}
        <button
          onClick={prevSlide}
          className="absolute left-0 md:-left-0 bg-white rounded-full p-2 shadow hover:bg-gray-100"
        >
          <ChevronLeft className="text-[#0E509E]" />
        </button>

        {/* Testimonial Card */}
        <div className="bg-white w-[380px] md:w-[500px] h-[250px] rounded-lg p-6 shadow-md flex flex-col justify-between text-left transition-all duration-500">
          {/* Stars */}
          <div className="flex justify-start mb-2">
            {Array.from({ length: testimonials[current].rating }).map((_, i) => (
              <Star
                key={i}
                className="w-5 h-5 text-[#0E509E] fill-[#0E509E]"
              />
            ))}
          </div>

          {/* Text */}
          <p className="text-gray-700 flex-1">{testimonials[current].text}</p>

          {/* User */}
          <div className="flex items-center mt-4 space-x-3">
            <Image
              width={40}
              height={40}
              src={testimonials[current].image}
              alt={testimonials[current].name}
              className="rounded-full object-cover"
            />
            <span className="font-semibold text-[#151616]">
              {testimonials[current].name}
            </span>
          </div>
        </div>

        {/* Next Button - outside card */}
        <button
          onClick={nextSlide}
          className="absolute right-0 md:-right-0 bg-white rounded-full p-2 shadow hover:bg-gray-100"
        >
          <ChevronRight className="text-[#0E509E]" />
        </button>
      </div>
    </section>
  );
}
    