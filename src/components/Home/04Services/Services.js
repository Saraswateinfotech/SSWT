"use client";
import React, { useState, useRef, useEffect } from "react";
import ServiceList from "./ServiceList";
import ServiceListMobile from "./ServiceListMobile";
import ServiceDescription from "./ServiceDescription";
import { services } from "./servicesData";

export default function ServiceGrid() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef(null);
  const scrollbarRef = useRef(null);
  const scrollbarContainerRef = useRef(null);
  const isDraggingRef = useRef(false);

  const handleScroll = () => {
    const scrollContainer = scrollContainerRef.current;
    const scrollbar = scrollbarRef.current;
    const scrollbarContainer = scrollbarContainerRef.current;
    if (!scrollContainer || !scrollbarContainer || !scrollbar) return;

    const scrollPercentage =
      scrollContainer.scrollTop /
      (scrollContainer.scrollHeight - scrollContainer.clientHeight);
    const scrollbarMaxY =
      scrollbarContainer.clientHeight - scrollbar.clientHeight;
    const scrollbarPosition = scrollPercentage * scrollbarMaxY;

    console.log({
      scrollTop: scrollContainer.scrollTop,
      scrollHeight: scrollContainer.scrollHeight,
      clientHeight: scrollContainer.clientHeight,
      scrollPercentage,
      scrollbarPosition,
    });

    scrollbar.style.transform = `translateY(${scrollbarPosition}px)`;
  };

  const handleScrollbarDrag = (e) => {
    e.preventDefault();
    isDraggingRef.current = true;

    const scrollbar = scrollbarRef.current;
    const scrollContainer = scrollContainerRef.current;
    const scrollbarContainer = scrollbarContainerRef.current;
    if (!scrollContainer || !scrollbarContainer) return;

    const scrollbarMaxY =
      scrollbarContainer.clientHeight - scrollbar.clientHeight;
    const startY = e.clientY;
    const initialTop = scrollbar.offsetTop;

    const moveScrollbar = (moveEvent) => {
      if (!isDraggingRef.current) return;
      const deltaY = moveEvent.clientY - startY;
      const newTop = Math.min(Math.max(0, initialTop + deltaY), scrollbarMaxY);

      console.log({ deltaY, newTop, scrollbarMaxY });
      scrollbar.style.transform = `translateY(${newTop}px)`;

      const scrollPercentage = newTop / scrollbarMaxY;
      scrollContainer.scrollTop =
        scrollPercentage *
        (scrollContainer.scrollHeight - scrollContainer.clientHeight);
    };

    const stopDragging = () => {
      isDraggingRef.current = false;
      document.removeEventListener("mousemove", moveScrollbar);
      document.removeEventListener("mouseup", stopDragging);
    };

    document.addEventListener("mousemove", moveScrollbar);
    document.addEventListener("mouseup", stopDragging);
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div className="bg-gray-200 max-w-full">
      <div
        id="home-services"
        className={`flex flex-col max-w-screen-2xl mx-auto px-5 lg:px-16 py-20 pt-12 space-y-8`}
      >
        <h2 className={`text-xl lg:text-4xl mb-2 font-bold text-[#043F9B]`}>
          <span className="text-[#184A6B]">On-Demand</span> Solutions
        </h2>
        <div className="flex flex-col lg:flex-row mx-auto space-y-8 lg:space-y-0 lg:space-x-8">
          <div className="lg:w-5/12 w-full">
            <ServiceList
              services={services}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
              scrollContainerRef={scrollContainerRef}
              scrollbarContainerRef={scrollbarContainerRef}
              scrollbarRef={scrollbarRef}
              handleScrollbarDrag={handleScrollbarDrag}
            />
            <ServiceListMobile
              services={services}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />
          </div>
          <ServiceDescription services={services} activeIndex={activeIndex} />
        </div>
        <style jsx>{`
          .custom-list li::marker {
            font-size: 1.2em;
            color: #4e5158cc;
          }
        `}</style>
      </div>
    </div>
  );
}
