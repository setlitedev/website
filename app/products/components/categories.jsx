"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { products } from "../../data/products";

const Categories = () => {
  const router = useRouter();

  const handleRedirect = ({ id }) => {
    router.push(
      id === "avtec"
        ? `/products/${id}`
        : id === "engine"
        ? "/products/engine"
        : `/products/others/${id}`
    );
  };

  // Duplicate items for infinite scroll effect
  const productItems = [...Object.values(products), ...Object.values(products)];

  return (
    <div className="overflow-hidden bg-[#0D0F12] pb-20">
      {/* Header */}
      <div className="px-4 pt-20 text-center mb-12">
        <h2 className="text-3xl md:text-[32px] font-bold tracking-wide text-white">
          OUR <span className="text-yellow-400">PRODUCTS</span>
        </h2>
        <p className="mt-1 max-w-2xl mx-auto text-base md:text-[16px] text-gray-400">
          Engines, Transmissions & Spares engineered for unmatched performance
          in mining, construction & earthmoving.
        </p>
      </div>

      {/* Carousel */}
      <div className="relative w-full overflow-hidden">
        <div className="flex w-max animate-marquee gap-8">
          {productItems.map((item, i) => {
            const imgSrc =
              item.image?.startsWith("http") || item.image?.startsWith("/")
                ? item.image
                : "/" + item.image;

            return (
              <div
                key={i}
                onClick={() => handleRedirect(item)}
                className="group relative h-[320px] w-[250px] sm:w-[300px] md:w-[300px] cursor-pointer overflow-hidden rounded-xl bg-[#1A1D21] shadow-lg transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-500/30"
              >
                {/* Background Image */}
                <Image
                  src={imgSrc}
                  alt={item.title || "Product image"}
                  width={500}
                  height={500}
                  unoptimized
                  className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 sm:h-80 md:h-96"
                  onError={(e) => (e.currentTarget.src = "/fallback.png")}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/65 transition duration-500 group-hover:bg-black/55" />

                {/* Title */}
                <div className="absolute inset-0 z-10 flex items-center justify-center px-4 text-center">
                  <h2 className="font-extrabold uppercase leading-tight tracking-wide text-yellow-400 drop-shadow-lg transition-colors duration-500 text-xl sm:text-2xl md:text-[26px]">
                    {item.title}
                  </h2>
                </div>

                {/* Explore Button */}
                <button className="group/explore absolute bottom-4 right-4 flex items-center gap-1 text-sm text-white transition hover:text-yellow-400">
                  Explore
                  <span className="transition-transform duration-300 group-hover/explore:translate-x-1">
                    →
                  </span>
                  <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-yellow-400 transition-all duration-300 group-hover/explore:w-full" />
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Continuous Marquee Animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Categories;
