"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { products } from "../../data/products";

export default function Categories() {
  const router = useRouter();

  const handleRedirect = (item) => {
    if (item.id === "avtec") {
      router.push(`/products/${item.id}`);
    } else if (item.id === "engine") {
      router.push("/products/engine");
    } else {
      router.push(`/products/others/${item.id}`);
    }
  };

  // Duplicate items 2x to create seamless looping
  const productItems = [...Object.values(products), ...Object.values(products)];

  return (
    <div className="pb-20 bg-[#0D0F12] overflow-hidden">
      {/* Header */}
      <div className="text-center mb-12 px-4 pt-20">
        <h2 className="text-4xl md:text-5xl font-bold tracking-wide text-white">
          OUR <span className="text-yellow-400">PRODUCTS</span>
        </h2>
        <p className="text-gray-400 mt-4 text-base md:text-lg max-w-2xl mx-auto">
          Engines, Transmissions & Spares engineered for unmatched performance
          in mining, construction & earthmoving.
        </p>
      </div>

      {/* Carousel */}
      <div className="relative w-full overflow-hidden">
        <div className="flex w-max animate-marquee gap-8">
          {productItems.map((item, index) => (
            <div
              key={index}
              onClick={() => handleRedirect(item)}
              className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer bg-[#1A1D21] hover:shadow-2xl hover:shadow-yellow-500/30 transition-all duration-500 w-[250px] sm:w-[300px] md:w-[350px]"
            >
              {/* Background Image */}
              <Image
                src={
                  item.image?.startsWith("http") || item.image?.startsWith("/")
                    ? item.image
                    : "/" + item.image
                }
                alt={item.title || "Product image"}
                width={500}
                height={500}
                unoptimized
                className="object-cover w-full h-72 sm:h-80 md:h-96 group-hover:scale-110 transition-transform duration-700 ease-out"
                onError={(e) => {
                  e.currentTarget.src = "/fallback.png";
                }}
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/65 group-hover:bg-black/55 transition duration-500"></div>

              {/* Title */}
              <div className="absolute inset-0 flex items-center justify-center text-center px-4 z-10">
                <h2 className="text-yellow-400 font-extrabold text-xl sm:text-2xl md:text-3xl uppercase leading-tight tracking-wide drop-shadow-lg transition-colors duration-500">
                  {item.title}
                </h2>
              </div>

              {/* Explore Button */}
              <div className="absolute bottom-4 right-4">
                <button className="text-white text-sm flex items-center gap-1 hover:text-yellow-400 transition relative group/explore">
                  Explore
                  <span className="transition-transform duration-300 group-hover/explore:translate-x-1">
                    →
                  </span>
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover/explore:w-full"></span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Continuous Marquee Style */}
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
}
