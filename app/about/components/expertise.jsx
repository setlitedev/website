"use client";
import Image from "next/image";
import {
  Cpu,
  RefreshCcw,
  Settings,
  Package,
  FileCog,
} from "lucide-react";

const expertise = [
  {
    title: "Engine & Transmission Overhauls",
    description: [
      "Specializing in Komatsu and BEML equipment.",
      "Complete overhaul of dumpers, dozers, and excavators.",
      "Rigorous test bench evaluations before delivery.",
    ],
    icon: <Cpu className="w-8 h-8 text-yellow-400" />,
    imageSrc: "/koma.png", // replace with real file paths
    imageAlt: "Excavator at site",
  },
  {
    title: "Reconditioned Components & Exchange Program",
    description: [
      "Large inventory of reconditioned engines & transmissions.",
      "Exchange model reduces downtime and cost.",
      "Maintains OEM-grade reliability and performance.",
    ],
    icon: <RefreshCcw className="w-8 h-8 text-yellow-400" />,
    imageSrc: "/rec.png",
    imageAlt: "Heavy equipment stacked",
  },
  {
    title: "Powertrain & Precision Solutions",
    description: [
      "OEM partnerships with AVTEC Limited.",
      "Advanced powertrain and engineered solutions.",
    ],
    icon: <Settings className="w-8 h-8 text-yellow-400" />,
    imageSrc: "/powe.png",
    imageAlt: "Industrial equipment setup",
  },
  {
    title: "Reconditioned Sub-Assemblies",
    description: [
      "Refurbished components: drives, hydraulics, starters, alternators, turbos, pumps.",
      "OEM performance without premium cost.",
    ],
    icon: <Package className="w-8 h-8 text-yellow-400" />,
    imageSrc: "/recond.png",
    imageAlt: "Close-up industrial parts",
  },
  {
    title: "Long-Term Maintenance Contracts",
    description: [
      "Full maintenance & rate contracts expertise.",
      "Fleet management: dumpers, dozers, loaders, miners.",
      "Ensures maximum uptime and equipment longevity.",
    ],
    icon: <FileCog className="w-8 h-8 text-yellow-400" />,
    imageSrc: "/ex5.png",
    imageAlt: "Factory with machinery",
  },
];

export default function OurExpertise() {
  return (
    <section className="bg-black text-white font-sans py-20 px-6 md:px-16">
      {/* Section Header */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-3xl font-bold mb-4">
          <span className="text-white">OUR</span>{" "}
          <span className="text-yellow-400">EXPERTISE</span>
        </h2>
        <p className="text-gray-400 text-md">
          Engineering excellence paired with precision visuals—for clarity, trust, and impact.
        </p>
      </div>

      {/* Expertise Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {expertise.map((item, idx) => (
          <div key={idx} className="bg-[#1a1d21]/70 rounded-xl overflow-hidden md:w-[400px] mx-auto shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="relative h-60 ">
              <Image
                src={item.imageSrc}
                alt={item.imageAlt}
                fill
                className="object-cover brightness-75"
              />
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center space-x-3 ">
               <span className="">{item.icon}</span>
                <h3 className="text-xl font-semibold">{item.title}</h3>
              </div>
              <ul className="text-gray-300 space-y-1">
                {item.description.map((desc, i) => (
                  <li key={i}>• {desc}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
