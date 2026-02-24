'use client'
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import engineData from "../data/engine";
import Footer from "@/app/components/footer";
import Enginehero from "./enginehero";

export default function EngineAndTransmissionSections() {
  const [tab, setTab] = useState("engine");
  const [carouselIndex, setCarouselIndex] = useState(0);
  const timerRef = useRef(null);

  // Images for the left-side carousel depending on tab
  const images =
    tab === "engine"
      ? [
          engineData.heroImage,
          engineData.heroImage1,
          engineData.heroImage2,
          engineData.heroImage3,
        ]
      : [
          engineData.transmission.heroImage,
          engineData.transmission.heroImage1,
          engineData.transmission.heroImage2,
          engineData.transmission.heroImage3,
        ];

  // Auto-slide carousel every 4 seconds
  useEffect(() => {
    timerRef.current = setTimeout(() => {
      setCarouselIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearTimeout(timerRef.current);
  }, [carouselIndex, tab]);

  const prevSlide = () => {
    clearTimeout(timerRef.current);
    setCarouselIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    clearTimeout(timerRef.current);
    setCarouselIndex((prev) => (prev + 1) % images.length);
  };

  // WhatsApp link
  const whatsappLink = "https://wa.me/919716001002";

  return (
    <>
      <Enginehero />

      <section className="py-12 px-6 md:px-20 bg-black text-white rounded-xl">
        {/* Tab Buttons */}
        <div className="flex justify-center gap-4 mb-10">
          <button
            className={`px-8 py-3 text-md font-semibold border-b-4 transition-colors ${
              tab === "engine"
                ? "border-yellow-400 text-yellow-400"
                : "border-transparent text-gray-400 hover:text-yellow-400"
            }`}
            onClick={() => setTab("engine")}
          >
            ENGINE SALES
          </button>
          <button
            className={`px-8 py-3 text-md font-semibold border-b-4 transition-colors ${
              tab === "transmission"
                ? "border-yellow-400 text-yellow-400"
                : "border-transparent text-gray-400 hover:text-yellow-400"
            }`}
            onClick={() => setTab("transmission")}
          >
            TRANSMISSION SALES
          </button>
        </div>

        {/* ENGINE TAB */}
        {tab === "engine" && (
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-5">{engineData.title}</h2>
            <p className="max-w-3xl mx-auto text-sm text-gray-300 mb-10">
              {engineData.description}
            </p>

            <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
              {/* Left-side Carousel */}
              <div className="flex-1 flex flex-col items-center">
                <div className="w-[300px] md:w-[400px] h-[400px] relative mb-4">
                  <Image
                    src={images[carouselIndex]}
                    alt={`Engine Image ${carouselIndex + 1}`}
                    fill
                    className="object-cover rounded-lg shadow-lg transition-all duration-700"
                  />
                </div>

                {/* Arrows below image */}
                <div className="flex justify-center gap-6">
                  <button
                    onClick={prevSlide}
                    className="bg-black/40 px-4 py-2 rounded-full hover:bg-black/60 text-white"
                  >
                    &#10094;
                  </button>
                  <button
                    onClick={nextSlide}
                    className="bg-black/40 px-4 py-2 rounded-full hover:bg-black/60 text-white"
                  >
                    &#10095;
                  </button>
                </div>
              </div>

              {/* Right-side text */}
              <div className="flex-1 text-left">
                <ul className="list-disc pl-6 text-gray-300 space-y-3 text-md">
                  {engineData.engines.map((eng, idx) => (
                    <li key={idx}>
                      <strong>{eng.name}:</strong> {eng.description}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* WhatsApp Contact Button */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 text-sm bg-yellow-400 text-black font-semibold rounded shadow-lg hover:bg-yellow-300 transition"
            >
              Contact Our Engine Experts
            </a>
          </div>
        )}

        {/* TRANSMISSION TAB */}
        {tab === "transmission" && (
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-5">{engineData.title1}</h2>
            <p className="max-w-3xl mx-auto text-sm text-gray-300 mb-12">
              {engineData.transmission.description}
            </p>

            <div className="flex flex-col md:flex-row gap-6 mb-8 items-center">
              {/* Left-side Carousel */}
              <div className="flex-1 flex flex-col items-center">
                <div className="w-[300px] md:w-[400px] h-[400px] relative mb-4">
                  <Image
                    src={images[carouselIndex]}
                    alt={`Transmission Image ${carouselIndex + 1}`}
                    fill
                    className="object-cover rounded-lg shadow-lg transition-all duration-700"
                  />
                </div>

                {/* Arrows below image */}
                <div className="flex justify-center gap-6">
                  <button
                    onClick={prevSlide}
                    className="bg-black/40 px-4 py-2 rounded-full hover:bg-black/60 text-white"
                  >
                    &#10094;
                  </button>
                  <button
                    onClick={nextSlide}
                    className="bg-black/40 px-4 py-2 rounded-full hover:bg-black/60 text-white"
                  >
                    &#10095;
                  </button>
                </div>
              </div>

              {/* Right-side text */}
              <div className="flex-1 text-left">
                <ul className="list-disc pl-6 text-gray-300 space-y-3 text-sm">
                  {engineData.transmission.types.map((type, idx) => (
                    <li key={idx}>
                      <strong>{type.name}:</strong> {type.description}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* WhatsApp Contact Button */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-yellow-400 text-black font-semibold rounded shadow-lg hover:bg-yellow-300 transition"
            >
              Contact Our Transmission Experts
            </a>
          </div>
        )}

        {/* Disclaimer */}
        <div className="border-b border-gray-800 px-4 pb-10 pt-10">
          <p className="text-sm text-gray-400 text-center max-w-5xl mx-auto leading-relaxed">
            <strong>Disclaimer:</strong> All brand names and images used are
            solely for reference and illustration purposes. Setlite Engineers
            Limited does not imply any ownership or direct affiliation unless
            specifically stated.
          </p>
        </div>

        <Footer />
      </section>
    </>
  );
}
