"use client";
import React from "react";
import { motion } from "framer-motion";
import { Montserrat_Alternates, Poppins, Sriracha } from "next/font/google";

const pop = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

const mons = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["400"],
});

const sriracha = Sriracha({
  subsets: ["latin"],
  weight: ["400"],
});

// JSON Array for the cards data
const cardData = [
  {
    id: 1,
    title: "Expert Team",
    image: "/Home/indus/expert.webp",
    description:
      "A dynamic group of skilled professionals driven by creativity and expertise. Our team collaborates seamlessly to craft innovative, impactful solutions tailored to your needs.",
    gradient: "from-[#0017ff]/90 to-[#186980]/30",
  },
  {
    id: 2,
    title: "Innovative Technologies",
    image: "/Home/indus/technolo.webp",
    description:
      "Harnessing cutting-edge advancements like AI, blockchain, and IoT, we build future-ready solutions that boost efficiency and scalability.",
    gradient: "from-[#0a0f24]/90 via-[#1e3a72]/80 to-[#8b34a8]/70",
  },
  {
    id: 3,
    title: "Client-Centric Approach",
    image: "/Home/indus/approch.webp",
    description:
      "Your goals guide our process. We ensure seamless communication, personalized solutions, and an experience designed to exceed expectations.",
    gradient: "from-[#ff0099]/90 via-[#6600ff]/70 to-[#001f4d]/60",
  },
  {
    id: 4,
    title: "Robust Security Protocols",
    image: "/Home/indus/sec.webp",
    description:
      "Advanced security measures safeguard your data with encryption, threat detection, and proactive defenses against evolving risks.",
    gradient: "from-[#ff007f]/80 via-[#b300b3]/70 to-[#003366]/80",
  },
];

const Differ = () => {
  return (
    <div className="relative pb-20 pt-8 bg-gradient-to-r bg-fixed bg-cover"
    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2VydmljZXN8ZW58MHx8MHx8fDA%3D')" }}> 
      <div className="absolute bg-black/50 inset-0 top-0 left-0"></div>
      <h1
        className={` ${sriracha.className} relative pb-0 mb-0 xl:px-12 text-white px-5 text-center text-transparent text-[24px] md:text-[48px] bg-clip-text font-bold`}
      >
        How We Differ
      </h1>
      <p
        className={`${pop.className} text-white relative text-center mb-8 text-[14px] md:text-[20px]`}
      >
        Highlight your unique selling propositions to differentiate your company
        from competitors.
      </p>
      <div className="container px-4 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cardData.map((card) => (
          <motion.div
            key={card.id}
            className="relative text-white p-6 w-full h-[520px] shadow-2xl flex flex-col justify-between overflow-hidden transform perspective-1000"
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 85%, 0% 100%)", // Diagonal clip-path
            }}
            whileHover={{
              rotateX: -10,
              rotateY: 10,
              scale: 1.05,
              transition: { duration: 0.5 },
            }}
          >
            {/* Background Image with Zoom-in Effect */}
            <motion.div
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${card.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              initial={{ scale: 1 }} // Initial state (no zoom)
              animate={{ scale: 1.1 }} // Final state (zoomed in)
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }} // Smooth transition
            />

            {/* Overlay Gradient */}
            <div
              className={`absolute inset-0 bg-gradient-to-b ${card.gradient} rounded-lg`}
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 85%, 0% 100%)", // Same clip-path for gradient overlay
              }}
            ></div>

            {/* Content */}
            <div className="relative">
              {/* Title Section */}
              <h2
                className={`text-3xl font-bold leading-tight ${pop.className}`}
                style={{
                  textShadow: "4px 4px 20px rgba(0, 0, 0, 1)", // Increased shadow blur and opacity for more prominence
                }}
              >
                {card.title}
              </h2>
              <hr className="w-10 border-t-2 border-white mt-5 mb-5" />

              {/* Description */}
              <p
                className={`text-[16px] leading-relaxed mb-8 ${mons.className} text-justify`}
                style={{
                  textShadow: "3px 3px 15px rgba(0, 0, 0, 1)", // Enhanced shadow for more visibility
                }}
              >
                {card.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Differ;