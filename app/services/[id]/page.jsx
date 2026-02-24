// app/services/[id]/page.jsx

import Image from "next/image";
import { service } from "../data/service"; // Updated data file with Engines, Transmission, HEMM Maintenance, Field Service
import { notFound } from "next/navigation";
import { ChevronRight, Wrench } from "lucide-react";
import Footer from "@/app/components/footer";
import WhyPartner from "@/app/components/whyus";
import Link from "next/link";

// 1. Hero Component
const ServiceHero = ({ heroImage, title1, title2, description }) => {
  return (
    <section
      className="relative h-[80vh]  flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url('${heroImage}')` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
      <div className="relative w-[85vw] md:w-[75vw] lg:w-[70vw] mx-auto flex flex-col text-left z-10 px-4 sm:px-6 lg:px-8 mt-10">
        <h1 className="text-3xl md:text-[36px] font-bold mb-6 leading-relaxed uppercase">
          <span className="block text-white">{title1}</span>
          <span className="block text-yellow-400">{title2}</span>
        </h1>
        <div className="max-w-3xl">
          <p className="text-base sm:text-lg md:text-xl  text-gray-300 mb-8 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

// 2. Intro Section
const ServiceIntro = ({ mainTitle, introDescription }) => {
  return (
    <section className=" pb-2 pt-16">
      <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-[36px] md:text-[34px] font-bold text-yellow-400 mb-4">
          {mainTitle}
        </h1>
        <p className="text-md sm:text-md text-gray-300 leading-relaxed">
          {introDescription}
        </p>
      </div>
    </section>
  );
};

// 3. Main Page Component
export default function ServiceDetailPage({ params }) {
  const { id } = params;
  const serviceData = service[id];

  if (!serviceData) {
    notFound();
  }

  // Collect Supported Brands
  const supportedItems = [];
  serviceData.types.forEach((type) => {
    const supportedSpec = type.specs.find(
      (spec) =>
        spec.label.toLowerCase().includes("supported") ||
        spec.label.toLowerCase().includes("applicable")
    );
    if (supportedSpec) {
      supportedItems.push(
        ...supportedSpec.value.split(",").map((item) => item.trim())
      );
    }
  });
  const uniqueSupportedItems = [...new Set(supportedItems)];

  return (
    <main className="bg-black ">
      {/* Hero Section */}
      <ServiceHero
        heroImage={serviceData.heroImage}
        title1={serviceData.title1}
        title2={serviceData.title2}
        description={serviceData.description}
      />

      {/* Intro Section */}
      <ServiceIntro
        mainTitle={` ${serviceData.title} `}
        introDescription={` ${serviceData.subhead}`}
      />

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-20 sm:py-24 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12">
          {/* Left Column */}
          <div className="flex flex-col justify-center">
            {uniqueSupportedItems.length > 0 && (
              <div className="mb-10">
                <p className="text-sm text-gray-300">
             
                  {uniqueSupportedItems.join(", ")}
                </p>
              </div>
            )}

            {/* Process Section */}
     {serviceData.types.some((type) => type.name) && (
  <div>
    <h2 className="text-2xl font-bold text-white border-b-2 border-yellow-400 pb-3">
      {serviceData.head}
    </h2>
    <ul role="list" className="mt-8 space-y-6">
      {serviceData.types.map((type, index) =>
        type.name ? ( // Only render if name exists
          <li key={index} className="flex gap-x-4">
            <Wrench
              className="mt-1 h-5 w-5 flex-none text-yellow-400"
              aria-hidden="true"
            />
            <span>
              <strong className="font-semibold text-md text-white">
                {type.name}
              </strong>
              <br />
              <span className="text-gray-300 text-sm">{type.description}</span>
            </span>
          </li>
        ) : null
      )}
    </ul>
  </div>
)}


            {/* CTAs */}
            <div className="mt-12 flex flex-col sm:flex-row gap-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-base font-semibold text-yellow-400 hover:text-yellow-500 transition-colors group"
              >
                Contact Us
                <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-base font-semibold text-gray-300 hover:text-white transition-colors group"
              >
                Explore Other Services
                <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex items-center justify-center">
            <div className="w-full aspect-w-1 aspect-h-1">
              <Image
                src={serviceData.image}
                alt={serviceData.title}
                width={600}
                height={600}
                className="object-cover rounded-2xl border border-gray-800 shadow-2xl shadow-yellow-400/10"
              />
            </div>
          </div>
        </div>
      </div>
      <WhyPartner/>
      {/* Disclaimer */}
      <div className="border-b border-gray-800 pt-4  px-4 pb-10">
        <p className="text-xs md:text-sm text-gray-400 text-center max-w-5xl mx-auto leading-relaxed">
          <strong>Disclaimer:</strong> All brand names and images used are
          solely for reference and illustration purposes. Setlite Engineers
          Limited does not imply any ownership or direct affiliation unless
          specifically stated.
        </p>
      </div>
      <Footer />
    </main>
  );
}
