// components/ServiceListMobile.jsx
"use client";
import { motion, AnimatePresence } from "framer-motion";
import ServiceComponent from "./ServiceComponent";

export default function ServiceListMobile({ services, activeIndex, setActiveIndex }) {
  return (
    <div className="lg:hidden flex flex-col space-y-4">
      <div className="space-y-4 max-h-[600px] overflow-y-auto">
        {services.map((service, index) => {
          const isActive = index === activeIndex;
          return (
            <motion.div
              key={index}
              className="border rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <button
                className={`w-full text-left p-4 flex items-center justify-between ${
                  isActive ? "bg-[#043F9B] text-white" : "bg-white text-[#1d1926]"
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <div className="flex items-center space-x-4">
                  <svg
                    width="16"
                    height="21"
                    viewBox="0 0 16 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 8.15948C16 3.65315 12.4183 0 8 0C3.58174 0 0 3.65315 0 8.15948C0 10.7867 1.21712 13.1237 3.10821 14.6161L8.67023 20.3994C9.4278 21.1871 10.719 20.3625 10.323 19.3438L9.5731 17.4147C9.33971 16.8144 9.72995 16.1548 10.3448 15.9628C13.619 14.9407 16 11.8337 16 8.15948Z"
                      fill={isActive ? "white" : "#a3b9c9"}
                    />
                  </svg>
                  <h3 className="text-[14px] font-medium">{service.title}</h3>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className={`transform transition-transform duration-200 ${
                    isActive ? "rotate-90" : ""
                  }`}
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.646 14.854a.5.5 0 0 1-.708-.708L9.793 10l-3.855-3.854a.5.5 0 1 1 .708-.708l4.147 4.146a.5.5 0 0 1 0 .708l-4.147 4.146z"
                  />
                </svg>
              </button>
              <AnimatePresence initial={false} mode="wait">
                {isActive && (
                  <motion.div
                    className="p-4 bg-white text-[#4e5158cc] text-[14px] space-y-4"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ServiceComponent service={service} variant="mobile" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
