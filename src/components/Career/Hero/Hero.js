import React from "react";

export default function Hero() {
  return (
    <div 
      className="min-h-screen flex items-center justify-center text-left bg-gradient-to-r from-gray-100 via-gray-300 to-gray-200"
      style={{
        backgroundImage: `url('https://plus.unsplash.com/premium_photo-1661421746164-b8b53de3bd4e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGFuZCUyMHNoYWtlfGVufDB8fDB8fHww')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay'
      }}
    >
      <div className="px-4 md:px-20 lg:px-6 py-12 max-w-screen-xl bg-white bg-opacity-80 rounded-lg">
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