"use client";
import LaptopLayout from "./helper/LaptopLayout";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import TabLayout from "./helper/TabLayout";
import QuoteForm from "./helper/QuoteForm";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsDrawerOpen(false);
    setIsQuoteFormOpen(false); // Close modal on route change
  }, [pathname]);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <div className="flex justify-between items-center">
        {isDrawerOpen && (
          <div
            className="fixed inset-0 z-10 bg-gray-900 opacity-50 transition-opacity duration-300"
            onClick={closeDrawer}
          />
        )}
      </div>

      <nav className="fixed w-full z-[1000] bg-white text-[#2C3E50] border-b-2 border-b-gray-300">
        <div className="py-5 px-1 sm:px-4 lg:px-16 m-auto max-w-screen-2xl">
          <LaptopLayout
            toggleDrawer={toggleDrawer}
            setIsQuoteFormOpen={setIsQuoteFormOpen}
          />
          {isDrawerOpen && (
            <TabLayout
              closeDrawer={closeDrawer}
              setIsQuoteFormOpen={setIsQuoteFormOpen}
            />
          )}
        </div>
      </nav>

      {isQuoteFormOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-[1000]">
          <div className="bg-white p-6 rounded-lg shadow-lg relative w-full max-w-md mx-auto">
            <button
              onClick={() => {
                console.log("Closing quote form");
                setIsQuoteFormOpen(false);
              }}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              aria-label="Close quote form"
            >
              ×
            </button>
            <QuoteForm onClose={() => setIsQuoteFormOpen(false)} />
          </div>
        </div>
      )}
    </>
  );
};

export default Header;