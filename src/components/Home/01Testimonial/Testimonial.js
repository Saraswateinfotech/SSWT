import React, { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Roop Singh",
    company: "Passageway",
    testimonial:
      "Saraswate is more than just a business partner. Their streamlined process and talented manpower collaborated with our team for developing the wonderful projects and platforms.",
  },
  {
    name: "Shyamsundar Rathore",
    company: "Readybytes",
    testimonial:
      "Working with Saraswate is a wonderful journey. Their strategic thinking and never miss the deadline motto had brought a tremendous growth to both of us and our partners too.",
  },
  {
    name: "Devraj Sharma",
    company: "Resumesentry",
    testimonial:
      "Team Saraswate developed wonderful project for us for data entry, designed to support both freelancers and an admin role, streamlining operations with an efficient system.",
  },
  {
    name: "Deendayal Meena",
    company: "Marketing Mistri",
    testimonial:
      "Marketing Mistri wholeheartedly praises the Saraswate team's innovative approach. Their on time delivery approach and streamlined operations made our clients to repeated client.",
  },
];

export default function Testimonial() {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [total]);

  const nextSlide = () => {
    setCurrent(current === total - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? total - 1 : current - 1);
  };

  return (
    <div id="home-testimonials" className="relative max-w-3xl mx-auto py-16 px-4">
      <h2 className="font-medium text-3xl mb-1">Testimonials</h2>
      <div className="h-1 w-16 bg-[#043F9B] mb-4 rounded-full"></div>
      <h1 className="mb-10 text-5xl font-semibold">
        Hear From <span className="text-[#043f9b]">Our Clients</span>:
      </h1>
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {testimonials.map((item, index) => (
            <div key={index} className="w-full flex-shrink-0 px-4">
              <div className="text-[#043F9B] text-5xl">&#8220;</div>
              <h2 className="mb-2 text-xl font-bold">{item.name}</h2>
              <p className="mb-4 text-sm text-gray-600">{item.company}</p>
              <p className="leading-relaxed max-w-2xl mx-auto text-justify text-gray-800">
                {item.testimonial}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-8">
        {testimonials.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 w-2 rounded-full mx-1 cursor-pointer ${
              current === index ? "bg-[#043F9B]" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

      {/* Previous Arrow */}
      <div
        onClick={prevSlide}
        className="absolute top-1/2 left-[-40px] transform -translate-y-1/2 cursor-pointer bg-white w-9 h-9 rounded-full shadow items-center justify-center z-10 hidden lg:flex"
      >
        <svg
          fill="#333"
          height="15"
          viewBox="0 0 24 24"
          width="15"
          xmlns="http://www.w3.org/2000/svg"
          className="rotate-180"
        >
          <path d="M12.707 17.707a1 1 0 0 1-1.414-1.414L14.586 13H7a1 1 0 1 1 0-2h7.586l-3.293-3.293a1 1 0 1 1 1.414-1.414l5 5a1.002 1.002 0 0 1 0 1.414l-5 5z" />
        </svg>
      </div>

      {/* Next Arrow */}
      <div
        onClick={nextSlide}
        className="absolute top-1/2 right-[-40px] transform -translate-y-1/2 cursor-pointer bg-white w-9 h-9 rounded-full shadow hidden lg:flex items-center justify-center z-10"
      >
        <svg
          fill="#333"
          height="15"
          viewBox="0 0 24 24"
          width="15"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.707 17.707a1 1 0 0 1-1.414-1.414L14.586 13H7a1 1 0 1 1 0-2h7.586l-3.293-3.293a1 1 0 1 1 1.414-1.414l5 5a1.002 1.002 0 0 1 0 1.414l-5 5z" />
        </svg>
      </div>
    </div>
  );
}
