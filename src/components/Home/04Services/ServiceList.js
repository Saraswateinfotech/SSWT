"use client";
import { motion } from "framer-motion";
import ServiceComponent from "./ServiceComponent";

export default function ServiceList({
  services,
  activeIndex,
  setActiveIndex,
  scrollContainerRef,
  scrollbarContainerRef,
  scrollbarRef,
  handleScrollbarDrag,
}) {
  return (
    <div className="hidden lg:flex flex-col space-y-4">
      <div className="flex">
        <div
          ref={scrollContainerRef}
          className="h-[350px] w-full space-y-4 overflow-y-auto"
          style={{ position: "relative", scrollbarWidth: "none" }}
        >
          {services.map((service, index) => {
            const isActive = index === activeIndex;
            return (
              <motion.div
                key={index}
                className={`cursor-pointer p-4 border rounded-lg transition-all duration-300 ease-in-out ${
                  isActive
                    ? "bg-[#043F9B] border-[#043F9B] text-white"
                    : "bg-white border-gray-300"
                }`}
                onMouseEnter={() => setActiveIndex(index)}
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <ServiceComponent
                  service={service}
                  variant="list"
                  isActive={index === activeIndex}
                />
              </motion.div>
            );
          })}
        </div>
        <div
          ref={scrollbarContainerRef}
          className="relative w-[10px] h-[350px] bg-gray-300 ml-4 rounded-full"
        >
          <div
            ref={scrollbarRef}
            className="w-full bg-gradient-to-b from-blue-600 to-[#043F9B] rounded-full cursor-pointer transition-transform"
            style={{
              height: scrollbarContainerRef.current
                ? `${
                    (scrollContainerRef.current.clientHeight /
                      scrollContainerRef.current.scrollHeight) *
                    scrollbarContainerRef.current.clientHeight
                  }px`
                : "50px",
              position: "absolute",
              top: 0,
              left: 0,
            }}
            onMouseDown={handleScrollbarDrag}
          ></div>
        </div>
      </div>
    </div>
  );
}
