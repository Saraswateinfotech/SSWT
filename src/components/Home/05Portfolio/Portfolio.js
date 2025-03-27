"use client";
import React from "react";

// Helper function to convert hex to rgba
const hexToRgba = (hex, opacity = 0.2) => {
  const bigint = parseInt(hex.replace("#", ""), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

const featureData = [
  {
    title: "ISKCON Puja",
    description:
      "The ISKCON Puja website offers a smooth booking experience with a combined login/signup popup. Users can book pujas, track status, receive YouTube recordings, and give feedback. A dedicated dashboard handles bookings, users, revenue, slots, and admin controls efficiently.",
    color: "#a045a6",
  },
  {
    title: "Resumes Entry",
    description:
      "The Resumes Entry website includes separate dashboards for admins and freelancers. Admins can upload, manage, and export resume data, while freelancers work on assigned resumes with save and submit options. It also supports KYC verification and secure detail collection.",
    color: "#2151d9",
  },
  {
    title: "ISKCON Jaipur",
    description:
      "This website has been thoughtfully designed to showcase the entire campus and its projects. Developed by our team, it highlights temple events, community initiatives, and spiritual activities with a clean, user-friendly interface that brings the essence of ISKCON Jaipur online.",
    color: "#d17a29",
  },
];

// InfoCard with gradient background and scale on hover
const InfoCard = ({ title, description, color }) => {
  const backgroundGradient = `linear-gradient(to top right, ${hexToRgba(
    color,
    0.12
  )}, transparent)`;

  return (
    <div
      className="shadow-md p-4 rounded-md border-t-[2px] bg-white transition-transform duration-300 transform hover:scale-105"
      style={{
        borderTopColor: color,
        background: backgroundGradient,
      }}
    >
      <h3 className="text-2xl font-medium mb-2 text-[#184A6B]">{title}</h3>
      <p className="text-base text-justify text-gray-600">{description}</p>
    </div>
  );
};

export default function FeatureSection() {
  return (
    <div id="home-portfolio" className="px-4 lg:px-16 py-16 max-w-screen-2xl mx-auto">
      <h2 className="text-4xl md:text-5xl text-center text-[#043F9B] font-bold mb-12">
        <span className="text-[#184A6B]">Our</span> Portfolio
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {featureData.map((item, index) => (
          <InfoCard
            key={index}
            title={item.title}
            description={item.description}
            color={item.color}
          />
        ))}
      </div>
    </div>
  );
}
