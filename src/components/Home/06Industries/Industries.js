import React from "react";
import { motion } from "framer-motion";
import { Montserrat_Alternates, Poppins, Yatra_One } from "next/font/google";

const pop = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

const mons = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["400"],
});

const yatra = Yatra_One({
  subsets: ["latin"],
  weight: ["400"],
});

const industriesData = [
  {
    id: 1,
    title: "Real Estate and Construction",
    image: "/Home/indus/real.webp",
    description:
      "Turn your aspirations in real estate into reality by top-level architects and builders. Create the future in perfectly tailored spaces.",
  },
  {
    id: 2,
    title: "Education",
    image: "/Home/indus/edu.webp",
    description:
      "Innovative approaches to education that inspire learning and shape the future are the ones we want to implement. Give your institution the latest technology and a wide range of interactive activities.",
  },
  {
    id: 3,
    title: "Retail & Ecommerce",
    image: "/Home/indus/retail.webp",
    description:
      "Transform your business with innovative retail solutions and smooth eCommerce channels that have the ability to engage customers and enhance sales like never before.",
  },
  {
    id: 4,
    title: "Travel",
    image: "/Home/indus/hos.webp",
    description:
      "Now you can enjoy luxury travel with new solutions that promise simplicity in travel. Enhance your services and transform how your clients experience travel.",
  },
  {
    id: 5,
    title: "Industrial Sector",
    image: "/Home/indus/menufac.webp",
    description:
      "Develop your industrial activities using advanced solutions which are designed to be efficient and scalable. Increase production capabilities and make your industrial dream a tangible concept.",
  },
  {
    id: 6,
    title: "Healthcare",
    image: "/Home/indus/hospital.webp",
    description:
      "Utilize advanced healthcare solutions that are both modern and reliable in order to deliver top-quality outcomes. Continuous technological innovation that enhances healthcare service delivery is the ultimate goal.",
  },
  {
    id: 7,
    title: "Technology Services",
    image: "/Home/indus/tech(2).webp",
    description:
      "Embrace technology services that are at the forefront and will ensure growth for your business. We make it seamless as well as effective when it comes to the digital transformation whether it is IT services or cloud computing.",
  },
  {
    id: 8,
    title: "Professional Services",
    image: "/Home/indus/pro.webp",
    description:
      "From management consulting to social media marketing, let us help you achieve any business goal through our specialized expert services. First of all, we help you formulate a plan, approve marketing strategies, and generate profits.",
  },
];

const Industries = () => {
  // Animation settings for the card hover and view
  const cardHoverEffect = {
    scale: 1.05,
    transition: { duration: 0.5 },
  };

  const fadeInEffect = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <div
      id="home-industries"
      className="min-h-screen pt-12 px-4 py-20"
    >
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center">
          <motion.h2
            className={`text-3xl md:text-5xl font-extrabold text-gray-900 ${yatra.className}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Our Industries
          </motion.h2>
          <motion.p
            className={`text-gray-800 mt-2 mb-10 text-[20px] text-center ${mons.className}`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Highlight the key industries you specialize in to show your
            expertise across sectors.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {industriesData.map((industry) => (
            <motion.div
              key={industry.id}
              className="relative overflow-hidden group w-full h-[250px] md:h-[300px] rounded-3xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInEffect}
              whileHover={cardHoverEffect}
            >
              <img
                src={industry.image}
                alt={industry.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black/100 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

              {/* Title: Visible by default, hidden on hover */}
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 py-4 text-center transition-all duration-300 group-hover:opacity-0 shadow-2xl shadow-black">
                <h3
                  className={`text-white text-[16px] md:text-[18px] font-bold ${mons.className}`}
                >
                  {industry.title}
                </h3>
              </div>

              {/* Content: Hidden by default, slides up on hover */}
              <div className="absolute bottom-0 left-0 w-full py-4 text-center transition-all duration-300 transform translate-y-full group-hover:translate-y-0">
                <h3
                  className={`text-white text-[18px] md:text-[20px] font-bold ${mons.className} mb-5`}
                >
                  {industry.title}
                </h3>
                <p
                  className={`text-white px-4 text-justify ${pop.className} text-[16px] md:text-[14px] mb-5`}
                >
                  {industry.description}
                </p>
                {/* <button
                  className={`bg-blue-500 hover:bg-blue-700 text-white font-semibold py-[10px] px-[16px] mt-[10px] text-[12px] md:text-[14px] lg:text-[16px] flex items-center justify-center gap-2 ml-5 ${pop.className}`}
                >
                  Read More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-4 h-4 md:w-5 md:h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Industries;
