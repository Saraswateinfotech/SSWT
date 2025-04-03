// components/ServiceComponent.jsx
"use client";
import React from "react";
import TechCarousel from "./TechCarousel";

export default function ServiceComponent({ service, variant, isActive }) {
  if (variant === "list") {
    // Render a simple title + icon for list display.
    return (
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h3 className={`text-[20px] ${isActive ? 'text-white' : 'text-black'} font-medium`}>{service.title}</h3>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className={isActive ? "text-white" : "text-black"}
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M6.646 14.854a.5.5 0 0 1-.708-.708L9.793 10l-3.855-3.854a.5.5 0 1 1 .708-.708l4.147 4.146a.5.5 0 0 1 0 .708l-4.147 4.146z"
          />
        </svg>
      </div>
    );
  }
  // For description variants (desktop detail or mobile detail)
  return (
    <div>
      {service.description.paragraphs.map((para, idx) => (
        <p key={idx} className="mb-2 text-gray-700">
          {para}
        </p>
      ))}
      {service.description.bullets &&
        service.description.bullets.length > 0 && (
          <ul className="list-disc ml-6 space-y-1 text-gray-600">
            {service.description.bullets.map((bullet, idx) => (
              <li key={idx}>{bullet}</li>
            ))}
          </ul>
        )}
      {/* Render the carousel if techLogos exist */}
      {service.description.techs &&
        service.description.techs.length > 0 && (
          <div className="mt-4">
            <TechCarousel logos={service.description.techs} />
          </div>
        )}
    </div>
  );
}
