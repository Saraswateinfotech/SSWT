"use client";
import React from "react";
import { Quicksand, Roboto } from "next/font/google";

const quick = Quicksand({
  subsets: ["latin"],
  weight: ["700"],
});

const quick1 = Quicksand({
  subsets: ["latin"],
  weight: ["500"],
});

const SDLC = () => {
  return (
    <div id="home-sdlc" className="bg-gray-50 py-12">
      {/* Section Header */}
      <div className="text-center mb-5">
        <h2
          className={`text-xl md:text-3xl font-bold text-[#0e47c0] ${quick.className}`}
        >
          Our Process 
        </h2>
      </div>
      <div className={`text-center px-2 sm:px-20 pb-10 ${quick1.className}`}>
        <p>
          In essence, our SDLC framework ensures excellence at every stage of
          software development. By integrating innovative strategies and a
          client-centric approach, we deliver tailored solutions that drive
          success. Partner with us to transform your vision into reality and
          achieve remarkable growth in today's competitive landscape.
        </p>
      </div>
      {/* Circle Steps with Flexbox */}
      <div className="relative flex flex-wrap justify-center items-center max-w-6xl mx-auto px-4 md:px-8 space-y-8 md:space-y-0">
        {/* Step 1 - Requirement Analysis */}
        <div className="relative flex flex-col items-center text-center w-full md:w-1/3 lg:w-1/4 p-4">
          <div className="bg-orange-500 w-24 h-24 rounded-full flex items-center justify-center mb-4">
            <span className="text-white text-4xl">🔍</span>
          </div>
          <h3 className="font-bold text-lg">Requirement Analysis</h3>
          <p className="text-gray-600 text-sm">
            Gathering business requirements and identifying customer needs to
            outline the project goals and objectives.
          </p>
        </div>

        {/* Step 2 - Design */}
        <div className="relative flex flex-col items-center text-center w-full md:w-1/3 lg:w-1/4 p-4">
          <div className="bg-green-500 w-24 h-24 rounded-full flex items-center justify-center mb-4">
            <span className="text-white text-4xl">🎨</span>
          </div>
          <h3 className="font-bold text-lg">Design</h3>
          <p className="text-gray-600 text-sm">
            Creating wireframes, mockups, and system architecture to ensure
            smooth user experience and visual appeal.
          </p>
        </div>

        {/* Step 3 - Development */}
        <div className="relative flex flex-col items-center text-center w-full md:w-1/3 lg:w-1/4 p-4">
          <div className="bg-red-500 w-24 h-24 rounded-full flex items-center justify-center mb-4">
            <span className="text-white text-4xl">💻</span>
          </div>
          <h3 className="font-bold text-lg">Development</h3>
          <p className="text-gray-600 text-sm">
            Writing code and building features based on design and requirements,
            ensuring functionality.
          </p>
        </div>

        {/* Step 4 - Testing */}
        <div className="relative flex flex-col items-center text-center w-full md:w-1/3 lg:w-1/4 p-4">
          <div className="bg-blue-500 w-24 h-24 rounded-full flex items-center justify-center mb-4">
            <span className="text-white text-4xl">🧪</span>
          </div>
          <h3 className="font-bold text-lg">Testing</h3>
          <p className="text-gray-600 text-sm">
            Running multiple tests to ensure the product is bug-free, secure,
            and performs optimally.
          </p>
        </div>

        {/* Step 5 - Deployment */}
        <div className="relative flex flex-col items-center text-center w-full md:w-1/3 lg:w-1/4 p-4">
          <div className="bg-purple-500 w-24 h-24 rounded-full flex items-center justify-center mb-4">
            <span className="text-white text-4xl">🚀</span>
          </div>
          <h3 className="font-bold text-lg">Deployment</h3>
          <p className="text-gray-600 text-sm">
            Launching the final product in the production environment, ready for
            users.
          </p>
        </div>

        {/* Step 6 - Maintenance */}
        <div className="relative flex flex-col items-center text-center w-full md:w-1/3 lg:w-1/4 p-4">
          <div className="bg-pink-500 w-24 h-24 rounded-full flex items-center justify-center mb-4">
            <span className="text-white text-4xl">🔧</span>
          </div>
          <h3 className="font-bold text-lg">Maintenance</h3>
          <p className="text-gray-600 text-sm">
            Providing continuous support and updates to ensure smooth
            performance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SDLC;