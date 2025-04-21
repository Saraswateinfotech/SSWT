"use client";
import AboutTeam from "@/components/Career/AboutTeam.js/AboutTeam";
import Benefits from "@/components/Career/Benefits/Benefits";
import Hero from "@/components/Career/Hero/Hero";
import JobSection from "@/components/Career/JobSection/JobSection";

const CareerPage = () => {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center backdrop-blur-lg bg-white/5">
        <div className="w-full max-w-screen-xl">
          <nav className="flex items-center py-4">
            <img src="/sswt-logo.png" alt="SSWT Logo" className="h-14" />
          </nav>
        </div>
      </div>
      <Hero />
      <AboutTeam />
      <Benefits />
      <JobSection />
    </>
  );
};

export default CareerPage;
