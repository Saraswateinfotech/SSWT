import React from "react";

export default function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center text-left bg-gradient-to-r from-gray-100 via-gray-300 to-gray-200">
      <div className="px-4 md:px-20 lg:px-6 py-12 max-w-screen-xl">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Welcome to Your <span className="text-[#043F9B]">Career Journey</span>
        </h1>
        <p className="mt-4 text-lg md:text-3xl text-gray-600">
          Discover{" "}
          <span className="underline decoration-[#043F9B]">opportunities</span>,
          grow your{" "}
          <span className="underline decoration-[#043F9B]">skills</span>, and
          achieve your{" "}
          <span className="underline decoration-[#043F9B]">dreams with us</span>
          .
        </p>
      </div>
    </div>
  );
}
