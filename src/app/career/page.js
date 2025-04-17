"use client";
import AboutTeam from "@/components/Career/AboutTeam.js/AboutTeam";
import Hero from "@/components/Career/Hero/Hero";

const CareerPage = () => {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-white/5">
        <nav className="flex items-center p-4">
          <a href="/">
            <img src="/sswt-logo.png" alt="SSWT Logo" className="h-14" />
          </a>
        </nav>
      </div>
      <Hero />
      <AboutTeam />
    </>
  );
};

export default CareerPage;
