"use client";
import { Outfit, Yatra_One } from "next/font/google";
import { motion } from "framer-motion";
import { FaCircleCheck } from "react-icons/fa6";
import { useState } from "react";
import QuoteForm from "@/components/utilities/Header/helper/QuoteForm";

const aboutText = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const points = [
  "We transform your ideas into cutting-edge digital solutions with excellence in technology.",
  "From design to marketing, we provide complete end-to-end services for your business growth.",
  "We build lasting partnerships focused on sustainable success and innovation.",
];

const About = () => {
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);

  return (
    <section
      id="home-about"
      className="sm:pb-12 py-10 px-4 lg:px-16 md:pr-6 text-[#28405b] max-w-screen-2xl m-auto"
    >
      <div className="gap-8 lg:gap-16 flex flex-col md:flex-row items-center">
        <motion.img
          // src="https://cdn.pixabay.com/photo/2017/03/28/12/11/chairs-2181960_1280.jpg"
          src="undraw_in-the-office_ma2b.png"
          className="sm:h-[500px] m-auto hidden md:block object-cover sm:min-w-[300px] lg:min-w-[400px]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ opacity: { duration: 0.8 }, y: { duration: 0.8 } }}
        />
        <div>
          <motion.h1
            className={`font-bold text-4xl sm:text-[40px] mb-3 text-[#28405b]`}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              opacity: { duration: 0.8, delay: 0.2 },
              x: { duration: 0.8, delay: 0.2 },
            }}
          >
            About <span className="text-[#043F9B]">Saraswate</span> Infotech
          </motion.h1>
          <div className="w-16 h-1 bg-[#043F9B] rounded-full mb-8"></div>
          <img
            // src="https://cdn.pixabay.com/photo/2017/03/28/12/11/chairs-2181960_1280.jpg"
            src="undraw_in-the-office_ma2b.png"
            className="sm:h-[500px] h-[400px] w-auto md:hidden m-auto object-cover sm:min-w-[300px] mb-10"
          />
          <motion.div
            className="bg-[#e6e6e6] mb-5 sm:mb-10 p-8 px-6 lg:w-11/12 border-l-4 border-[#043F9B]"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              opacity: { duration: 0.8, delay: 0.4 },
              x: { duration: 0.8, delay: 0.4 },
            }}
          >
            <h5 className="text-justify">
              An end-to-end service where we make sure what you imagine is
              fulfilled with excellence in technology, creativity and marketing
              strategy provides value for both companies but also benefit and
              success through the partnership.
            </h5>
          </motion.div>
          <motion.div
            className="space-y-4 lg:w-11/12 text-justify"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              opacity: { duration: 0.8, delay: 0.6 },
              x: { duration: 0.8, delay: 0.6 },
            }}
          >
            {points.map((point, index) => (
              <div key={index} className="flex items-start gap-3">
                <FaCircleCheck className="text-[#3ca53c] mt-1 text-lg flex-shrink-0" />
                <p className="text-base">{point}</p>
              </div>
            ))}
          </motion.div>
          <motion.button
            className="bg-[#043F9B] py-3 text-white px-6 font-medium text-xl rounded-sm mt-6 sm:mt-8 transition-all duration-500 hover:scale-105"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              opacity: { duration: 0.8, delay: 0.8 },
              x: { duration: 0.8, delay: 0.8 },
            }}
            onClick={() => setIsQuoteFormOpen(true)}
          >
            Fix An Appointment
          </motion.button>
          {isQuoteFormOpen && (
            <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
              <div className="bg-white p-6 rounded-lg shadow-lg relative w-full max-w-md mx-auto">
                <button
                  onClick={() => setIsQuoteFormOpen(false)}
                  className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                >
                  &times;
                </button>
                <QuoteForm onClose={() => setIsQuoteFormOpen(false)} />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
