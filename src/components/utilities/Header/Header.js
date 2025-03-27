"use client";

import LaptopLayout from "./helper/LaptopLayout";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import TabLayout from "./helper/TabLayout";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsDrawerOpen(false);
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

      <nav className={`fixed w-full z-[1000] bg-white text-[#2C3E50] border-b-2 border-b-gray-300`}>
        <div className="py-5 px-4 lg:px-16 m-auto max-w-screen-2xl">
          <LaptopLayout toggleDrawer={toggleDrawer} />

          {isDrawerOpen && (
            <TabLayout closeDrawer={closeDrawer} />
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;
