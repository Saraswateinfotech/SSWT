"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const TabLayout = ({ closeDrawer, setIsQuoteFormOpen }) => {
  const [activeId, setActiveId] = useState("home");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "home-about",
        "home-services",
        "home-industries",
        "home-portfolio",
        "home-contact",
      ];

      const currentSection = sections.find((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveId(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getLinkClassName = (id) => {
    return `font-semibold text-xl no-underline ${
      activeId === id ? "text-[#1a3c93]" : "text-[#6a6e72]"
    } hover:no-underline`;
  };

  const navigationItems = [
    { id: "home", label: "Home", path: "/" },
    { id: "home-about", label: "About Us", path: "#home-about" },
    { id: "home-services", label: "Services", path: "#home-services" },
    { id: "home-portfolio", label: "Portfolio", path: "#home-portfolio" },
    { id: "home-testimonials", label: "Testimonials", path: "#home-testimonials" },
    { id: "home-contact", label: "Contact Us", path: "#home-contact" },
  ];

  return (
    <div className="bg-white fixed top-0 right-0 w-64 h-full shadow-lg z-30 transition-transform transform duration-300 ease-in-out overflow-y-scroll">
      <ul className="flex flex-col p-4">
        <button type="button" className="self-end p-2" onClick={closeDrawer}>
          <svg
            className="w-7 h-7 text-[#264262]"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-[10px] pt-12">
          <button
            type="button"
            className="text-white hover:no-underline hover:text-white bg-[#043F9B] hover:bg-transparent hover:border-2 hover:border-[#ff806b] font-medium rounded-full text-sm px-6 py-2 text-center transition-all duration-500 w-full"
            onClick={() => {
              console.log("Opening quote form");
              setIsQuoteFormOpen(true);
            }}
          >
            Get a Quote
          </button>
        </div>

        <div className="pt-4">
          {navigationItems.map((item) => (
            <div key={item.id} className="p-[10px]">
              <Link
                href={item.path}
                className={getLinkClassName(item.id)}
                onClick={() => {
                  setActiveId(item.id);
                  closeDrawer();
                }}
              >
                {item.label}
              </Link>
            </div>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default TabLayout;