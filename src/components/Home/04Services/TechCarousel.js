"use client";
import React, { useRef } from "react";

export default function TechCarousel({ logos }) {
  const carouselRef = useRef(null);

  // Calculate the width of one carousel item including the gap.
  // Here we assume a gap equivalent to Tailwind's space-x-4 (i.e. 16px).
  const getItemWidth = () => {
    const carousel = carouselRef.current;
    const firstItem = carousel ? carousel.querySelector(".carousel-item") : null;
    return firstItem ? firstItem.offsetWidth + 16 : 0;
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -getItemWidth(),
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: getItemWidth(),
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative mt-8">
      <div ref={carouselRef} className="overflow-hidden whitespace-nowrap scrollbar-hide">
        <div className="flex space-x-4">
          {logos.map((logo, idx) => (
            <div key={idx} className="carousel-item flex-shrink-0">
              <img src={logo} alt={`Logo ${idx}`} className="h-12 w-auto" />
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-1 rounded-full"
      >
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-1 rounded-full"
      >
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}
