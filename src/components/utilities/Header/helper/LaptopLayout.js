"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import QuoteForm from "./QuoteForm";

const LaptopLayout = ({ toggleDrawer }) => {
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navigationItems = [
    { id: "home", label: "Home" },
    { id: "home-about", label: "About Us" },
    { id: "home-services", label: "Services" },
    { id: "home-portfolio", label: "Portfolio" },
    { id: "home-testimonials", label: "Testimonials" },
    { id: "home-contact", label: "Contact Us" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-100px 0px -100px 0px" }
    );

    navigationItems.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleSmoothScroll = (e, sectionId) => {
    e.preventDefault();
    document
      .getElementById(sectionId.replace("#", ""))
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const getLinkClassName = (sectionId) => {
    const cleanSectionId = sectionId.replace("#", "");
    return `transition duration-300 ease-in-out transform hover:scale-105 ${
      activeSection === cleanSectionId
        ? "text-[#1e3b96]"
        : "hover:text-[#1e3b96ba]"
    }`;
  };

  return (
    <div className="relative">
      <div className="flex justify-end lg:justify-between">
        <div className="lg:flex">
          <Link href="#home" onClick={(e) => handleSmoothScroll(e, "#home")}>
            <img
              src="/sswt-logo.png"
              className="h-12 sm:h-16 absolute -top-1 sm:-top-3 lg:left-auto left-2"
            />
          </Link>
        </div>

        <div className="flex gap-x-5">
          <div className="hidden lg:flex space-x-6">
            <ul className="flex m-0 flex-row items-center font-medium">
              {navigationItems.slice(1, 6).map(({ id, label }) => (
                <li key={id}>
                  <Link
                    href={`#${id}`}
                    className={getLinkClassName(`#${id}`)}
                    onClick={(e) => handleSmoothScroll(e, `#${id}`)}
                  >
                    <div className="block py-1 px-3 rounded">{label}</div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center space-x-2 lg:space-x-4">
            <button
              onClick={() => setIsQuoteFormOpen(true)}
              className="hover:no-underline bg-[#1e3b96] text-[#EBF5FB] hover:text-[#1e3b96] hover:bg-transparent hover:border-2 hover:border-[#1e3b96] font-medium rounded-full text-sm px-6 hover:px-[22px] py-2 hover:py-[6px] text-center transition-all duration-500"
            >
              Get a Quote
            </button>

            <button
              className="lg:hidden inline-flex items-center"
              onClick={toggleDrawer}
            >
              <svg
                className={`w-7 h-7 text-[#2C3E50]`}
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isQuoteFormOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg relative w-full max-w-md mx-auto">
            <button
              onClick={() => setIsQuoteFormOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              &times;
            </button>
            <QuoteForm onClose={() => setIsQuoteFormOpen(false)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default LaptopLayout;
