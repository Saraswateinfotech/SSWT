// components/ServiceDescription.jsx
"use client";
import { AnimatePresence, motion } from "framer-motion";
import ServiceComponent from "./ServiceComponent";

export default function ServiceDescription({ services, activeIndex }) {
  return (
    <div className="lg:w-7/12 w-full lg:pl-0 hidden flex-col justify-center lg:flex">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          className="bg-white p-6 shadow-lg rounded-lg flex-grow"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
        >
          <ServiceComponent service={services[activeIndex]} variant="description" />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
