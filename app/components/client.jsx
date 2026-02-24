"use client";

import { useEffect, useRef } from "react";

const equipmentTypes = [
  "/c1.png",
  "/c2.png",
  "/c3.png",
  "/c4.png",
  "/c5.png",
  "/c6.png",
  "/c7.png",
  "/c8.png",
  "/c9.png",
  "/c10.png",
];

const Clients = () => {
  const scrollRef = useRef(null);
  const loopedItems = [...equipmentTypes, ...equipmentTypes];

  // Infinite scroll
  useEffect(() => {
    const interval = setInterval(() => {
      const scroller = scrollRef.current;
      if (scroller) {
        scroller.scrollLeft += 1;
        if (scroller.scrollLeft >= scroller.scrollWidth / 2) scroller.scrollLeft = 0;
      }
    }, 15);
    return () => clearInterval(interval);
  }, []);

  // Scroll buttons
  const scrollBy = (dir) => scrollRef.current?.scrollBy({ left: dir * 300, behavior: "smooth" });

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-[32px] font-bold mb-1 text-white">
            OUR <span className="text-yellow-400">CLIENTS</span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg md:text-[16px] text-white">
            Proudly serving leading companies across mining, construction, and infrastructure.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
      
          

          <div
            ref={scrollRef}
            className="flex overflow-hidden space-x-6 scrollbar-hide"
            style={{ scrollBehavior: "auto" }}
          >
            {loopedItems.map((src, idx) => (
              <div
                key={idx}
                className="group w-[250px] flex-shrink-0 overflow-hidden rounded-xl bg-white shadow-md transition hover:shadow-xl"
              >
                <div className="aspect-video flex items-center justify-center overflow-hidden bg-gray-50">
                  <img
                    src={src}
                    alt="Client Logo"
                    className="h-full w-[200px] object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
