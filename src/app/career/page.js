"use client";
import AboutTeam from "@/components/Career/AboutTeam.js/AboutTeam";
import Hero from "@/components/Career/Hero/Hero";

const CareerPage = () => {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center backdrop-blur-lg bg-white/5">
        <div className="w-full px-4 md:px-20 lg:px-10 max-w-screen-2xl">
          <nav className="flex items-center py-4">
            <img src="/sswt-logo.png" alt="SSWT Logo" className="h-14" />
          </nav>
        </div>
      </div>
      <Hero />
      <AboutTeam />
    </>
  );
};

export default CareerPage;
