"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowRight, ArrowLeft, Wrench, Settings, Cpu } from "lucide-react";
import Clients from "@/app/components/client";
import Footer from "@/app/components/footer";
import { products } from "../../../data/products";
import WhyPartner from "@/app/components/whyus";

export default function SingleProductShowcase({ id }) {
  // Get the product category based on the id passed from the server wrapper
  const category = products[id];

  // Handle invalid product id
  if (!category) {
    return (
      <div className="text-center text-white  min-h-screen py-40">
        <h1 className="text-4xl">Product Not Found</h1>
        <p className="mt-4">The product you are looking for does not exist.</p>
      </div>
    );
  }

  // Generate carousel slides for this category
const generateSlides = (category) => {
  const slides = category.types.flatMap((type, idx) =>
    type.image?.products
      ? type.image.products.map((src, i) => ({
          id: `${category.id}-${idx}-${i}`,
          src,
          alt: `${type.name} Slide ${i + 1}`,
        }))
      : []
  );

  if (slides.length === 0) {
    return [
      { id: `${category.id}-default-0`, src: category.image || "/et1.png", alt: category.title },
    ];
  }
  return slides;
};


  const slides = generateSlides(category);
  const [index, setIndex] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // every 3 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  // Icons for types
  const typeIcons = [<Cpu />, <Settings />, <Wrench />];

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative h-[80vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url('${category.heroImage || "/producthero.png"}')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>

        <div className="relative w-[85vw] md:w-[75vw] lg:w-[70vw] mx-auto flex flex-col text-left z-10 px-4 sm:px-6 lg:px-8 mt-10">
          <h1 className="text-3xl sm:text-4xl md:text-[36px]  font-bold mb-6 leading-relaxed uppercase">
            <span className="block text-white">{category.title1 || "Powering the"}</span>
            <span className="block text-white">{category.title2 || "Future of"}</span>
            <span className="block text-yellow-500">{category.title || "Heavy Machinery"}</span>
          </h1>

          <div className="max-w-3xl">
            <p className="text-base sm:text-lg md:text-md text-gray-300 mb-8 leading-relaxed">
              {category.description ||
                "Engines, Transmissions & Spares engineered for unmatched performance in mining, construction & earthmoving."}
            </p>
          </div>
        </div>
      </section>

      {/* Title & Description Below Hero */}
      <section className="bg-black text-white py-20 px-6 md:px-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-3xl font-bold text-yellow-400 mb-4">
            {category.title}
          </h2>
          {category.description && (
            <p className="text-gray-300 text-lg md:text-sm leading-relaxed">
              {category.description}
            </p>
          )}
        </motion.div>
      </section>

      {/* Main Section */}
    <section className="relative bg-black text-white w-full overflow-hidden px-6 md:px-20 pt-10 pb-20 ">
  <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-900 to-black opacity-95" />
  <div className="relative z-10 max-w-6xl mx-auto">
    <div className="grid md:grid-cols-2 gap-16 items-start">
      {/* Left Side: Type Details + Para & MainHead */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="space-y-8"
      >
        {category.para && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-gray-300 text-md md:text-md mb-2 leading-relaxed"
          >
            {category.para}
          </motion.p>
        )}

        {category.mainhead && (
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-xl font-bold text-yellow-400 mb-10 mt-10"
          >
            {category.mainhead}
          </motion.h2>
        )}

        {category.types.map((type, idx) => (
          <div key={idx}>
            <h3 className="text-lg font-semibold text-white flex items-center gap-5">
              <span className="w-4 h-4 text-yellow-400">{typeIcons[idx] || <Cpu />}</span>
              {type.name}
            </h3>
            <p className="mt-3 text-gray-300 leading-relaxed">{type.description}</p>
            {type.specs && (
              <ul className="mt-2 text-gray-400 text-sm space-y-1">
                {type.specs.map((spec, sIdx) => (
                  <li key={sIdx}>
                    <span className="font-semibold text-yellow-400 text-md">{spec.label}:</span>{" "}
                    {spec.value}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}

        {category.id === "engine" && (
          <div className="flex gap-4 pt-4 flex-wrap">
            <button className="px-6 py-3 rounded-2xl bg-yellow-400 text-black font-semibold flex items-center gap-2 hover:bg-yellow-300 transition">
              Find Service Centre <ArrowRight className="w-4 h-4" />
            </button>
            <button className="px-6 py-3 rounded-2xl border border-yellow-400 text-yellow-400 font-semibold flex items-center gap-2 hover:bg-yellow-400 hover:text-black transition">
              Download Specs
            </button>
          </div>
        )}
      </motion.div>

      {/* Right Side: Centered Carousel */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-2xl shadow-2xl border border-neutral-800  "
      >
        <AnimatePresence>
          <motion.div
            key={slides[index].id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <Image
              src={slides[index].src}
              alt={slides[index].alt}
              fill
              className="object-cover object-center rounded-2xl"
            />
          </motion.div>
        </AnimatePresence>

        <button
          onClick={() => setIndex((prev) => (prev - 1 + slides.length) % slides.length)}
          className="absolute top-1/2 -translate-y-1/2 left-4 bg-black/60 p-3 rounded-full text-white hover:text-yellow-400 transition"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => setIndex((prev) => (prev + 1) % slides.length)}
          className="absolute top-1/2 -translate-y-1/2 right-4 bg-black/60 p-3 rounded-full text-white hover:text-yellow-400 transition"
        >
          <ArrowRight className="w-6 h-6" />
        </button>

        {/* Decorative glows */}
        <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-red-400/20 rounded-full blur-3xl" />
        <div className="absolute -top-6 -left-6 w-32 h-32 bg-yellow-400/20 rounded-full blur-3xl" />
      </motion.div>
    </div>
  </div>
</section>


      {/* Ground Engaging Tools Section (only for undercarriage) */}
      {category.id === "undercarriage" && (
        <section className="bg-black text-white py-20 px-6 md:px-20">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            {/* Left Side: Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-2xl shadow-2xl border border-neutral-800"
            >
              <Image
                src="/under.png"
                alt="Ground Engaging Tools"
                fill
                className="object-cover rounded-2xl"
              />
            </motion.div>

            {/* Right Side: Content */}
            <div className="space-y-8">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-2xl font-bold text-yellow-400 mb-6"
              >
                Ground Engaging Tools (GET)
              </motion.h2>

              <p className="text-md md:text-md text-gray-300 leading-relaxed">
                At Setlite Engineers Limited, we offer a full range of Ground Engaging Tools (GET) built to perform under pressure. Our lineup includes buckets, teeth, adapters, cutting edges, and other essential components, engineered for mining, construction, agriculture, and high-impact industries.
              </p>

              <h3 className="text-xl font-semibold text-yellow-400">Why Our GET Components?</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Crafted from high-grade wear-resistant materials</li>
                <li>Withstands abrasive conditions for longer life</li>
                <li>Delivers enhanced penetration and reduced stress</li>
                <li>Boosts productivity across every job site</li>
                <li>Smart design for quick replacement & minimal downtime</li>
              </ul>

              <h3 className="text-xl font-semibold text-yellow-400 mt-8">Black Cat Wear Parts – Trusted Global Manufacturer</h3>
              <p className="text-gray-300 leading-relaxed">
                We proudly supply Black Cat Wear Parts, a globally respected manufacturer of high-quality cutting edges and cast wear parts for all makes of earthmoving equipment. With facilities in Canada, USA, and China, Black Cat ensures reliable performance across its product range.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Teeth and Adapters</li>
                <li>Fabricated and Cast Wear Parts</li>
                <li>Cutting Edges for All Major Earthmoving Equipment Brands</li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                Known for precision engineering and durability, Black Cat Wear Parts are ideal for operators who demand maximum wear life and consistent performance in the toughest conditions.
              </p>

              <p className="text-md md:text-md text-gray-300 leading-relaxed mt-6">
                Whether you need standard wear parts or specialized GET components, Setlite Engineers Limited is your trusted partner in providing reliable, high-performance solutions tailored to your operation.
              </p>
            </div>
          </div>
        </section>
      )}
      {/* Spare Parts Section (only for spares) */}
      {category.id === "spares" && (
        <section className="bg-black text-white py-20 px-6 md:px-20">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            {/* Left Side: Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative w-full h-[400px] md:h-[400px] overflow-hidden rounded-2xl shadow-2xl border border-neutral-800"
            >
              <Image
                src="/spare.png"
                alt="Spare Parts Global Sourcing"
                fill
                className="object-cover rounded-2xl"
              />
            </motion.div>

            {/* Right Side: Content */}
            <div className="space-y-8">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-xl md:text-xl font-bold text-yellow-400 mb-6"
              >
                Spare Parts: Global Sourcing Solutions
              </motion.h2>

              <p className="text-md md:text-md text-gray-300 leading-relaxed">
                At Setlite Engineers Limited, we understand the critical role high-quality parts and 
                components play in maintaining operational efficiency. In today’s fast-paced, 
                competitive industrial landscape, access to top-tier parts is essential for ensuring 
                the smooth and reliable operation of machinery. That’s why we proudly offer 
                comprehensive global sourcing services to provide our customers with access to a wide 
                range of parts from trusted, high-quality manufacturers around the world.
              </p>

              <h3 className="text-xl font-semibold text-yellow-400">Why Choose Setlite Engineers Limited?</h3>
              <p className="text-gray-300 leading-relaxed text-md">
                Our global sourcing strategy ensures that we provide only genuine OEM (Original Equipment 
                Manufacturer) parts, as well as premium aftermarket parts, all meeting the highest 
                standards of quality, performance, and reliability. Through strategic partnerships with 
                world-class manufacturers and suppliers, we are able to offer the best components for a 
                wide range of heavy-duty machinery.
              </p>
              <p className="text-gray-300 leading-relaxed text-md">
                Whether you need parts from industry giants like Komatsu, Cummins, Caterpillar, Hitachi, 
                BEML, Doosan, Mitsubishi, or other leading brands, our extensive network ensures that we 
                can meet your exact specifications—whether you’re looking for common components or 
                hard-to-find parts. We’re committed to providing tailored solutions for all your sourcing 
                needs.
              </p>

              <h3 className="text-xl font-semibold text-yellow-400">What We Source Globally</h3>
              <p className="text-gray-300 leading-relaxed text-md">
                What truly differentiates us is our strong network of strategic supplier partnerships 
                combined with rigorous quality assurance protocols. We are committed to sourcing only 
                genuine OEM parts, ensuring that every component we deliver meets the exacting 
                specifications and engineering standards of the original production. This guarantees a 
                seamless fit, optimal performance, and long-term reliability.
              </p>
              <p className="text-gray-300 leading-relaxed text-md">
                In addition to OEM components, we also offer a carefully curated selection of 
                high-quality aftermarket parts from trusted and reputable manufacturers. These alternatives 
                provide a more cost-effective solution for budget-conscious operations—without sacrificing 
                the performance, durability, or reliability your business demands. Whether you choose OEM 
                or aftermarket, you can count on consistent quality and value that supports your 
                operational efficiency and long-term success.
              </p>
              <p className="text-gray-300 leading-relaxed text-md">
                Our sourcing capabilities extend to a wide variety of engine components and assemblies, 
                such as pistons, crankshafts, cylinder heads, turbochargers, fuel pumps, injectors, and 
                timing systems. Each part is carefully selected and inspected to ensure compatibility 
                with your equipment and optimal performance in even the most demanding environments. We 
                also supply critical transmission components including clutch plates, seals and gaskets, 
                gears and bearings, charging pumps, solenoids, and control valves—ensuring seamless 
                operation across all types of heavy machinery.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Clients Section */}
      <section className="bg-black py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center"
        >
        
        </motion.div>
      </section>

      <WhyPartner />
      {/* Disclaimer */}
      <div className="border-b border-black bg-black pt-4  px-4 pb-10">
        <p className="text-sm text-gray-400 text-center max-w-5xl mx-auto leading-relaxed">
          <strong>Disclaimer:</strong> All brand names and images used are
          solely for reference and illustration purposes. Setlite Engineers
          Limited does not imply any ownership or direct affiliation unless
          specifically stated.
        </p>
      </div>
      <Footer />
    </>
  );
}
