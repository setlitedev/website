"use client";
import { useRouter } from "next/navigation";
import { service } from "../data/service";
import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ServiceCategories() {
  const router = useRouter();
  const serviceItems = Object.values(service);
  const [current, setCurrent] = useState(0);

  const handleRedirect = (item) => {
    router.push(`/services/${item.id}`);
  };

  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % serviceItems.length);

  const prevSlide = () =>
    setCurrent((prev) =>
      prev === 0 ? serviceItems.length - 1 : prev - 1
    );

  // Calculate position relative to current index
  const getPosition = (index) => {
    if (index === current) return 0;
    if ((index === current - 1) || (current === 0 && index === serviceItems.length - 1)) return -1;
    if ((index === current + 1) || (current === serviceItems.length - 1 && index === 0)) return 1;
    return 2; // all others hidden
  };

  return (
    <section className="py-24 relative overflow-hidden bg-[#0D0F12]">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 bg-[url('/patterns/grid.svg')] bg-repeat"></div>

      {/* Header */}
      <div className="relative text-center mb-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-[32px] font-bold tracking-wider text-white">
          OUR <span className="text-yellow-400">SERVICES</span>
        </h2>
        <p className="text-gray-400 mt-1 text-lg md:text-[15px] leading-relaxed">
          Tailored solutions to maximize{" "}
          <span className="text-yellow-400 font-semibold">uptime</span>, enhance{" "}
          <span className="text-yellow-400 font-semibold">efficiency</span>,<br /> and
          ensure peak{" "}
          <span className="text-yellow-400 font-semibold">performance</span> for
          engines, transmissions, and heavy-duty machinery.
        </p>
      </div>

      {/* Slider Container */}
      <div className="relative max-w-6xl mx-auto flex items-center justify-center px-6">
        {/* Prev Button */}
        <button
          onClick={prevSlide}
          className="absolute left-0 md:-left-10 z-20 p-3 rounded-full bg-black/40 hover:bg-black/70 text-yellow-400 shadow-lg transition"
          aria-label="Previous"
        >
          <ChevronLeft size={28} />
        </button>

        {/* Cards */}
        <div className="relative flex  justify-center items-center w-[700px] h-[500px] ">
          {serviceItems.map((item, index) => {
            const pos = getPosition(index);
            if (pos === 2) return null; // hide far cards

            // center card full scale, side cards smaller & faded
            const isCenter = pos === 0;
            const xOffset = pos * 300; // spacing left/right
            return (
              <motion.div
                key={index}
                className="absolute cursor-pointer rounded-3xl overflow-hidden shadow-xl"
                onClick={() => handleRedirect(item)}
                initial={{ opacity: 0 }}
                animate={{
                  x: xOffset,
                  scale: isCenter ? 1 : 0.85,
                  opacity: isCenter ? 1 : 0.4,
                  zIndex: isCenter ? 20 : 10,
                }}
                transition={{ duration: 0.6 }}
                style={{
                  width: isCenter ? "60%" : "45%",
                  height: "90%",
                }}
              >
                {/* Background */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500"
                  style={{
                    backgroundImage: `url(${
                      item.image?.startsWith("http") || item.image?.startsWith("/")
                        ? item.image
                        : "/" + item.image
                    })`,
                  }}
                ></div>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/45 to-transparent"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col justify-end items-center text-center h-full px-6 pb-10">
                  <h3 className="text-2xl md:text-[24px] font-bold text-yellow-400 mb-3 uppercase  ">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm md:text-[14px] max-w-[360px] leading-relaxed">
                    {item.description ||
                      "Premium service crafted to deliver excellence and reliability."}
                  </p>
                  {isCenter && (
                    <button className="mt-6 flex items-center gap-2 text-sm md:text-base text-white font-semibold relative group/btn">
                      Learn More
                      <span className="transition-transform duration-300 group-hover/btn:translate-x-1">
                        →
                      </span>
                      <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-yellow-400 transition-all duration-500 group-hover/btn:w-full group-hover/btn:shadow-[0_0_10px_#facc15]"></span>
                    </button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute right-0 md:-right-10 z-20 p-3 rounded-full bg-black/40 hover:bg-black/70 text-yellow-400 shadow-lg transition"
          aria-label="Next"
        >
          <ChevronRight size={28} />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {serviceItems.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-3 w-3 rounded-full transition ${
              current === i ? "bg-yellow-400" : "bg-gray-600"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
